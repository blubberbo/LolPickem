import { Request, Response } from 'express';
import { Account, Game } from '../models';
import * as exampleGameJSON from '../constants/example-game.json';
import { UserService } from '../services/user.service';
import { processError } from '../util/tools';
export class UserController {
  constructor(protected userService: UserService = new UserService()) {}
  /**
   * POST local API call to create a User in the db
   * @param email: string - the users email
   * @returns user: User
   */
  addUser = async (req: Request, res: Response): Promise<any> => {
    try {
      // get the userEmail from the request body
      const userEmail = req.body.email;
      // ensure there was an email address passed
      if (!userEmail) throw new Error('No email address provided.');
      // attempt to get the user from the database (to see if it already exists)
      await this.userService
        .getUser(userEmail)
        .then(existingUser => {
          // if there was no existing user
          if (!existingUser) {
            // add the user
            this.userService
              .addUser(userEmail)
              .then(createdUser => {
                // if a user was successfully created
                if (createdUser) {
                  // return a 201 User Created
                  res.status(201).json({
                    ok: true,
                    message: 'User created',
                  });
                }
              })
              .catch(error => {
                throw new Error(error);
              });
          }
          // else, the user does exist, so continue on
        })
        .catch(error => {
          throw new Error(error);
        });
    } catch (error) {
      // create a custom error from the error
      const processedError = processError(error);
      res
        .status(processedError.status)
        .send({ message: processedError.message });
      throw error;
    }
  };

  /**
   * PATCH local API call to push a User History to a User in the db
   * @param email: string - the users email
   * @param userHistory: UserHistory - the User History we are adding
   * @returns user: User
   */
  updateUserByIdPushUserHistory = async (
    req: Request,
    res: Response,
  ): Promise<any> => {
    // get the userEmail from the request body
    const userEmail = req.body.email;
    // get the userHistory from the request body
    const userHistory = req.body.userHistory;
    // add a timestamp to the user history
    //  userHistory.timestamp = new Date();
    // ensure an email and userHistory were provided
    if (!userEmail) throw new Error('No email provided.');
    if (!userHistory) throw new Error('No User History provided.');
    // update the user, pushing the userHistory to it
    await this.userService
      .updateUser(userEmail, userHistory)
      .then(updatedUser => {
        // if a user was successfully created
        if (updatedUser) {
          // return a 204 User Updated
          res.status(204).json({
            ok: true,
            message: 'User updated',
          });
        }
      })
      .catch(error => {
        throw error;
      });
  };
}
