// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ServiceReferenceValueProto {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):ServiceReferenceValueProto {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsServiceReferenceValueProto(bb:flatbuffers.ByteBuffer, obj?:ServiceReferenceValueProto):ServiceReferenceValueProto {
  return (obj || new ServiceReferenceValueProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsServiceReferenceValueProto(bb:flatbuffers.ByteBuffer, obj?:ServiceReferenceValueProto):ServiceReferenceValueProto {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ServiceReferenceValueProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

classId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

primaryKey():string|null
primaryKey(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
primaryKey(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startServiceReferenceValueProto(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addClassId(builder:flatbuffers.Builder, classId:number) {
  builder.addFieldInt16(0, classId, 0);
}

static addPrimaryKey(builder:flatbuffers.Builder, primaryKeyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, primaryKeyOffset, 0);
}

static endServiceReferenceValueProto(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // primary_key
  return offset;
}

static createServiceReferenceValueProto(builder:flatbuffers.Builder, classId:number, primaryKeyOffset:flatbuffers.Offset):flatbuffers.Offset {
  ServiceReferenceValueProto.startServiceReferenceValueProto(builder);
  ServiceReferenceValueProto.addClassId(builder, classId);
  ServiceReferenceValueProto.addPrimaryKey(builder, primaryKeyOffset);
  return ServiceReferenceValueProto.endServiceReferenceValueProto(builder);
}
}
