import ajax from '../helpers/ajax';
import { RESET as TO_RESET, MODULE_NAME as TO_MODULE_NAME } from '../vuex/to';
import { RESET as CC_RESET, MODULE_NAME as CC_MODULE_NAME } from '../vuex/cc';
import {
  RESET as BCC_RESET,
  MODULE_NAME as BCC_MODULE_NAME
} from '../vuex/bcc';
import {
  RESET as CONTENT_RESET,
  MODULE_NAME as CONTENT_MODULE_NAME
} from '../vuex/content';
import {
  RESET as SUBJECT_RESET,
  MODULE_NAME as SUBJECT_MODULE_NAME
} from '../vuex/subject';
import { getActionName } from '../helpers/helper';
export const ajaxSendEmail = (dispatch, fakePromise) => {
  //send data
  return ajax(dispatch, fakePromise).then(() => {
    //clear data
    dispatch(getActionName(TO_MODULE_NAME, TO_RESET));
    dispatch(getActionName(CC_MODULE_NAME, CC_RESET));
    dispatch(getActionName(BCC_MODULE_NAME, BCC_RESET));
    dispatch(getActionName(CONTENT_MODULE_NAME, CONTENT_RESET));
    dispatch(getActionName(SUBJECT_MODULE_NAME, SUBJECT_RESET));
  });
};
