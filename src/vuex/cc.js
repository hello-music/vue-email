import { insertAtIndex, isEmail, removeAtIndex } from '../helpers/helper';

export const MODULE_NAME = 'cc';
// store data
/**************************************************/
const defaultState = {
  emails: []
};

const state = defaultState;

const getters = {
  emails: ({ emails }) => emails,
  ccEmailsAreAllValid: ({ emails }) =>
    emails.length === 0 || emails.filter(email => !isEmail(email)).length === 0
};

export const ADD = 'add';
export const UPDATE = 'update';
export const REMOVE = 'remove';
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
  [RESET](context) {
    return context.commit(RESET);
  }
};

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
  [RESET](state) {
    state.emails = [];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
