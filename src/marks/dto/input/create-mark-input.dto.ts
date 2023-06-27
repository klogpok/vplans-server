import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateMarkInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  readonly student: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly class: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  readonly mark: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly teacher: string;
}
