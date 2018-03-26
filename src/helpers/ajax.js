import {
  UPDATE_ERROR,
  UPDATE_SUCCESS,
  LOADING,
  MODULE_NAME
} from '../vuex/ajax';
import { getActionName } from './helper';

const fakeSuccess = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

// const fakeFail = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('fail'));
//     }, 1000);
//   });

const ajax = (dispatch, successAction = '') => {
  dispatch(getActionName(MODULE_NAME, LOADING));
  return fakeSuccess()
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
