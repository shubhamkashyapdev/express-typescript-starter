import { DocumentDefinition } from 'mongoose';
import UserModel, { UserDocument } from '../models/user.model';

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>
  >,
) {
  try {
    return await UserModel.create(input);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
