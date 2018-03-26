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

const actions = {
  update(context, subject) {
    return context.commit(UPDATE, subject);
  }
};

const mutations = {
  update(state, subject) {
    state.content = subject;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
