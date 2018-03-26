export const MODULE_NAME = 'content';
// store state
/**************************************************/
const defaultState = {
  content: ''
};

const state = defaultState;
// getters
/**************************************************/
const getters = {
  content: state => state.content
};
// actions
/**************************************************/
export const UPDATE = 'update';
export const RESET = 'reset';

const actions = {
  [UPDATE](context, content) {
    return context.commit(UPDATE, content);
  },
  [RESET](context) {
    return context.commit(RESET);
  }
};
// mutations
/**************************************************/
const mutations = {
  [UPDATE](state, content) {
    state.content = content;
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
