export const SUBJECT_MODULE = 'subject';
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
export const UPDATE_SUBJECT = '@subject/update';
export const RESET_SUBJECT = '@subject/reset';

const actions = {
  [UPDATE_SUBJECT](context, subject) {
    return context.commit(UPDATE_SUBJECT, subject);
  },
  [RESET_SUBJECT](context) {
    return context.commit(RESET_SUBJECT);
  }
};
// mutations
/**************************************************/
const mutations = {
  [UPDATE_SUBJECT](state, subject) {
    state.content = subject;
  },
  [RESET_SUBJECT](state) {
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
