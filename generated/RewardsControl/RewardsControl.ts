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

export class DaoClaimed extends ethereum.Event {
  get params(): DaoClaimed__Params {
    return new DaoClaimed__Params(this);
  }
}

export class DaoClaimed__Params {
  _event: DaoClaimed;

  constructor(event: DaoClaimed) {
    this._event = event;
  }

  get daoAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get erc20Amount(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get contractAddress(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }
}

export class DevClaimed extends ethereum.Event {
  get params(): DevClaimed__Params {
    return new DevClaimed__Params(this);
  }
}

export class DevClaimed__Params {
  _event: DevClaimed;

  constructor(event: DevClaimed) {
    this._event = event;
  }

  get devAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get erc20Amount(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get contractAddress(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }
}

export class NewDev extends ethereum.Event {
  get params(): NewDev__Params {
    return new NewDev__Params(this);
  }
}

export class NewDev__Params {
  _event: NewDev;

  constructor(event: NewDev) {
    this._event = event;
  }

  get devAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewUser extends ethereum.Event {
  get params(): NewUser__Params {
    return new NewUser__Params(this);
  }
}

export class NewUser__Params {
  _event: NewUser;

  constructor(event: NewUser) {
    this._event = event;
  }

  get userId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get userAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Received extends ethereum.Event {
  get params(): Received__Params {
    return new Received__Params(this);
  }
}

export class Received__Params {
  _event: Received;

  constructor(event: Received) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RemovedDev extends ethereum.Event {
  get params(): RemovedDev__Params {
    return new RemovedDev__Params(this);
  }
}

export class RemovedDev__Params {
  _event: RemovedDev;

  constructor(event: RemovedDev) {
    this._event = event;
  }

  get devAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RewardsClaimed extends ethereum.Event {
  get params(): RewardsClaimed__Params {
    return new RewardsClaimed__Params(this);
  }
}

export class RewardsClaimed__Params {
  _event: RewardsClaimed;

  constructor(event: RewardsClaimed) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get erc20Amount(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get contractAddress(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }
}

export class SetTime extends ethereum.Event {
  get params(): SetTime__Params {
    return new SetTime__Params(this);
  }
}

export class SetTime__Params {
  _event: SetTime;

  constructor(event: SetTime) {
    this._event = event;
  }

