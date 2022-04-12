import { Address, BigInt, ethereum, dataSource } from "@graphprotocol/graph-ts"
import {
  RewardsControl,
  DaoClaimed,
  DevClaimed,
  NewDev,
  NewUser,
  RemovedDev,
  RewardsClaimed,
  SetTime,
  TokensReceived
} from "../../generated/RewardsControl/RewardsControl"
import { RewardsToken, RewardsUser, ClaimClock, ClaimedRewards, Token, RewardsDayData, RewardsHourData } from "../../generated/schema"
import { getDateString, getDay, getHour, getTimeString, SECS_PER_DAY, SECS_PER_HOUR } from '../helpers/datetime';
import { ERC20 } from "../../generated/RewardsControl/ERC20";
import { getClock, getDaoRewards, getDevRewards, getDevStats, getEthStats, getRewardsDayData, getRewardsHourData, getToken, getTokenLength, getUserRewards, getUserStats } from "../helpers/services";

export function handleSetTime(event: SetTime): void {
  let date = getDateString(event.block.timestamp);

  let clock = ClaimClock.load(date)

  if(!clock){
    clock = new ClaimClock(date)
    clock.alpha = BigInt.fromI32(0);
    clock.delta = BigInt.fromI32(0);
    clock.omega = BigInt.fromI32(0);
  }
  clock.date = date;
  clock.alpha = event.params.alpha;
  clock.delta = event.params.delta;
  clock.omega = event.params.omega;
  clock.totalUsers = event.params.currentUserCount;
  let devs = getDevStats(event.address);
  clock.totalDevs = devs;
  let users = getUserStats(event.address);
  clock.totalUsers = users;
  let eth = getEthStats(event.address);
  clock.totalEther = eth;
  clock.save();
}

export function handleNewDev(event: NewDev): void {
  let date = getDateString(event.block.timestamp);
  let devId = event.params.devAddress.toHexString();
  let dev = new RewardsUser(devId);
  dev.user = event.params.devAddress.toHexString();
  // dev.userId = dev.count;
  dev.type = "dev";
  dev.createdAt = date;
  dev.blockCreated = event.block.timestamp;
  dev.alpha = event.block.timestamp;
  dev.delta = BigInt.fromI32(0);
  dev.omega = BigInt.fromI32(0);
  dev.active = true;
  dev.save();
}

export function handleRemovedDev(event: RemovedDev): void {
  let devId = event.params.devAddress.toHexString();
  let dev = RewardsUser.load(devId);
  if(!dev){
    dev = new RewardsUser(devId);
  }
  dev.active = false;
  dev.save();
}

export function handleNewUser(event: NewUser): void {
  let date = getDateString(event.block.timestamp);
  let userId = event.params.userAddress.toHexString();
  let user = RewardsUser.load(userId);
  if(!user){
    user = new RewardsUser(userId);
  }
  user.user = userId;
  user.type = "user";
  user.createdAt = date;
  user.blockCreated = event.block.timestamp;
  user.alpha = event.block.timestamp;
  user.delta = BigInt.fromI32(0);
  user.omega = BigInt.fromI32(0);
  user.active = true;
  user.save();
}

export function handleRewardsClaimed(event: RewardsClaimed): void {
  let date = getDateString(event.block.timestamp);
  let rewards = new ClaimedRewards(event.transaction.from.toHex());
  let userId = event.params.userAddress.toHexString();
  rewards.user = userId;
  rewards.date = date;
  rewards.block = event.block.timestamp;
  rewards.type = "user";
  rewards.eth = event.transaction.value;
  for(let i=0;i<event.params.contractAddress.length;i++){
    let token = new RewardsToken(userId.concat(date));
    token.token = event.params.contractAddress[i].toHexString();
    token.amount = event.params.erc20Amount[i];
    token.date = date;
    token.block = event.block.timestamp;
    token.save();
  }
  rewards.save();
}

export function handleDevClaimed(event: DevClaimed): void {
  let date = getDateString(event.block.timestamp);
  let devId = event.params.devAddress.toHexString().concat(date);
  let rewards = new ClaimedRewards(devId);
  rewards.user = event.params.devAddress.toHexString();
  rewards.date = date;
  rewards.block = event.block.timestamp;
  rewards.type = "user";
  rewards.eth = event.transaction.value;
  for(let i=0;i<event.params.contractAddress.length;i++){
    let token = new RewardsToken(devId);
    token.token = event.params.contractAddress[i].toString();
    token.amount = event.params.erc20Amount[i];
    token.date = date;
    token.block = event.block.timestamp;
    token.save();
  }
  rewards.save();
}

