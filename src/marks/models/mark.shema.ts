import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class MarkDocument extends AbstractDocument {
  @Prop()
  student: string;

  @Prop()
  class: string;

  @Prop()
  mark: number;

  @Prop()
  teacher: string;
}

export const MarkSchema = SchemaFactory.createForClass(MarkDocument);
