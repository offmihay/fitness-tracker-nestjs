import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  // async getPreferences(user: User) {
  //   const userModel = await this.userModel.findOne({ _id: user._id }).exec();
  //   const preferences = userModel.preferences || {};
  //   return {
  //     preferences,
  //     preferences_possibleValues: {
  //       regions: Object.values(Regions),
  //     },
  //   };
  // }
}
