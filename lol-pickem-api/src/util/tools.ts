import { CustomError } from '../models/custom-error.model';

/**
 * process an error, returning a locally formatted CustomError
 * @param error: error
 * @returns customError: CustomError
 */
export function processError(error): CustomError {
  // create a status and a message, checking if a status was included in the error
  let errStatus;
  let errMessage;
  // check if there is a status in the error
  if (error.status) {
    errStatus = error.status;
  } else if (error.message.includes('Too Many Requests')) {
    // else, check if the error is "Too Many Requests" -> set the status to 429
    errStatus = 429;
  } else {
    // else, the default case is just a 500
    errStatus = 500;
  }

  // remove 'error: ' from the message
  errMessage = error.message.replace('Error: ', '');
  // check if the first 3 characters of the message is a number
  if (!error.status && parseInt(errMessage.substring(0, 3)) > 0) {
    // if the first 3 characters are a number, extract the number and pass it to the status
    errStatus = parseInt(errMessage.substring(0, 3));
    // also change the message to not include the first 3 characters and the following ": "
    errMessage = errMessage.substring(4).trim();
  }
  // return a CustomError
  return new CustomError(errStatus, errMessage);
}
