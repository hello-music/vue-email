import { UPDATE_ERROR, LOADING, MODULE_NAME } from '../vuex/ajax';
import { getActionName } from './helper';

const fakeAjaxCall = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

const ajax = (dispatch, successAction = '') => {
  dispatch(getActionName(MODULE_NAME, LOADING));
  fakeAjaxCall()
    .then(response => {
      if (successAction !== '') {
        dispatch(successAction, response.data);
      }
      dispatch(getActionName(MODULE_NAME, UPDATE_ERROR), '');
    })
    .catch(error => {
      dispatch(getActionName(MODULE_NAME, UPDATE_ERROR), error);
    });
};
export default ajax;