  get alpha(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get delta(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get omega(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currentUserCount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TokensReceived extends ethereum.Event {
  get params(): TokensReceived__Params {
    return new TokensReceived__Params(this);
  }
}

export class TokensReceived__Params {
  _event: TokensReceived;

  constructor(event: TokensReceived) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RewardsControl__fetchClaimTimeResultTimeStruct extends ethereum.Tuple {
  get alpha(): BigInt {
    return this[0].toBigInt();
  }

  get delta(): BigInt {
    return this[1].toBigInt();
  }

  get omega(): BigInt {
    return this[2].toBigInt();
  }

  get howManyUsers(): BigInt {
    return this[3].toBigInt();
  }
}

export class RewardsControl__fetchDevsResultDevStruct extends ethereum.Tuple {
  get timestamp(): BigInt {
    return this[0].toBigInt();
  }

  get devId(): BigInt {
    return this[1].toBigInt();
  }

  get devAddress(): Address {
    return this[2].toAddress();
  }
}

export class RewardsControl__fetchHodlerResultValue0Struct extends ethereum.Tuple {
  get timestamp(): BigInt {
    return this[0].toBigInt();
  }

  get hodlerId(): BigInt {
    return this[1].toBigInt();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }
}

export class RewardsControl__fetchRewardTokensResultTokenStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get tokenAmount(): BigInt {
    return this[1].toBigInt();
  }

  get tokenAddress(): Address {
    return this[2].toAddress();
  }
}

export class RewardsControl__fetchUserByAddressResultUserStruct extends ethereum.Tuple {
  get canClaim(): boolean {
    return this[0].toBoolean();
  }

  get claims(): BigInt {
    return this[1].toBigInt();
  }

  get timestamp(): BigInt {
    return this[2].toBigInt();
  }

  get userId(): BigInt {
    return this[3].toBigInt();
  }

  get userAddress(): Address {
    return this[4].toAddress();
  }
}

export class RewardsControl__fetchUsersResultUserStruct extends ethereum.Tuple {
  get canClaim(): boolean {
    return this[0].toBoolean();
  }

  get claims(): BigInt {
    return this[1].toBigInt();
  }

  get timestamp(): BigInt {
    return this[2].toBigInt();
  }

  get userId(): BigInt {
    return this[3].toBigInt();
  }

  get userAddress(): Address {
    return this[4].toAddress();
  }
}

export class RewardsControl__idToRewardsTokenResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;

  constructor(value0: BigInt, value1: BigInt, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }
}

export class RewardsControl extends ethereum.SmartContract {
  static bind(address: Address): RewardsControl {
    return new RewardsControl("RewardsControl", address);
  }

  DAO(): Bytes {
    let result = super.call("DAO", "DAO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_DAO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("DAO", "DAO():(bytes32)", []);
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

  addDev(devAddress: Address): boolean {
    let result = super.call("addDev", "addDev(address):(bool)", [
      ethereum.Value.fromAddress(devAddress)
    ]);

    return result[0].toBoolean();
  }

  try_addDev(devAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("addDev", "addDev(address):(bool)", [
      ethereum.Value.fromAddress(devAddress)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addressToRewardsId(param0: Address): BigInt {
    let result = super.call(
      "addressToRewardsId",
      "addressToRewardsId(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_addressToRewardsId(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "addressToRewardsId",
      "addressToRewardsId(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createNftHodler(tokenId: BigInt): boolean {
    let result = super.call(
      "createNftHodler",
      "createNftHodler(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBoolean();
  }

  try_createNftHodler(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createNftHodler",
      "createNftHodler(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createOGHodlers(tokenId: Array<BigInt>): boolean {
    let result = super.call(
      "createOGHodlers",
      "createOGHodlers(uint256[]):(bool)",
      [ethereum.Value.fromUnsignedBigIntArray(tokenId)]
    );

    return result[0].toBoolean();
  }

  try_createOGHodlers(tokenId: Array<BigInt>): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createOGHodlers",
      "createOGHodlers(uint256[]):(bool)",
      [ethereum.Value.fromUnsignedBigIntArray(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createUser(userAddress: Address): boolean {
    let result = super.call("createUser", "createUser(address):(bool)", [
      ethereum.Value.fromAddress(userAddress)
    ]);

    return result[0].toBoolean();
  }

  try_createUser(userAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("createUser", "createUser(address):(bool)", [
      ethereum.Value.fromAddress(userAddress)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  depositERC20Rewards(amount: BigInt, tokenAddress: Address): boolean {
    let result = super.call(
      "depositERC20Rewards",
      "depositERC20Rewards(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(tokenAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_depositERC20Rewards(
    amount: BigInt,
    tokenAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "depositERC20Rewards",
      "depositERC20Rewards(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(tokenAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchClaimTime(): RewardsControl__fetchClaimTimeResultTimeStruct {
    let result = super.call(
      "fetchClaimTime",
      "fetchClaimTime():((uint256,uint256,uint256,uint256))",
      []
    );

    return changetype<RewardsControl__fetchClaimTimeResultTimeStruct>(
      result[0].toTuple()
    );
  }

  try_fetchClaimTime(): ethereum.CallResult<
    RewardsControl__fetchClaimTimeResultTimeStruct
  > {
    let result = super.tryCall(
      "fetchClaimTime",
      "fetchClaimTime():((uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<RewardsControl__fetchClaimTimeResultTimeStruct>(
        value[0].toTuple()
      )
    );
  }

  fetchDevs(): Array<RewardsControl__fetchDevsResultDevStruct> {
    let result = super.call(
      "fetchDevs",
      "fetchDevs():((uint256,uint256,address)[])",
      []
    );

    return result[0].toTupleArray<RewardsControl__fetchDevsResultDevStruct>();
  }

  try_fetchDevs(): ethereum.CallResult<
    Array<RewardsControl__fetchDevsResultDevStruct>
  > {
    let result = super.tryCall(
      "fetchDevs",
      "fetchDevs():((uint256,uint256,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<RewardsControl__fetchDevsResultDevStruct>()
    );
  }

  fetchEthAmount(): BigInt {
    let result = super.call("fetchEthAmount", "fetchEthAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fetchEthAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchEthAmount",
      "fetchEthAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchHodler(tokenId: BigInt): RewardsControl__fetchHodlerResultValue0Struct {
    let result = super.call(
      "fetchHodler",
      "fetchHodler(uint256):((uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return changetype<RewardsControl__fetchHodlerResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_fetchHodler(
    tokenId: BigInt
  ): ethereum.CallResult<RewardsControl__fetchHodlerResultValue0Struct> {
    let result = super.tryCall(
      "fetchHodler",
      "fetchHodler(uint256):((uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<RewardsControl__fetchHodlerResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  fetchRewardTokens(): Array<
    RewardsControl__fetchRewardTokensResultTokenStruct
  > {
    let result = super.call(
      "fetchRewardTokens",
      "fetchRewardTokens():((uint256,uint256,address)[])",
      []
    );

    return result[0].toTupleArray<
      RewardsControl__fetchRewardTokensResultTokenStruct
    >();
  }

  try_fetchRewardTokens(): ethereum.CallResult<
    Array<RewardsControl__fetchRewardTokensResultTokenStruct>
  > {
    let result = super.tryCall(
      "fetchRewardTokens",
      "fetchRewardTokens():((uint256,uint256,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        RewardsControl__fetchRewardTokensResultTokenStruct
      >()
    );
  }

  fetchUserAmnt(): BigInt {
    let result = super.call("fetchUserAmnt", "fetchUserAmnt():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fetchUserAmnt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchUserAmnt",
      "fetchUserAmnt():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchUserByAddress(
    userAdd: Address
  ): RewardsControl__fetchUserByAddressResultUserStruct {
    let result = super.call(
      "fetchUserByAddress",
      "fetchUserByAddress(address):((bool,uint256,uint256,uint256,address))",
      [ethereum.Value.fromAddress(userAdd)]
    );

    return changetype<RewardsControl__fetchUserByAddressResultUserStruct>(
      result[0].toTuple()
    );
  }

  try_fetchUserByAddress(
    userAdd: Address
  ): ethereum.CallResult<RewardsControl__fetchUserByAddressResultUserStruct> {
    let result = super.tryCall(
      "fetchUserByAddress",
      "fetchUserByAddress(address):((bool,uint256,uint256,uint256,address))",
      [ethereum.Value.fromAddress(userAdd)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<RewardsControl__fetchUserByAddressResultUserStruct>(
        value[0].toTuple()
      )
    );
  }

  fetchUsers(): Array<RewardsControl__fetchUsersResultUserStruct> {
    let result = super.call(
      "fetchUsers",
      "fetchUsers():((bool,uint256,uint256,uint256,address)[])",
      []
    );

    return result[0].toTupleArray<RewardsControl__fetchUsersResultUserStruct>();
  }

  try_fetchUsers(): ethereum.CallResult<
    Array<RewardsControl__fetchUsersResultUserStruct>
  > {
    let result = super.tryCall(
      "fetchUsers",
      "fetchUsers():((bool,uint256,uint256,uint256,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<RewardsControl__fetchUsersResultUserStruct>()
    );
  }

  getFee(): BigInt {
    let result = super.call("getFee", "getFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getFee", "getFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  idToRewardsToken(param0: BigInt): RewardsControl__idToRewardsTokenResult {
    let result = super.call(
      "idToRewardsToken",
      "idToRewardsToken(uint256):(uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RewardsControl__idToRewardsTokenResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress()
    );
  }

  try_idToRewardsToken(
    param0: BigInt
  ): ethereum.CallResult<RewardsControl__idToRewardsTokenResult> {
    let result = super.tryCall(
      "idToRewardsToken",
      "idToRewardsToken(uint256):(uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RewardsControl__idToRewardsTokenResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress()
      )
    );
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  removeDev(devAddress: Address): boolean {
    let result = super.call("removeDev", "removeDev(address):(bool)", [
      ethereum.Value.fromAddress(devAddress)
    ]);

    return result[0].toBoolean();
  }

  try_removeDev(devAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("removeDev", "removeDev(address):(bool)", [
      ethereum.Value.fromAddress(devAddress)
    ]);
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

  setFee(newFee: BigInt): boolean {
    let result = super.call("setFee", "setFee(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(newFee)
    ]);

    return result[0].toBoolean();
  }

  try_setFee(newFee: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("setFee", "setFee(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(newFee)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setRoleAddress(newRole: Address): boolean {
    let result = super.call(
      "setRoleAddress",
      "setRoleAddress(address):(bool)",
      [ethereum.Value.fromAddress(newRole)]
    );

    return result[0].toBoolean();
  }

  try_setRoleAddress(newRole: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setRoleAddress",
      "setRoleAddress(address):(bool)",
      [ethereum.Value.fromAddress(newRole)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setUser(canClaim: boolean, userAddress: Address): boolean {
    let result = super.call("setUser", "setUser(bool,address):(bool)", [
      ethereum.Value.fromBoolean(canClaim),
      ethereum.Value.fromAddress(userAddress)
    ]);

    return result[0].toBoolean();
  }

  try_setUser(
    canClaim: boolean,
    userAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("setUser", "setUser(bool,address):(bool)", [
      ethereum.Value.fromBoolean(canClaim),
      ethereum.Value.fromAddress(userAddress)
    ]);
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

  get newRole(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get getPhunky(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddDevCall extends ethereum.Call {
  get inputs(): AddDevCall__Inputs {
    return new AddDevCall__Inputs(this);
  }

  get outputs(): AddDevCall__Outputs {
    return new AddDevCall__Outputs(this);
  }
}

export class AddDevCall__Inputs {
  _call: AddDevCall;

  constructor(call: AddDevCall) {
    this._call = call;
  }

  get devAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddDevCall__Outputs {
  _call: AddDevCall;

  constructor(call: AddDevCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimDaoRewardsCall extends ethereum.Call {
  get inputs(): ClaimDaoRewardsCall__Inputs {
    return new ClaimDaoRewardsCall__Inputs(this);
  }

  get outputs(): ClaimDaoRewardsCall__Outputs {
    return new ClaimDaoRewardsCall__Outputs(this);
  }
}

export class ClaimDaoRewardsCall__Inputs {
  _call: ClaimDaoRewardsCall;

  constructor(call: ClaimDaoRewardsCall) {
    this._call = call;
  }

  get tokenAddress(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ClaimDaoRewardsCall__Outputs {
  _call: ClaimDaoRewardsCall;

  constructor(call: ClaimDaoRewardsCall) {
    this._call = call;
  }
}

export class ClaimDevRewardsCall extends ethereum.Call {
  get inputs(): ClaimDevRewardsCall__Inputs {
    return new ClaimDevRewardsCall__Inputs(this);
  }

  get outputs(): ClaimDevRewardsCall__Outputs {
    return new ClaimDevRewardsCall__Outputs(this);
  }
}

export class ClaimDevRewardsCall__Inputs {
  _call: ClaimDevRewardsCall;

  constructor(call: ClaimDevRewardsCall) {
    this._call = call;
  }

  get contractAddress(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ClaimDevRewardsCall__Outputs {
  _call: ClaimDevRewardsCall;

  constructor(call: ClaimDevRewardsCall) {
    this._call = call;
  }
}

export class ClaimNFTRewardsCall extends ethereum.Call {
  get inputs(): ClaimNFTRewardsCall__Inputs {
    return new ClaimNFTRewardsCall__Inputs(this);
  }

  get outputs(): ClaimNFTRewardsCall__Outputs {
    return new ClaimNFTRewardsCall__Outputs(this);
  }
}

export class ClaimNFTRewardsCall__Inputs {
  _call: ClaimNFTRewardsCall;

  constructor(call: ClaimNFTRewardsCall) {
    this._call = call;
  }

  get nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get contractAddress(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class ClaimNFTRewardsCall__Outputs {
  _call: ClaimNFTRewardsCall;

  constructor(call: ClaimNFTRewardsCall) {
    this._call = call;
  }
}

export class ClaimRewardsCall extends ethereum.Call {
  get inputs(): ClaimRewardsCall__Inputs {
    return new ClaimRewardsCall__Inputs(this);
  }

  get outputs(): ClaimRewardsCall__Outputs {
    return new ClaimRewardsCall__Outputs(this);
  }
}

export class ClaimRewardsCall__Inputs {
  _call: ClaimRewardsCall;

  constructor(call: ClaimRewardsCall) {
    this._call = call;
  }

  get contractAddress(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ClaimRewardsCall__Outputs {
  _call: ClaimRewardsCall;

  constructor(call: ClaimRewardsCall) {
    this._call = call;
  }
}

export class CreateNftHodlerCall extends ethereum.Call {
  get inputs(): CreateNftHodlerCall__Inputs {
    return new CreateNftHodlerCall__Inputs(this);
  }

  get outputs(): CreateNftHodlerCall__Outputs {
    return new CreateNftHodlerCall__Outputs(this);
  }
}

export class CreateNftHodlerCall__Inputs {
  _call: CreateNftHodlerCall;

  constructor(call: CreateNftHodlerCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CreateNftHodlerCall__Outputs {
  _call: CreateNftHodlerCall;

  constructor(call: CreateNftHodlerCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CreateOGHodlersCall extends ethereum.Call {
  get inputs(): CreateOGHodlersCall__Inputs {
    return new CreateOGHodlersCall__Inputs(this);
  }

  get outputs(): CreateOGHodlersCall__Outputs {
    return new CreateOGHodlersCall__Outputs(this);
  }
}

export class CreateOGHodlersCall__Inputs {
  _call: CreateOGHodlersCall;

  constructor(call: CreateOGHodlersCall) {
    this._call = call;
  }

  get tokenId(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class CreateOGHodlersCall__Outputs {
  _call: CreateOGHodlersCall;

  constructor(call: CreateOGHodlersCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CreateUserCall extends ethereum.Call {
  get inputs(): CreateUserCall__Inputs {
    return new CreateUserCall__Inputs(this);
  }

  get outputs(): CreateUserCall__Outputs {
    return new CreateUserCall__Outputs(this);
  }
}

export class CreateUserCall__Inputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }

  get userAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateUserCall__Outputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositERC20RewardsCall extends ethereum.Call {
  get inputs(): DepositERC20RewardsCall__Inputs {
    return new DepositERC20RewardsCall__Inputs(this);
  }

  get outputs(): DepositERC20RewardsCall__Outputs {
    return new DepositERC20RewardsCall__Outputs(this);
  }
}

export class DepositERC20RewardsCall__Inputs {
  _call: DepositERC20RewardsCall;

  constructor(call: DepositERC20RewardsCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DepositERC20RewardsCall__Outputs {
  _call: DepositERC20RewardsCall;

  constructor(call: DepositERC20RewardsCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveDevCall extends ethereum.Call {
  get inputs(): RemoveDevCall__Inputs {
    return new RemoveDevCall__Inputs(this);
  }

  get outputs(): RemoveDevCall__Outputs {
    return new RemoveDevCall__Outputs(this);
  }
}

export class RemoveDevCall__Inputs {
  _call: RemoveDevCall;

  constructor(call: RemoveDevCall) {
    this._call = call;
  }

  get devAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveDevCall__Outputs {
  _call: RemoveDevCall;

  constructor(call: RemoveDevCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetClaimClockCall extends ethereum.Call {
  get inputs(): SetClaimClockCall__Inputs {
    return new SetClaimClockCall__Inputs(this);
  }

  get outputs(): SetClaimClockCall__Outputs {
    return new SetClaimClockCall__Outputs(this);
  }
}

export class SetClaimClockCall__Inputs {
  _call: SetClaimClockCall;

  constructor(call: SetClaimClockCall) {
    this._call = call;
  }
}

export class SetClaimClockCall__Outputs {
  _call: SetClaimClockCall;

  constructor(call: SetClaimClockCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get newFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetRoleAddressCall extends ethereum.Call {
  get inputs(): SetRoleAddressCall__Inputs {
    return new SetRoleAddressCall__Inputs(this);
  }

  get outputs(): SetRoleAddressCall__Outputs {
    return new SetRoleAddressCall__Outputs(this);
  }
}

export class SetRoleAddressCall__Inputs {
  _call: SetRoleAddressCall;

  constructor(call: SetRoleAddressCall) {
    this._call = call;
  }

  get newRole(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRoleAddressCall__Outputs {
  _call: SetRoleAddressCall;

  constructor(call: SetRoleAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetUserCall extends ethereum.Call {
  get inputs(): SetUserCall__Inputs {
    return new SetUserCall__Inputs(this);
  }

  get outputs(): SetUserCall__Outputs {
    return new SetUserCall__Outputs(this);
  }
}

export class SetUserCall__Inputs {
  _call: SetUserCall;

  constructor(call: SetUserCall) {
    this._call = call;
  }

  get canClaim(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }

  get userAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetUserCall__Outputs {
  _call: SetUserCall;

  constructor(call: SetUserCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Transfer1155Call extends ethereum.Call {
  get inputs(): Transfer1155Call__Inputs {
    return new Transfer1155Call__Inputs(this);
  }

  get outputs(): Transfer1155Call__Outputs {
    return new Transfer1155Call__Outputs(this);
  }
}

export class Transfer1155Call__Inputs {
  _call: Transfer1155Call;

  constructor(call: Transfer1155Call) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nftContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class Transfer1155Call__Outputs {
  _call: Transfer1155Call;

  constructor(call: Transfer1155Call) {
    this._call = call;
  }
}

export class TransferNftCall extends ethereum.Call {
  get inputs(): TransferNftCall__Inputs {
    return new TransferNftCall__Inputs(this);
  }

  get outputs(): TransferNftCall__Outputs {
    return new TransferNftCall__Outputs(this);
  }
}

export class TransferNftCall__Inputs {
  _call: TransferNftCall;

  constructor(call: TransferNftCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nftContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferNftCall__Outputs {
  _call: TransferNftCall;

  constructor(call: TransferNftCall) {
    this._call = call;
  }
}
