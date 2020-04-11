import { ApiLog } from '../models/api-log.model';

export class LogService {
  /**
   * local method to log an api call to the database
   * @param endpoint: string - the endpoint the api call was pointing to
   * @param origin: string - origin of the api call
   * @returns
   */
  logApiCall(endpoint: string, origin: string): void {
    try {
      ApiLog.create({ endpoint, origin }).catch((error) => {
        console.log(
          'The api call could not be logged to the database - there was a problem with the database call.',
        );
        throw error;
      });
      // indicate the api call was logged to the db
      console.log('The api call was logged to the database.');
      return;
    } catch (error) {
      console.log('The api call could not be logged to the database.');
      throw error;
    }
  }
}
