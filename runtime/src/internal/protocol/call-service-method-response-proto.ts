// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ValueProto } from './value-proto.js';


export class CallServiceMethodResponseProto {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):CallServiceMethodResponseProto {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCallServiceMethodResponseProto(bb:flatbuffers.ByteBuffer, obj?:CallServiceMethodResponseProto):CallServiceMethodResponseProto {
  return (obj || new CallServiceMethodResponseProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCallServiceMethodResponseProto(bb:flatbuffers.ByteBuffer, obj?:CallServiceMethodResponseProto):CallServiceMethodResponseProto {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CallServiceMethodResponseProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

returnValue(obj?:ValueProto):ValueProto|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new ValueProto()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startCallServiceMethodResponseProto(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addReturnValue(builder:flatbuffers.Builder, returnValueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, returnValueOffset, 0);
}

static endCallServiceMethodResponseProto(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCallServiceMethodResponseProto(builder:flatbuffers.Builder, returnValueOffset:flatbuffers.Offset):flatbuffers.Offset {
  CallServiceMethodResponseProto.startCallServiceMethodResponseProto(builder);
  CallServiceMethodResponseProto.addReturnValue(builder, returnValueOffset);
  return CallServiceMethodResponseProto.endCallServiceMethodResponseProto(builder);
}
}
