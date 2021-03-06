// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DataDeltaBytesProto } from './data-delta-bytes-proto.js';
import { MessageBytesProto } from './message-bytes-proto.js';


export class MessageMessageProto {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):MessageMessageProto {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMessageMessageProto(bb:flatbuffers.ByteBuffer, obj?:MessageMessageProto):MessageMessageProto {
  return (obj || new MessageMessageProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMessageMessageProto(bb:flatbuffers.ByteBuffer, obj?:MessageMessageProto):MessageMessageProto {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MessageMessageProto()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

event(obj?:MessageBytesProto):MessageBytesProto|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MessageBytesProto()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

deltas(index: number, obj?:DataDeltaBytesProto):DataDeltaBytesProto|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new DataDeltaBytesProto()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

deltasLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startMessageMessageProto(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addEvent(builder:flatbuffers.Builder, eventOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, eventOffset, 0);
}

static addDeltas(builder:flatbuffers.Builder, deltasOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, deltasOffset, 0);
}

static createDeltasVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startDeltasVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endMessageMessageProto(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // event
  return offset;
}

static createMessageMessageProto(builder:flatbuffers.Builder, eventOffset:flatbuffers.Offset, deltasOffset:flatbuffers.Offset):flatbuffers.Offset {
  MessageMessageProto.startMessageMessageProto(builder);
  MessageMessageProto.addEvent(builder, eventOffset);
  MessageMessageProto.addDeltas(builder, deltasOffset);
  return MessageMessageProto.endMessageMessageProto(builder);
}
}
