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

const actions = {
  update(context, content) {
    return context.commit(UPDATE, content);
  }
};

const mutations = {
  update(state, content) {
    state.content = content;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
