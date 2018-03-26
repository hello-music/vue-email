export const MODULE_NAME = 'content';
// store data
/**************************************************/
const defaultState = {
  content: ''
};

const state = defaultState;

const getters = {
  content: state => state.content
};

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

const mutations = {
  [UPDATE](state, content) {
    state.content = content;
  },
  [RESET](state) {
    state.content = '';
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
