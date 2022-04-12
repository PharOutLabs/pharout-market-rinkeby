import { BigInt } from "@graphprotocol/graph-ts";
import {
  BlindTradeEntered,
  BlindTradeAccepted,
  TradeAccepted,
  TradeEntered,
  TradeUpdated,
  TradeWithdrawn
} from "../../generated/MarketTrades/MarketTrades";
import { NFT, Trade, MarketItem, Stats, User, Metadata } from "../../generated/schema";
import { ERC1155 } from "../../generated/NFTMarket/ERC1155";
import { ERC721 } from "../../generated/NFTMarket/ERC721";
import { getTimeString } from "../helpers/datetime";

/*
  event TradeEntered(
      bool is1155,
      uint itemId,
      uint tradeId,
      uint tokenId,
      uint amount1155,
      address indexed nftCont,
      address indexed trader,
      address indexed seller
  );
*/
export function handleTradeEntered(event: TradeEntered): void {
  let date = getTimeString(event.block.timestamp);

  let stats = Stats.load("trade_stats");

  if(!stats){
    stats = new Stats("trade_stats");
    stats.type = "trades"
    stats.count = BigInt.fromI32(0);
  }
  stats.count = stats.count + BigInt.fromI32(1);
  stats.save();

  let userId = event.params.trader.toHexString();
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

  let tradeId = event.params.trader.toHexString().concat(event.params.tradeId.toHex()).concat("_trades");
  let trade = new Trade(tradeId);
  
  trade.type = "listed";
  trade.date = date;
  trade.block = event.block.timestamp;
  let itemId = event.params.trader.toHexString().concat(event.params.itemId.toHex()).concat("_trades");
  trade.tradeWith = itemId;
  trade.tradeFor = itemId;

  let marketItem = new MarketItem(itemId);
  marketItem.block = event.block.timestamp;
  marketItem.date = date;
  marketItem.itemId = event.params.itemId;
  marketItem.active = true;
  marketItem.amount1155 = event.params.amount1155;

  

  let dataId = event.params.nftCont.toHexString().concat("_").concat(event.params.tokenId.toHex());
  let nft = new NFT(dataId);
  nft.token_address = event.params.nftCont;
  nft.token_id = event.params.tokenId;
  nft.owner_of = event.params.seller;

  if(event.params.amount1155 > BigInt.fromI32(0)){
    let nftContract = ERC1155.bind(event.params.nftCont);
    
    let metadata = Metadata.load(dataId);
    if(!metadata){
      metadata = new Metadata(dataId);
    }
    let uri = nftContract.try_uri(event.params.tokenId)
    if(!uri.reverted){
      metadata.uri = uri.value;
    }
    metadata.save();
  } else {
    let nftContract = ERC721.bind(event.params.nftCont);
    let metadata = Metadata.load(dataId);
    if(!metadata){
      metadata = new Metadata(dataId);
    }
    let uri = nftContract.try_tokenURI(event.params.tokenId);
    if(!uri.reverted){
      metadata.uri = uri.value;
    }
    let name = nftContract.try_name();
    if(!name.reverted){
      metadata.name = name.value;
    }
    let symbol = nftContract.try_symbol();
    if(!symbol.reverted){
      metadata.symbol = symbol.value;
    }
    metadata.save();
  }
  marketItem.nft = dataId;
  marketItem.save();
  nft.save();

  trade.active = true;
  trade.accepted = false;
  trade.tradeId = event.params.tradeId;
  trade.trader = event.params.trader.toHexString();
  trade.isSpecific = true;

  trade.save()
}


