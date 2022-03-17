// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { WarpReferenceUnionProto, unionToWarpReferenceUnionProto, unionListToWarpReferenceUnionProto } from './warp-reference-union-proto.js';


export class UnsubscribeMessageRequestProto {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):UnsubscribeMessageRequestProto {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnsubscribeMessageRequestProto(bb:flatbuffers.ByteBuffer, obj?:UnsubscribeMessageRequestProto):UnsubscribeMessageRequestProto {
  return (obj || new UnsubscribeMessageRequestProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnsubscribeMessageRequestProto(bb:flatbuffers.ByteBuffer, obj?:UnsubscribeMessageRequestProto):UnsubscribeMessageRequestProto {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnsubscribeMessageRequestProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

classId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

sourceType():WarpReferenceUnionProto {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : WarpReferenceUnionProto.NONE;
}

source<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startUnsubscribeMessageRequestProto(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addClassId(builder:flatbuffers.Builder, classId:number) {
  builder.addFieldInt16(0, classId, 0);
}

static addSourceType(builder:flatbuffers.Builder, sourceType:WarpReferenceUnionProto) {
  builder.addFieldInt8(1, sourceType, WarpReferenceUnionProto.NONE);
}

static addSource(builder:flatbuffers.Builder, sourceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, sourceOffset, 0);
}

static endUnsubscribeMessageRequestProto(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 8) // source
  return offset;
}

static createUnsubscribeMessageRequestProto(builder:flatbuffers.Builder, classId:number, sourceType:WarpReferenceUnionProto, sourceOffset:flatbuffers.Offset):flatbuffers.Offset {
  UnsubscribeMessageRequestProto.startUnsubscribeMessageRequestProto(builder);
  UnsubscribeMessageRequestProto.addClassId(builder, classId);
  UnsubscribeMessageRequestProto.addSourceType(builder, sourceType);
  UnsubscribeMessageRequestProto.addSource(builder, sourceOffset);
  return UnsubscribeMessageRequestProto.endUnsubscribeMessageRequestProto(builder);
}
}