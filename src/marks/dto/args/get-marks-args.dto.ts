import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetMarksArgs {
  @Field()
  student: string;

  @Field()
  class: string;

  @Field()
  mark: string;

  @Field()
  teacher: string;
}
