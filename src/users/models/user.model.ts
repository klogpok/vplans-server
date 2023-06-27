import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/abstract.model';
import { Role } from '../interfaces/user.interface';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  readonly email: string;

  @Field()
  readonly role: Role;
}
