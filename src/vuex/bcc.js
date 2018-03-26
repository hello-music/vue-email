import { insertAtIndex, isEmail, removeAtIndex } from '../helpers/helper';

export const MODULE_NAME = 'bcc';
// store data
/**************************************************/
const defaultState = {
  emails: []
};

const state = defaultState;

const getters = {
  emails: ({ emails }) => emails,
  bccEmailsAreAllValid: ({ emails }) =>
    emails.length === 0 || emails.filter(email => !isEmail(email)).length === 0
};

export const ADD = 'add';
export const UPDATE = 'update';
export const REMOVE = 'remove';

const actions = {
  add(context, email) {
    return context.commit(ADD, email);
  },
  update(context, { index, email }) {
    return context.commit(UPDATE, { index, email });
  },
  remove(context, index) {
    return context.commit(REMOVE, index);
  }
};

const mutations = {
  add(state, email) {
    state.emails = [...state.emails, email];
  },
  update(state, { index, email }) {
    state.emails = insertAtIndex(state.emails, index, email);
  },
  remove(state, index) {
    state.emails = removeAtIndex(state.emails, index);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
