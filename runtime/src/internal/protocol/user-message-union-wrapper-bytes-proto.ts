// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class UserMessageUnionWrapperBytesProto {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):UserMessageUnionWrapperBytesProto {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUserMessageUnionWrapperBytesProto(bb:flatbuffers.ByteBuffer, obj?:UserMessageUnionWrapperBytesProto):UserMessageUnionWrapperBytesProto {
  return (obj || new UserMessageUnionWrapperBytesProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUserMessageUnionWrapperBytesProto(bb:flatbuffers.ByteBuffer, obj?:UserMessageUnionWrapperBytesProto):UserMessageUnionWrapperBytesProto {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UserMessageUnionWrapperBytesProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

bytes(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

bytesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

bytesArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startUserMessageUnionWrapperBytesProto(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addBytes(builder:flatbuffers.Builder, bytesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, bytesOffset, 0);
}

static createBytesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startBytesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static endUserMessageUnionWrapperBytesProto(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUserMessageUnionWrapperBytesProto(builder:flatbuffers.Builder, bytesOffset:flatbuffers.Offset):flatbuffers.Offset {
  UserMessageUnionWrapperBytesProto.startUserMessageUnionWrapperBytesProto(builder);
  UserMessageUnionWrapperBytesProto.addBytes(builder, bytesOffset);
  return UserMessageUnionWrapperBytesProto.endUserMessageUnionWrapperBytesProto(builder);
}
}
