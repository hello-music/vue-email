export const MODULE_NAME = 'ajax';
// store state
/**************************************************/
const defaultState = {
  loading: false,
  error: '',
  showError: false,
  showSuccess: false
};

const state = defaultState;
// getters
/**************************************************/
const getters = {
  loading: ({ loading }) => loading,
  error: ({ error }) => error,
  showError: ({ showError }) => showError,
  showSuccess: ({ showSuccess }) => showSuccess
};
// actions
/**************************************************/
export const LOADING = 'loading';
export const UPDATE_ERROR = 'updateError';
export const UPDATE_SUCCESS = 'updateSuccess';
export const RESET = 'reset';

const actions = {
  [LOADING](context) {
    return context.commit(LOADING);
  },
  [UPDATE_ERROR](context, msg) {
    return context.commit(UPDATE_ERROR, msg);
  },
  [UPDATE_SUCCESS](context) {
    return context.commit(UPDATE_SUCCESS);
  },
  [RESET](context) {
    return context.commit(RESET);
  }
};
// mutations
/**************************************************/
const mutations = {
  [LOADING](state) {
    state.loading = true;
    state.error = '';
    state.showError = false;
    state.showSuccess = false;
  },
  [UPDATE_ERROR](state, msg) {
    state.loading = false;
    state.error = msg;
    state.showError = true;
    state.showSuccess = false;
  },
  [UPDATE_SUCCESS](state) {
    state.loading = false;
    state.error = '';
    state.showError = false;
    state.showSuccess = true;
  },
  [RESET](state) {
    state.loading = false;
    state.error = '';
    state.showError = false;
    state.showSuccess = false;
  }
};
// export
/**************************************************/
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