/*
  event BlindTradeEntered(
      bool isWanted1155,
      bool isGiven1155,
      bool isSpecific,
      uint wantedId,
      uint tokenId,
      uint tradeId,
      uint amount1155,
      uint wAmount1155,
      address indexed nftCont,
      address indexed wantCont,
      address indexed trader
  );
*/
export function handleBlindTradeEntered(event: BlindTradeEntered): void {
  let date = getTimeString(event.block.timestamp);

  let stats = Stats.load("trade_stats");

  if(!stats){
    stats = new Stats("trade_stats");
  }
  stats.count = stats.count + BigInt.fromI32(1);

  let tradeId = event.params.trader.toHexString().concat(event.params.tradeId.toHex()).concat("_blindTrades");
  let trade = new Trade(tradeId);
  
  trade.type = "blind";
  trade.date = date;
  trade.block = event.block.timestamp;

  let wantedId = event.params.trader.toHexString().concat(event.params.wantedId.toHex()).concat("_blindTradesWanted");
  let givenId = event.params.trader.toHexString().concat(event.params.wantedId.toHex()).concat("_blindTradesWanted");
  trade.tradeFor = wantedId;
  trade.tradeWith = givenId;

  trade.active = true;
  trade.accepted = false;
  trade.trader = event.params.trader.toString();
  trade.tradeId = event.params.tradeId;
  trade.isSpecific = event.params.isSpecific;
  trade.save()

  let givenItem = new MarketItem(givenId);
  givenItem.block = event.block.timestamp;
  givenItem.date = date;
  givenItem.itemId = event.params.tradeId;
  givenItem.active = true;
  givenItem.amount1155 = event.params.amount1155;

  let dataId = event.params.nftCont.toHexString().concat("_").concat(event.params.tokenId.toHex());
  let nft = NFT.load(dataId);
  if(!nft){
    nft = new NFT(dataId);
  }
  nft.token_address = event.params.nftCont;
  nft.token_id = event.params.tokenId;
  nft.owner_of = event.params.trader;
  if(event.params.amount1155 > BigInt.fromI32(0)){
    nft.contract_type = "ERC1155";
  } else {
    nft.contract_type = "ERC721";
  }

  if(event.params.amount1155 > BigInt.fromI32(0)){
    let nftContract = ERC1155.bind(event.params.nftCont);
    
    let metadata = Metadata.load(dataId);
    if(!metadata){
      metadata = new Metadata(dataId);
    }
    let uri = nftContract.try_uri(event.params.tokenId)
    if(!uri.reverted){
      metadata.uri = uri.value;
    }
    metadata.save();
  } else {
    let nftContract = ERC721.bind(event.params.nftCont);
    let metadata = Metadata.load(dataId);
    if(!metadata){
      metadata = new Metadata(dataId);
    }
    let uri = nftContract.try_tokenURI(event.params.tokenId);
    if(!uri.reverted){
      metadata.uri = uri.value;
    }
    let name = nftContract.try_name();
    if(!name.reverted){
      metadata.name = name.value;
    }
    let symbol = nftContract.try_symbol();
    if(!symbol.reverted){
      metadata.symbol = symbol.value;
    }
    metadata.save();
  }
  givenItem.nft = dataId;
  givenItem.save();
  nft.save();


  let wantedItem = new MarketItem(wantedId);

  wantedItem.block = event.block.timestamp;
  wantedItem.date = date;
  wantedItem.itemId = event.params.tradeId;
  wantedItem.active = true;
  wantedItem.amount1155 = event.params.amount1155;

  let tradeDataId = event.params.wantCont.toHexString().concat("_").concat(event.params.wantedId.toHex());
  let tradenft = new NFT(tradeDataId);

  tradenft.token_address = event.params.nftCont;
  tradenft.token_id = event.params.tokenId;
  tradenft.owner_of = event.params.trader;
  if(event.params.amount1155 > BigInt.fromI32(0)){
    tradenft.contract_type = "ERC1155";
  } else {
    tradenft.contract_type = "ERC721";
  }

  if(event.params.amount1155 > BigInt.fromI32(0)){
    let nftContract = ERC1155.bind(event.params.wantCont);
    
    let metadata = Metadata.load(tradeDataId);
    if(!metadata){
      metadata = new Metadata(tradeDataId);
    }
    let uri = nftContract.try_uri(event.params.tokenId)
    if(!uri.reverted){
      metadata.uri = uri.value;
    }
    metadata.save();
  } else {
    let nftContract = ERC721.bind(event.params.wantCont);
    let metadata = Metadata.load(tradeDataId);
    if(!metadata){
      metadata = new Metadata(tradeDataId);
    }
    let uri = nftContract.try_tokenURI(event.params.tokenId);
    if(!uri.reverted){
      metadata.uri = uri.value;
    }
    let name = nftContract.try_name();
    if(!name.reverted){
      metadata.name = name.value;
    }
    let symbol = nftContract.try_symbol();
    if(!symbol.reverted){
      metadata.symbol = symbol.value;
    }
    metadata.save();
  }

  wantedItem.nft = tradeDataId;
  wantedItem.save();
  tradenft.save();
}

export function handleTradeAccepted(event: TradeAccepted): void {
  let tradeId = event.params.trader.toHexString().concat(event.params.tradeId.toHex()).concat("_trades");
  let trade = new Trade(tradeId);
  trade.active = false;
  trade.accepted = true;
}

export function handleBlindTradeAccepted(event: BlindTradeAccepted): void {
  let tradeId = event.params.trader.toHexString().concat(event.params.tradeId.toHex()).concat("_blindTrades");
  let trade = new Trade(tradeId);
  trade.active = false;
  trade.accepted = true;
}

export function handleTradeUpdated(event: TradeUpdated): void {
  let tradeId = event.params.trader.toHexString().concat(event.params.tradeId.toHex()).concat("_trades");
  let trade = new Trade(tradeId);
  trade.active = true;
  trade.accepted = false;
}

export function handleTradeWithdrawn(event: TradeWithdrawn): void {
  let tradeId = event.params.trader.toHexString().concat(event.params.tradeId.toHex()).concat("_trades");
  let trade = new Trade(tradeId);
  trade.active = false;
  trade.accepted = false;
}
