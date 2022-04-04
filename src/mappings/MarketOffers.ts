import { BigInt } from "@graphprotocol/graph-ts"
import {
  BlindOfferWithdrawn,
  BlindOffered,
  OfferAccepted,
  OfferRefunded,
  OfferWithdrawn,
  Offered
} from "../../generated/MarketOffers/MarketOffers"
import {User, Stats, Offer, NFT, Token, MarketItem } from "../../generated/schema"
import { getTimeString } from "../helpers/datetime";
import { ERC20 } from "../../generated/MarketOffers/ERC20";


export function handleOffered(event: Offered): void {
  let date = getTimeString(event.block.timestamp);

  let stats = Stats.load("offer_stats");
  if(!stats){
    stats = new Stats("offer_stats");
    stats.type = "offers";
    stats.count = BigInt.fromI32(0)
  }
  stats.count = stats.count + BigInt.fromI32(1);
  stats.save();

  let userId = event.params.offerer.toHexString();
  let user = User.load(userId);
  if(!user){
    let user_stats = Stats.load("user_stats");
    if(!user_stats){
      user_stats = new Stats("user_stats");
      user_stats.count = BigInt.fromI32(0);
    }
    user = new User(userId);
    user_stats.count = user_stats.count + BigInt.fromI32(1);
    user_stats.type = "users";
    user.block = event.block.timestamp;
    user.date = date;
    user_stats.save();
  }
  user.save();
  let offerId = event.params.offerer.toHexString().concat(event.params.offerId.toHexString()).concat("_offers");
  let offer = Offer.load(offerId);
  if (!offer) {
    offer = new Offer(offerId);
  }
  offer.type = "listed";
  offer.date = date;
  offer.block = event.block.timestamp;
  let itemId = event.params.seller.toHexString().concat("_").concat(event.params.offerId.toHexString());
  offer.item = itemId;
  offer.offerId = event.params.offerId;
  offer.offerer = userId;
  offer.isSpecific = true;
  
  let tokenId = event.params.token_address.toHexString();
  let token = Token.load(tokenId)
  if(!token){
    token = new Token(tokenId);
    token.token_address = event.params.token_address;
    let contract = ERC20.bind(event.params.token_address);
    let name = contract.try_name();
    if(!name.reverted){
      token.name = name.value;
    }
    let symbol = contract.try_symbol();
    if(!symbol.reverted){
      token.symbol = symbol.value;
    }
    let decimals = contract.try_decimals();
    if(!decimals.reverted){
      token.decimals = BigInt.fromI32(decimals.value);
    }
    token.save();
  }
  
  offer.token = event.params.token_address.toHexString();
  offer.amount = event.params.amount;
  offer.active = true;
  offer.accepted = false;
  offer.save()
}

export function handleOfferWithdrawn(event: OfferWithdrawn): void {
  let offerId = event.params.offerer.toHexString().concat(event.params.offerId.toHexString()).concat("_offers");
  let offer = new Offer(offerId);
  offer.active = true;
  offer.accepted = false;
  offer.save();
}

export function handleBlindOffered(event: BlindOffered): void {
  let date = getTimeString(event.block.timestamp);

  let stats = Stats.load("offer_stats");
  if(!stats){
    stats = new Stats("offer_stats");
    stats.type = "offers";
    stats.count = BigInt.fromI32(0)
  }
  stats.count = stats.count + BigInt.fromI32(1);
  stats.save();

  let userId = event.params.offerer.toHexString()
  let user = User.load(userId);
  if(!user){
    let user_stats = Stats.load("user_stats");
    if(!user_stats){
      user_stats = new Stats("user_stats");
      user_stats.count = BigInt.fromI32(0);
    }
    user = new User(userId);
    user_stats.count = user_stats.count + BigInt.fromI32(1);
    user_stats.type = "users";
    user.block = event.block.timestamp;
    user.date = date;
    user_stats.save();
  }
  user.save();

  let offerId = event.params.offerer.toHexString().concat(event.params.offerId.toHexString()).concat("_blindOffers");
  let offer = new Offer(offerId);
  offer.type = "blind";
  offer.date = date;
  offer.block = event.block.timestamp;
  offer.offerId = event.params.offerId;
  offer.offerer = userId;
  offer.isSpecific = true;
  let itemId = event.params.offerer.toHexString().concat("_").concat(event.params.offerId.toHexString()).concat("_blindOffers");
  
  let marketItem = new MarketItem(itemId);
  marketItem.block = event.block.timestamp;
  marketItem.date = date;
  marketItem.itemId = event.params.offerId;
  marketItem.active = true;
  marketItem.type = "blindOffers";
  marketItem.amount1155 = event.params.amount1155;

  let dataId = event.params.collectionOffer.toHexString().concat("_").concat(event.params.tokenId.toHexString());
  let nft = NFT.load(dataId);
  if(!nft){
    nft = new NFT(dataId);
  }
  nft.token_address = event.params.collectionOffer;
  nft.token_id = event.params.tokenId;

  if(event.params.amount1155 > BigInt.fromI32(0)){
    nft.contract_type = "ERC1155";
  } else {
    nft.contract_type = "ERC721";
  }
  marketItem.nft = dataId;
  marketItem.save();
  nft.save();

  offer.item = itemId;
  
  let tokenId = event.params.token_address.toHexString();
  let token = Token.load(tokenId)
  if(!token){
    token = new Token(tokenId);
    token.token_address = event.params.token_address;
    let contract = ERC20.bind(event.params.token_address);
    let name = contract.try_name();
    if(!name.reverted){
      token.name = name.value;
    }
    let symbol = contract.try_symbol();
    if(!symbol.reverted){
      token.symbol = symbol.value;
    }
    let decimals = contract.try_decimals();
    if(!decimals.reverted){
      token.decimals = BigInt.fromI32(decimals.value);
    }
    token.save();
  }

  offer.token = tokenId;
  offer.amount = event.params.amount;
  offer.active = true;
  offer.accepted = false;
  offer.save()
}

export function handleBlindOfferWithdrawn(event: BlindOfferWithdrawn): void {
  let offerId = event.params.offerer.toHexString().concat(event.params.offerId.toHexString()).concat("_blindOffers");
  let offer = new Offer(offerId);
  offer.active = true;
  offer.accepted = false;
  offer.save();
}

export function handleOfferAccepted(event: OfferAccepted): void {
  let offerId = event.params.offerer.toHexString().concat(event.params.offerId.toHexString()).concat("_offers");
  let offer = new Offer(offerId);
  offer.active = true;
  offer.accepted = true;
  offer.save();
}

export function handleOfferRefunded(event: OfferRefunded): void {
  let offerId = event.params.offerer.toHexString().concat(event.params.offerId.toHexString()).concat("_offers");
  let offer = new Offer(offerId);
  offer.active = true;
  offer.accepted = true;
  offer.save();
}
