import ajax from '../helpers/ajax';
import { EMAIL_MODULE, RESET_EMAILS } from '../vuex/emails';
import { CONTENT_MODULE, RESET_CONTENT } from '../vuex/content';
import { SUBJECT_MODULE, RESET_SUBJECT } from '../vuex/subject';
import { getActionName } from '../helpers/helper';
export const ajaxSendEmail = (dispatch, dmeoConfig) => {
  //send data
  return ajax(dispatch, dmeoConfig).then(() => {
    //clear data
    dispatch(getActionName(EMAIL_MODULE, RESET_EMAILS));
    dispatch(getActionName(CONTENT_MODULE, RESET_CONTENT));
    dispatch(getActionName(SUBJECT_MODULE, RESET_SUBJECT));
  });
};
