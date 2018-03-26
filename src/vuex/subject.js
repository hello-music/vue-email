export const MODULE_NAME = 'subject';
// store state
/**************************************************/
const defaultState = {
  content: ''
};

const state = defaultState;
// getters
/**************************************************/
const getters = {
  subject: state => state.content
};
// actions
/**************************************************/
export const UPDATE = 'update';
export const RESET = 'reset';

const actions = {
  [UPDATE](context, subject) {
    return context.commit(UPDATE, subject);
  },
  [RESET](context) {
    return context.commit(RESET);
  }
};
// mutations
/**************************************************/
const mutations = {
  [UPDATE](state, subject) {
    state.content = subject;
  },
  [RESET](state) {
    state.content = '';
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