export function handleDaoClaimed(event: DaoClaimed): void {
  let date = getDateString(event.block.timestamp);
  let daoId = event.params.daoAddress.toHexString().concat(date);
  let dao = RewardsUser.load(daoId);

  if (!dao) {
    dao = new RewardsUser(daoId);
  }
  dao.type = "dao"
  dao.user = event.params.daoAddress.toHexString();
  dao.createdAt = date;
  dao.blockCreated = event.block.timestamp;
  let claim = new ClaimedRewards(daoId);

  claim.date = date;
  claim.type = "dao"
  claim.eth = event.params.amount
  let tokenAddress = event.params.contractAddress
  for(let i=0; i<tokenAddress.length; i = i + 1){
    let token = RewardsToken.load(daoId)
    if (!token) {
      token = new RewardsToken(daoId);
      token.token = event.params.contractAddress[i].toString();
      token.amount = event.params.erc20Amount[i];
      token.date = date;
      token.block = event.block.timestamp;
      token.save();
    }
  }
  dao.omega = dao.delta;
  dao.delta = dao.alpha;
  dao.alpha = event.block.timestamp;
  dao.save()
}

export function handleTokensReceived(event: TokensReceived): void {
  let date = getDateString(event.block.timestamp);
  let tokenId = event.transaction.from.toHexString().concat(date);
  let rewardsToken = new RewardsToken(tokenId);
  
  rewardsToken.token = event.params.tokenAddress.toHexString()
  rewardsToken.amount = event.params.amount;
  rewardsToken.block = event.block.timestamp;
  rewardsToken.dayData = getDateString(event.block.timestamp);
  rewardsToken.hourData = date;
  rewardsToken.save();
  let token = Token.load(event.params.tokenAddress.toHexString().concat(date));
  if(!token){
    let contract = getToken(event.params.tokenAddress);
    token = new Token(event.params.tokenAddress.toString().concat(date));
    token.token_address = event.params.tokenAddress;
    token.name = contract.name;
    token.symbol = contract.symbol;
    token.decimals = contract.decimals;
    token.save();
  }
}

var ONE_DAY = BigInt.fromI32(SECS_PER_DAY);
var ONE_HOUR = BigInt.fromI32(SECS_PER_HOUR);

// export function handleBlock(block: ethereum.Block): void {
//   let date = getDateString(block.timestamp);
//   let time = getTimeString(block.timestamp);
//   let day = getRewardsDayData(block.timestamp);

//   if(!day){
//     day = new RewardsDayData(date);
//     day.date = block.timestamp;
//   }

//   let hour = getRewardsHourData(block.timestamp);
//   let eth = getEthStats(dataSource.address());
//   let users = getUserStats(dataSource.address());
//   let tokens = getTokenLength(dataSource.address());
//   let devs = getDevStats(dataSource.address());

//   day.totalUsers = users;
//   day.totalEth = eth;
//   day.totalTokens = tokens;
//   day.totalDevs = devs;
//   let alpha = getUserRewards(users, eth, "alpha");
//   day.userClaimAlpha = alpha;
//   let delta = getUserRewards(users, eth, "delta");
//   day.userClaimDelta = delta;
//   let omega = getUserRewards(users, eth, "omega");
//   day.userClaimOmega = omega;
//   let devClaim = getDevRewards(devs, eth);
//   day.devClaim = devClaim;
//   let daoClaim = getDaoRewards(eth);
//   day.daoClaim = daoClaim;

//   if(!hour){
//     hour = new RewardsHourData(time);
//     hour.date = block.timestamp;
//     hour.totalUsers = users;
//     hour.totalEth = eth;
//     hour.totalTokens = tokens;
//     hour.totalDevs = devs;
//     hour.userClaimAlpha = alpha;
//     hour.userClaimDelta = delta;
//     hour.userClaimOmega = omega;
//     hour.devClaim = devClaim;
//     hour.daoClaim = daoClaim;
//   }
//   day.save();
//   hour.save();
// }
