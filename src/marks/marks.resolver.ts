import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { User } from '../users/models/user.model';
import { Mark } from './models/mark.model';
import { MarksService } from './marks.service';
import { CreateMarkInput } from './dto/input/create-mark-input.dto';
import { GetMarksArgs } from './dto/args/get-marks-args.dto';

@Resolver(() => Mark)
export class MarksResolver {
  constructor(private readonly marksService: MarksService) {}

  @Mutation(() => Mark)
  async createMark(@Args('createMarkData') createMarkData: CreateMarkInput) {
    return this.marksService.createMark(createMarkData);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Mark], { name: 'marks' })
  async getMarks(
    @Args() getMarksArgs: GetMarksArgs,
    @CurrentUser() user: User,
  ) {
    return this.marksService.getMarks(getMarksArgs, user);
  }
}
