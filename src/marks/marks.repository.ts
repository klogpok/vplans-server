import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../database/abstract.repository';
import { Mark } from './models/mark.model';
import { MarkDocument } from './models/mark.shema';

@Injectable()
export class MarksRepository extends AbstractRepository<MarkDocument> {
  protected readonly logger = new Logger(MarksRepository.name);

  constructor(@InjectModel(Mark.name) markModel: Model<MarkDocument>) {
    super(markModel);
  }
}
