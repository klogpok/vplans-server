import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';
import { Role } from '../interfaces/user.interface';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
