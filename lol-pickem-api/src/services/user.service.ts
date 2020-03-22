import { User, UserHistory } from '../models/';

export class UserService {
  /**
   * local method to add a user to the database
   * @param userEmail: string
   * @returns user: User - the created User
   */
  async addUser(userEmail: string): Promise<User> {
    try {
      if (!userEmail) {
        throw new Error('Cannot create user - no email supplied.');
      }
      const createdUser = await User.create({ email: userEmail }).catch(
        error => {
          throw error;
        },
      );
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  /**
   * local method to get a user from the database
   * @param userEmail: string
   * @returns user: User - the retrieved User
   */
  async getUser(userEmail: string): Promise<User> {
    // find all athletes who play tennis, selecting the 'name' and 'age' fields
    const retrievedUser = await User.findOne({ email: userEmail }).catch(
      error => {
        throw error;
      },
    );
    // return the found user
    return retrievedUser;
  }

  /**
   * local method to update a user in the database
   * @param userEmail: string
   * @param userHistory: UserHistory - a User History to be pushed to the user
   * @returns user: User - the updated User
   */
  async updateUser(userEmail: string, userHistory: UserHistory): Promise<User> {
    // find the user we want to update by their email and push the userHistory
    // indicate we want the new record to be returned
    const updatedUser = await User.findOneAndUpdate(
      { email: userEmail },
      { $push: { history: userHistory } },
      { new: true },
    ).catch(error => {
      throw error;
    });
    // return the found user
    return updatedUser;
  }
}
