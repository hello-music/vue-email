export const CONTENT_MODULE = 'content';
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
export const UPDATE_CONTENT = '@content/update';
export const RESET_CONTENT = '@content/reset';

const actions = {
  [UPDATE_CONTENT](context, content) {
    return context.commit(UPDATE_CONTENT, content);
  },
  [RESET_CONTENT](context) {
    return context.commit(RESET_CONTENT);
  }
};
// mutations
/**************************************************/
const mutations = {
  [UPDATE_CONTENT](state, content) {
    state.content = content;
  },
  [RESET_CONTENT](state) {
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
