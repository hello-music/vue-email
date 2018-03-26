import {
  UPDATE_ERROR,
  UPDATE_SUCCESS,
  LOADING,
  MODULE_NAME
} from '../vuex/ajax';
import { getActionName } from './helper';
// helpers - mock response promises
/**************************************************/
export const fakeSuccess = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

export const fakeFail = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('fail'));
    }, 1000);
  });
// generic ajax gateway
/**************************************************/
const ajax = (dispatch, fakePromise, successAction = '') => {
  dispatch(getActionName(MODULE_NAME, LOADING));
  return fakePromise()
    .then(response => {
      if (successAction !== '') {
        dispatch(successAction, response.data);
      }
      dispatch(getActionName(MODULE_NAME, UPDATE_SUCCESS));
    })
    .catch(error => {
      dispatch(getActionName(MODULE_NAME, UPDATE_ERROR), error.message);
      throw error;
    });
};
export default ajax;
