import { GetMarksArgs } from './dto/args/get-marks-args.dto';
import { Injectable } from '@nestjs/common';
import { MarksRepository } from './marks.repository';
import { CreateMarkInput } from './dto/input/create-mark-input.dto';
import { MarkDocument } from './models/mark.shema';
import { User } from 'src/users/models/user.model';
import { Role } from 'src/common/role.interface';

@Injectable()
export class MarksService {
  constructor(private readonly marksRepository: MarksRepository) {}

  async createMark(createMarkData: CreateMarkInput) {
    const markDocument = await this.marksRepository.create({
      ...createMarkData,
    });
    return this.toModel(markDocument);
  }

  async getMarks(getMarksArgs: GetMarksArgs, user: User) {
    const filters = {};
    const queryByRole = this.createQueryByRole(user) ?? {};

    for (const [key, value] of Object.entries(getMarksArgs)) {
      if (getMarksArgs[key]) {
        if (!isNaN(getMarksArgs[key]) && key === 'mark') {
          filters[key] = +getMarksArgs[key];
        } else {
          filters[key] = {
            $regex: new RegExp(`^${getMarksArgs[key]}`, 'gi'),
          };
        }
      }
    }

    const markDocuments = await this.marksRepository.find({
      ...filters,
      ...queryByRole,
    });
    return markDocuments.map((mark) => this.toModel(mark));
  }

  private toModel(markDocument: MarkDocument) {
    return {
      _id: markDocument._id.toHexString(),
      ...markDocument,
    };
  }

  private createQueryByRole(user: User) {
    const userName = user.email.split('@')[0];
    let searchField = {};

    switch (user.role) {
      case Role.TEACHER:
        searchField = { teacher: userName };
        break;
      case Role.STUDENT:
        searchField = { student: userName };
        break;
      case Role.MANAGER:
        searchField = { student: { $in: ['student1', 'student2'] } };
        break;
      default:
        break;
    }

    return searchField;
  }
}
