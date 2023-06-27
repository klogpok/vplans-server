import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/abstract.model';

@ObjectType()
export class Mark extends AbstractModel {
  @Field()
  readonly student: string;

  @Field()
  readonly class: string;

  @Field()
  readonly mark: number;

  @Field()
  readonly teacher: string;
}
