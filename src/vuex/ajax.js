export const MODULE_NAME = 'ajax';
// store state
/**************************************************/
const defaultState = {
  loading: false,
  error: ''
};

const state = defaultState;
// getters
/**************************************************/
const getters = {
  loading: ({ loading }) => loading,
  error: ({ error }) => error
};
// actions
/**************************************************/
export const LOADING = 'loading';
export const UPDATE_ERROR = 'updateError';

const actions = {
  [LOADING](context) {
    return context.commit(LOADING);
  },
  [UPDATE_ERROR](context, msg) {
    return context.commit(UPDATE_ERROR, msg);
  }
};
// mutations
/**************************************************/
const mutations = {
  [LOADING](state) {
    state.loading = true;
    state.error = '';
  },
  [UPDATE_ERROR](state, msg) {
    state.loading = false;
    state.error = msg;
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
