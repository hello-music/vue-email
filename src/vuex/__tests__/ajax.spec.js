import ajax, {
  RESET,
  UPDATE_SUCCESS,
  MODULE_NAME,
  LOADING,
  UPDATE_ERROR
} from '../ajax';

describe('mutations', () => {
  const { mutations } = ajax;
  const state = {
    loading: false,
    error: '',
    showError: false,
    showSuccess: false
  };
  it(`${LOADING} sets state correctly`, () => {
    const stateAfter = {
      loading: true,
      error: '',
      showError: false,
      showSuccess: false
    };
    mutations[LOADING](state);
    expect(state).toEqual(stateAfter);
  });
  it(`${UPDATE_ERROR} sets state correctly`, () => {
    const msg = 'error';
    const stateAfter = {
      loading: false,
      error: msg,
      showError: true,
      showSuccess: false
    };
    mutations[UPDATE_ERROR](state, msg);
    expect(state).toEqual(stateAfter);
  });
  it(`${UPDATE_SUCCESS} sets state correctly`, () => {
    const stateAfter = {
      loading: false,
      error: '',
      showError: false,
      showSuccess: true
    };
    mutations[UPDATE_SUCCESS](state);
    expect(state).toEqual(stateAfter);
  });
  it(`${RESET} sets state correctly`, () => {
    const stateAfter = {
      loading: false,
      error: '',
      showError: false,
      showSuccess: false
    };
    mutations[RESET](state);
    expect(state).toEqual(stateAfter);
  });
});
