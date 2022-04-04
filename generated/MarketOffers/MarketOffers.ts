// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BlindOfferAccepted extends ethereum.Event {
  get params(): BlindOfferAccepted__Params {
    return new BlindOfferAccepted__Params(this);
  }
}

export class BlindOfferAccepted__Params {
  _event: BlindOfferAccepted;

  constructor(event: BlindOfferAccepted) {
    this._event = event;
  }

  get blindOfferId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BlindOfferWithdrawn extends ethereum.Event {
  get params(): BlindOfferWithdrawn__Params {
    return new BlindOfferWithdrawn__Params(this);
  }
}

export class BlindOfferWithdrawn__Params {
  _event: BlindOfferWithdrawn;

  constructor(event: BlindOfferWithdrawn) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offerer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BlindOffered extends ethereum.Event {
  get params(): BlindOffered__Params {
    return new BlindOffered__Params(this);
  }
}

export class BlindOffered__Params {
  _event: BlindOffered;

  constructor(event: BlindOffered) {
    this._event = event;
  }

  get isSpecific(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }

  get amount1155(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get offerer(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get token_address(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get collectionOffer(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class FundsForwarded extends ethereum.Event {
  get params(): FundsForwarded__Params {
    return new FundsForwarded__Params(this);
  }
}

export class FundsForwarded__Params {
  _event: FundsForwarded;

  constructor(event: FundsForwarded) {
    this._event = event;
  }

  get value(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferAccepted extends ethereum.Event {
  get params(): OfferAccepted__Params {
    return new OfferAccepted__Params(this);
  }
}

export class OfferAccepted__Params {
  _event: OfferAccepted;

  constructor(event: OfferAccepted) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get itemId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OfferRefunded extends ethereum.Event {
  get params(): OfferRefunded__Params {
    return new OfferRefunded__Params(this);
  }
}

export class OfferRefunded__Params {
  _event: OfferRefunded;

  constructor(event: OfferRefunded) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get itemId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OfferWithdrawn extends ethereum.Event {
  get params(): OfferWithdrawn__Params {
    return new OfferWithdrawn__Params(this);
  }
}

export class OfferWithdrawn__Params {
  _event: OfferWithdrawn;

  constructor(event: OfferWithdrawn) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get itemId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offerer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Offered extends ethereum.Event {
  get params(): Offered__Params {
    return new Offered__Params(this);
  }
}

export class Offered__Params {
  _event: Offered;

  constructor(event: Offered) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get itemId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get token_address(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get offerer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class MarketOffers__fetchBlindOffersResultValue0Struct extends ethereum.Tuple {
  get isSpecific(): boolean {
    return this[0].toBoolean();
  }

  get amount1155(): BigInt {
    return this[1].toBigInt();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get blindOfferId(): BigInt {
    return this[3].toBigInt();
  }

  get amount(): BigInt {
    return this[4].toBigInt();
  }

  get tokenCont(): Address {
    return this[5].toAddress();
  }

  get collectionOffer(): Address {
    return this[6].toAddress();
  }

  get offerer(): Address {
    return this[7].toAddress();
  }
}

export class MarketOffers__fetchBlindOffersByOffererResultValue0Struct extends ethereum.Tuple {
  get isSpecific(): boolean {
    return this[0].toBoolean();
  }

  get amount1155(): BigInt {
    return this[1].toBigInt();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get blindOfferId(): BigInt {
    return this[3].toBigInt();
  }

  get amount(): BigInt {
    return this[4].toBigInt();
  }

  get tokenCont(): Address {
    return this[5].toAddress();
  }

  get collectionOffer(): Address {
    return this[6].toAddress();
  }

  get offerer(): Address {
    return this[7].toAddress();
  }
}

export class MarketOffers__fetchOffersResultValue0Struct extends ethereum.Tuple {
  get isActive(): boolean {
    return this[0].toBoolean();
  }

  get offerId(): BigInt {
    return this[1].toBigInt();
  }

  get itemId(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get tokenCont(): Address {
    return this[4].toAddress();
  }

  get offerer(): Address {
    return this[5].toAddress();
  }

  get seller(): Address {
    return this[6].toAddress();
  }
}

export class MarketOffers__fetchOffersByItemIdResultValue0Struct extends ethereum.Tuple {
  get isActive(): boolean {
    return this[0].toBoolean();
  }

  get offerId(): BigInt {
    return this[1].toBigInt();
  }

  get itemId(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get tokenCont(): Address {
    return this[4].toAddress();
  }

  get offerer(): Address {
    return this[5].toAddress();
  }

  get seller(): Address {
    return this[6].toAddress();
  }
}

export class MarketOffers__fetchOffersByOffererResultValue0Struct extends ethereum.Tuple {
  get isActive(): boolean {
    return this[0].toBoolean();
  }

  get offerId(): BigInt {
    return this[1].toBigInt();
  }

  get itemId(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get tokenCont(): Address {
    return this[4].toAddress();
  }

  get offerer(): Address {
    return this[5].toAddress();
  }

  get seller(): Address {
    return this[6].toAddress();
  }
}

export class MarketOffers extends ethereum.SmartContract {
  static bind(address: Address): MarketOffers {
    return new MarketOffers("MarketOffers", address);
  }

  BIDS(): Bytes {
    let result = super.call("BIDS", "BIDS():(bytes32)", []);

    return result[0].toBytes();
  }

  try_BIDS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("BIDS", "BIDS():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEV(): Bytes {
    let result = super.call("DEV", "DEV():(bytes32)", []);

    return result[0].toBytes();
  }

  try_DEV(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("DEV", "DEV():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MARKET(): Bytes {
    let result = super.call("MARKET", "MARKET():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MARKET(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MARKET", "MARKET():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINT(): Bytes {
    let result = super.call("MINT", "MINT():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINT(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINT", "MINT():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  NFTADD(): Bytes {
    let result = super.call("NFTADD", "NFTADD():(bytes32)", []);

    return result[0].toBytes();
  }

  try_NFTADD(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("NFTADD", "NFTADD():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PROXY_ROLE(): Bytes {
    let result = super.call("PROXY_ROLE", "PROXY_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PROXY_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PROXY_ROLE", "PROXY_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REWARDS(): Bytes {
    let result = super.call("REWARDS", "REWARDS():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REWARDS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("REWARDS", "REWARDS():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TRADES(): Bytes {
    let result = super.call("TRADES", "TRADES():(bytes32)", []);

    return result[0].toBytes();
  }

  try_TRADES(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("TRADES", "TRADES():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  acceptBlindOffer(
    blindOfferId: Array<BigInt>,
    tokenId: Array<BigInt>,
    offerId: Array<BigInt>,
    listedId: Array<BigInt>,
    isListed: Array<boolean>,
    is1155: Array<boolean>
  ): boolean {
    let result = super.call(
      "acceptBlindOffer",
      "acceptBlindOffer(uint256[],uint256[],uint256[],uint256[],bool[],bool[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(blindOfferId),
        ethereum.Value.fromUnsignedBigIntArray(tokenId),
        ethereum.Value.fromUnsignedBigIntArray(offerId),
        ethereum.Value.fromUnsignedBigIntArray(listedId),
        ethereum.Value.fromBooleanArray(isListed),
        ethereum.Value.fromBooleanArray(is1155)
      ]
    );

    return result[0].toBoolean();
  }

  try_acceptBlindOffer(
    blindOfferId: Array<BigInt>,
    tokenId: Array<BigInt>,
    offerId: Array<BigInt>,
    listedId: Array<BigInt>,
    isListed: Array<boolean>,
    is1155: Array<boolean>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "acceptBlindOffer",
      "acceptBlindOffer(uint256[],uint256[],uint256[],uint256[],bool[],bool[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(blindOfferId),
        ethereum.Value.fromUnsignedBigIntArray(tokenId),
        ethereum.Value.fromUnsignedBigIntArray(offerId),
        ethereum.Value.fromUnsignedBigIntArray(listedId),
        ethereum.Value.fromBooleanArray(isListed),
        ethereum.Value.fromBooleanArray(is1155)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  acceptOfferForNft(offerId: Array<BigInt>): boolean {
    let result = super.call(
      "acceptOfferForNft",
      "acceptOfferForNft(uint256[]):(bool)",
      [ethereum.Value.fromUnsignedBigIntArray(offerId)]
    );

    return result[0].toBoolean();
  }

  try_acceptOfferForNft(offerId: Array<BigInt>): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "acceptOfferForNft",
      "acceptOfferForNft(uint256[]):(bool)",
      [ethereum.Value.fromUnsignedBigIntArray(offerId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  enterOfferForNft(
    itemId: Array<BigInt>,
    amount: Array<BigInt>,
    tokenCont: Array<Address>,
    seller: Array<Address>
  ): boolean {
    let result = super.call(
      "enterOfferForNft",
      "enterOfferForNft(uint256[],uint256[],address[],address[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(itemId),
        ethereum.Value.fromUnsignedBigIntArray(amount),
        ethereum.Value.fromAddressArray(tokenCont),
        ethereum.Value.fromAddressArray(seller)
      ]
    );

    return result[0].toBoolean();
  }

  try_enterOfferForNft(
    itemId: Array<BigInt>,
    amount: Array<BigInt>,
    tokenCont: Array<Address>,
    seller: Array<Address>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "enterOfferForNft",
      "enterOfferForNft(uint256[],uint256[],address[],address[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(itemId),
        ethereum.Value.fromUnsignedBigIntArray(amount),
        ethereum.Value.fromAddressArray(tokenCont),
        ethereum.Value.fromAddressArray(seller)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  fetchBlindOffers(): Array<MarketOffers__fetchBlindOffersResultValue0Struct> {
    let result = super.call(
      "fetchBlindOffers",
      "fetchBlindOffers():((bool,uint256,uint256,uint256,uint256,address,address,address)[])",
      []
    );

    return result[0].toTupleArray<
      MarketOffers__fetchBlindOffersResultValue0Struct
    >();
  }

  try_fetchBlindOffers(): ethereum.CallResult<
    Array<MarketOffers__fetchBlindOffersResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchBlindOffers",
      "fetchBlindOffers():((bool,uint256,uint256,uint256,uint256,address,address,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<MarketOffers__fetchBlindOffersResultValue0Struct>()
    );
  }

  fetchBlindOffersByOfferer(
    user: Address
  ): Array<MarketOffers__fetchBlindOffersByOffererResultValue0Struct> {
    let result = super.call(
      "fetchBlindOffersByOfferer",
      "fetchBlindOffersByOfferer(address):((bool,uint256,uint256,uint256,uint256,address,address,address)[])",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toTupleArray<
      MarketOffers__fetchBlindOffersByOffererResultValue0Struct
    >();
  }

  try_fetchBlindOffersByOfferer(
    user: Address
  ): ethereum.CallResult<
    Array<MarketOffers__fetchBlindOffersByOffererResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchBlindOffersByOfferer",
      "fetchBlindOffersByOfferer(address):((bool,uint256,uint256,uint256,uint256,address,address,address)[])",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        MarketOffers__fetchBlindOffersByOffererResultValue0Struct
      >()
    );
  }

  fetchOfferId(itemId: BigInt): BigInt {
    let result = super.call("fetchOfferId", "fetchOfferId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(itemId)
    ]);

    return result[0].toBigInt();
  }

  try_fetchOfferId(itemId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchOfferId",
      "fetchOfferId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(itemId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchOffers(): Array<MarketOffers__fetchOffersResultValue0Struct> {
    let result = super.call(
      "fetchOffers",
      "fetchOffers():((bool,uint256,uint256,uint256,address,address,address)[])",
      []
    );

    return result[0].toTupleArray<
      MarketOffers__fetchOffersResultValue0Struct
    >();
  }

  try_fetchOffers(): ethereum.CallResult<
    Array<MarketOffers__fetchOffersResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchOffers",
      "fetchOffers():((bool,uint256,uint256,uint256,address,address,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<MarketOffers__fetchOffersResultValue0Struct>()
    );
  }

  fetchOffersByItemId(
    itemId: BigInt
  ): Array<MarketOffers__fetchOffersByItemIdResultValue0Struct> {
    let result = super.call(
      "fetchOffersByItemId",
      "fetchOffersByItemId(uint256):((bool,uint256,uint256,uint256,address,address,address)[])",
      [ethereum.Value.fromUnsignedBigInt(itemId)]
    );

    return result[0].toTupleArray<
      MarketOffers__fetchOffersByItemIdResultValue0Struct
    >();
  }

  try_fetchOffersByItemId(
    itemId: BigInt
  ): ethereum.CallResult<
    Array<MarketOffers__fetchOffersByItemIdResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchOffersByItemId",
      "fetchOffersByItemId(uint256):((bool,uint256,uint256,uint256,address,address,address)[])",
      [ethereum.Value.fromUnsignedBigInt(itemId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        MarketOffers__fetchOffersByItemIdResultValue0Struct
      >()
    );
  }

  fetchOffersByOfferer(
    user: Address
  ): Array<MarketOffers__fetchOffersByOffererResultValue0Struct> {
    let result = super.call(
      "fetchOffersByOfferer",
      "fetchOffersByOfferer(address):((bool,uint256,uint256,uint256,address,address,address)[])",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toTupleArray<
      MarketOffers__fetchOffersByOffererResultValue0Struct
    >();
  }

  try_fetchOffersByOfferer(
    user: Address
  ): ethereum.CallResult<
    Array<MarketOffers__fetchOffersByOffererResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchOffersByOfferer",
      "fetchOffersByOfferer(address):((bool,uint256,uint256,uint256,address,address,address)[])",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        MarketOffers__fetchOffersByOffererResultValue0Struct
      >()
    );
  }

  refundOffer(itemId: BigInt, offerId: BigInt): boolean {
    let result = super.call(
      "refundOffer",
      "refundOffer(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(itemId),
        ethereum.Value.fromUnsignedBigInt(offerId)
      ]
    );

    return result[0].toBoolean();
  }

  try_refundOffer(
    itemId: BigInt,
    offerId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "refundOffer",
      "refundOffer(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(itemId),
        ethereum.Value.fromUnsignedBigInt(offerId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  roleAdd(): Address {
    let result = super.call("roleAdd", "roleAdd():(address)", []);

    return result[0].toAddress();
  }

  try_roleAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall("roleAdd", "roleAdd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdrawOffer(offerId: Array<BigInt>, isBlind: Array<boolean>): boolean {
    let result = super.call(
      "withdrawOffer",
      "withdrawOffer(uint256[],bool[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(offerId),
        ethereum.Value.fromBooleanArray(isBlind)
      ]
    );

    return result[0].toBoolean();
  }

  try_withdrawOffer(
    offerId: Array<BigInt>,
    isBlind: Array<boolean>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "withdrawOffer",
      "withdrawOffer(uint256[],bool[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(offerId),
        ethereum.Value.fromBooleanArray(isBlind)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get role(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptBlindOfferCall extends ethereum.Call {
  get inputs(): AcceptBlindOfferCall__Inputs {
    return new AcceptBlindOfferCall__Inputs(this);
  }

  get outputs(): AcceptBlindOfferCall__Outputs {
    return new AcceptBlindOfferCall__Outputs(this);
  }
}

export class AcceptBlindOfferCall__Inputs {
  _call: AcceptBlindOfferCall;

  constructor(call: AcceptBlindOfferCall) {
    this._call = call;
  }

  get blindOfferId(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get tokenId(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get offerId(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get listedId(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get isListed(): Array<boolean> {
    return this._call.inputValues[4].value.toBooleanArray();
  }

  get is1155(): Array<boolean> {
    return this._call.inputValues[5].value.toBooleanArray();
  }
}

export class AcceptBlindOfferCall__Outputs {
  _call: AcceptBlindOfferCall;

  constructor(call: AcceptBlindOfferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AcceptOfferForNftCall extends ethereum.Call {
  get inputs(): AcceptOfferForNftCall__Inputs {
    return new AcceptOfferForNftCall__Inputs(this);
  }

  get outputs(): AcceptOfferForNftCall__Outputs {
    return new AcceptOfferForNftCall__Outputs(this);
  }
}

export class AcceptOfferForNftCall__Inputs {
  _call: AcceptOfferForNftCall;

  constructor(call: AcceptOfferForNftCall) {
    this._call = call;
  }

  get offerId(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class AcceptOfferForNftCall__Outputs {
  _call: AcceptOfferForNftCall;

  constructor(call: AcceptOfferForNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class EnterBlindOfferCall extends ethereum.Call {
  get inputs(): EnterBlindOfferCall__Inputs {
    return new EnterBlindOfferCall__Inputs(this);
  }

  get outputs(): EnterBlindOfferCall__Outputs {
    return new EnterBlindOfferCall__Outputs(this);
  }
}

export class EnterBlindOfferCall__Inputs {
  _call: EnterBlindOfferCall;

  constructor(call: EnterBlindOfferCall) {
    this._call = call;
  }

  get isSpecific(): Array<boolean> {
    return this._call.inputValues[0].value.toBooleanArray();
  }

  get amount1155(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get tokenId(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amount(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get tokenCont(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get collection(): Array<Address> {
    return this._call.inputValues[5].value.toAddressArray();
  }
}

export class EnterBlindOfferCall__Outputs {
  _call: EnterBlindOfferCall;

  constructor(call: EnterBlindOfferCall) {
    this._call = call;
  }
}

export class EnterOfferForNftCall extends ethereum.Call {
  get inputs(): EnterOfferForNftCall__Inputs {
    return new EnterOfferForNftCall__Inputs(this);
  }

  get outputs(): EnterOfferForNftCall__Outputs {
    return new EnterOfferForNftCall__Outputs(this);
  }
}

export class EnterOfferForNftCall__Inputs {
  _call: EnterOfferForNftCall;

  constructor(call: EnterOfferForNftCall) {
    this._call = call;
  }

  get itemId(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get amount(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get tokenCont(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get seller(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }
}

export class EnterOfferForNftCall__Outputs {
  _call: EnterOfferForNftCall;

  constructor(call: EnterOfferForNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RefundOfferCall extends ethereum.Call {
  get inputs(): RefundOfferCall__Inputs {
    return new RefundOfferCall__Inputs(this);
  }

  get outputs(): RefundOfferCall__Outputs {
    return new RefundOfferCall__Outputs(this);
  }
}

export class RefundOfferCall__Inputs {
  _call: RefundOfferCall;

  constructor(call: RefundOfferCall) {
    this._call = call;
  }

  get itemId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get offerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RefundOfferCall__Outputs {
  _call: RefundOfferCall;

  constructor(call: RefundOfferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawOfferCall extends ethereum.Call {
  get inputs(): WithdrawOfferCall__Inputs {
    return new WithdrawOfferCall__Inputs(this);
  }

  get outputs(): WithdrawOfferCall__Outputs {
    return new WithdrawOfferCall__Outputs(this);
  }
}

export class WithdrawOfferCall__Inputs {
  _call: WithdrawOfferCall;

  constructor(call: WithdrawOfferCall) {
    this._call = call;
  }

  get offerId(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get isBlind(): Array<boolean> {
    return this._call.inputValues[1].value.toBooleanArray();
  }
}

export class WithdrawOfferCall__Outputs {
  _call: WithdrawOfferCall;

  constructor(call: WithdrawOfferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}