// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Nft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Nft entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Nft entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Nft", id.toString(), this);
  }

  static load(id: string): Nft | null {
    return store.get("Nft", id) as Nft | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get leapTokenId(): string | null {
    let value = this.get("leapTokenId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set leapTokenId(value: string | null) {
    if (value === null) {
      this.unset("leapTokenId");
    } else {
      this.set("leapTokenId", Value.fromString(value as string));
    }
  }

  get tokenURI(): string | null {
    let value = this.get("tokenURI");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string | null) {
    if (value === null) {
      this.unset("tokenURI");
    } else {
      this.set("tokenURI", Value.fromString(value as string));
    }
  }

  get userManager(): Bytes | null {
    let value = this.get("userManager");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set userManager(value: Bytes | null) {
    if (value === null) {
      this.unset("userManager");
    } else {
      this.set("userManager", Value.fromBytes(value as Bytes));
    }
  }

  get userManagerUpdatedAt(): BigInt | null {
    let value = this.get("userManagerUpdatedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set userManagerUpdatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("userManagerUpdatedAt");
    } else {
      this.set("userManagerUpdatedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get manager(): Bytes | null {
    let value = this.get("manager");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set manager(value: Bytes | null) {
    if (value === null) {
      this.unset("manager");
    } else {
      this.set("manager", Value.fromBytes(value as Bytes));
    }
  }

  get user(): Bytes | null {
    let value = this.get("user");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes | null) {
    if (value === null) {
      this.unset("user");
    } else {
      this.set("user", Value.fromBytes(value as Bytes));
    }
  }

  get collectionAddress(): Bytes | null {
    let value = this.get("collectionAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collectionAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("collectionAddress");
    } else {
      this.set("collectionAddress", Value.fromBytes(value as Bytes));
    }
  }

  get collectionTokenId(): string | null {
    let value = this.get("collectionTokenId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set collectionTokenId(value: string | null) {
    if (value === null) {
      this.unset("collectionTokenId");
    } else {
      this.set("collectionTokenId", Value.fromString(value as string));
    }
  }

  get playerSplit(): BigDecimal | null {
    let value = this.get("playerSplit");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set playerSplit(value: BigDecimal | null) {
    if (value === null) {
      this.unset("playerSplit");
    } else {
      this.set("playerSplit", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(value as BigInt));
    }
  }

  get userUpdatedAt(): BigInt | null {
    let value = this.get("userUpdatedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set userUpdatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("userUpdatedAt");
    } else {
      this.set("userUpdatedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get managerUpdatedAt(): BigInt | null {
    let value = this.get("managerUpdatedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set managerUpdatedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("managerUpdatedAt");
    } else {
      this.set("managerUpdatedAt", Value.fromBigInt(value as BigInt));
    }
  }
}
