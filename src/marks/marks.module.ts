import { Module } from '@nestjs/common';
import { MarksResolver } from './marks.resolver';
import { MarksService } from './marks.service';
import { MarksRepository } from './marks.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Mark } from './models/mark.model';
import { MarkSchema } from './models/mark.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mark.name, schema: MarkSchema }]),
  ],
  providers: [MarksResolver, MarksService, MarksRepository],
})
export class MarksModule {}
