// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ExceptionResponseProto {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):ExceptionResponseProto {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsExceptionResponseProto(bb:flatbuffers.ByteBuffer, obj?:ExceptionResponseProto):ExceptionResponseProto {
  return (obj || new ExceptionResponseProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsExceptionResponseProto(bb:flatbuffers.ByteBuffer, obj?:ExceptionResponseProto):ExceptionResponseProto {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ExceptionResponseProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

stack():string|null
stack(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
stack(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

message():string|null
message(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
message(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startExceptionResponseProto(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addStack(builder:flatbuffers.Builder, stackOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, stackOffset, 0);
}

static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, messageOffset, 0);
}

static endExceptionResponseProto(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createExceptionResponseProto(builder:flatbuffers.Builder, stackOffset:flatbuffers.Offset, messageOffset:flatbuffers.Offset):flatbuffers.Offset {
  ExceptionResponseProto.startExceptionResponseProto(builder);
  ExceptionResponseProto.addStack(builder, stackOffset);
  ExceptionResponseProto.addMessage(builder, messageOffset);
  return ExceptionResponseProto.endExceptionResponseProto(builder);
}
}
