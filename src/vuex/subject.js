export const MODULE_NAME = 'subject';
// store data
/**************************************************/
const defaultState = {
  content: ''
};

const state = defaultState;

const getters = {
  subject: state => state.content
};

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

const mutations = {
  [UPDATE](state, subject) {
    state.content = subject;
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
