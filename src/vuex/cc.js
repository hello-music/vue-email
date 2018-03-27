import { insertAtIndex, isEmail, removeAtIndex } from '../helpers/helper';

export const MODULE_NAME = 'cc';
// store state
/**************************************************/
const defaultState = {
  emails: []
};

const state = defaultState;
// getters
/**************************************************/
const getters = {
  emails: ({ emails }) => emails,
  ccEmailsAreAllValid: ({ emails }) =>
    emails.length === 0 || emails.filter(email => !isEmail(email)).length === 0
};
// actions
/**************************************************/
export const ADD = 'add';
export const UPDATE = 'update';
export const REMOVE = 'remove';
export const POP = 'pop';
export const RESET = 'reset';

const actions = {
  [ADD](context, email) {
    return context.commit(ADD, email);
  },
  [UPDATE](context, { index, email }) {
    return context.commit(UPDATE, { index, email });
  },
  [REMOVE](context, index) {
    return context.commit(REMOVE, index);
  },
  [POP](context) {
    return context.commit(POP);
  },
  [RESET](context) {
    return context.commit(RESET);
  }
};
// mutations
/**************************************************/
const mutations = {
  [ADD](state, email) {
    state.emails = [...state.emails, email];
  },
  [UPDATE](state, { index, email }) {
    state.emails = insertAtIndex(state.emails, index, email);
  },
  [REMOVE](state, index) {
    state.emails = removeAtIndex(state.emails, index);
  },
  [POP](state) {
    state.emails = state.emails.slice(0, -1);
  },
  [RESET](state) {
    state.emails = [];
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
