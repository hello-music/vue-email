import { insertAtIndex, isEmail, removeAtIndex } from '../helpers/helper';

export const EMAIL_MODULE = 'emails';
// store state
/**************************************************/
const defaultState = {
  to: [],
  cc: [],
  bcc: []
};

const state = defaultState;
// getters
/**************************************************/
const getters = {
  toEmails: ({ to }) => to,
  ccEmails: ({ cc }) => cc,
  bccEmails: ({ bcc }) => bcc,
  bccEmailsAreAllValid: ({ bcc }) =>
    bcc.length === 0 || bcc.filter(email => !isEmail(email)).length === 0,
  ccEmailsAreAllValid: ({ cc }) =>
    cc.length === 0 || cc.filter(email => !isEmail(email)).length === 0,
  toEmailsAreAllValid: ({ to }) =>
    to.length !== 0 && to.filter(email => !isEmail(email)).length === 0
};
// actions
/**************************************************/
export const ADD_EMAIL = 'add';
export const UPDATE_EMAIL = 'update';
export const REMOVE_EMAIL = 'remove';
export const POP_EMAIL = 'pop';
export const RESET_EMAILS = 'reset';

const actions = {
  [ADD_EMAIL](context, { type, email }) {
    return context.commit(ADD_EMAIL, { type, email });
  },
  [UPDATE_EMAIL](context, { type, index, email }) {
    return context.commit(UPDATE_EMAIL, { type, index, email });
  },
  [REMOVE_EMAIL](context, { type, index }) {
    return context.commit(REMOVE_EMAIL, { type, index });
  },
  [POP_EMAIL](context, type) {
    return context.commit(POP_EMAIL, type);
  },
  [RESET_EMAILS](context) {
    return context.commit(RESET_EMAILS);
  }
};
// mutations
/**************************************************/
const mutations = {
  [ADD_EMAIL](state, { type, email }) {
    state[type] = [...state[type], email];
  },
  [UPDATE_EMAIL](state, { type, index, email }) {
    state[type] = insertAtIndex(state[type], index, email);
  },
  [REMOVE_EMAIL](state, { type, index }) {
    state[type] = removeAtIndex(state[type], index);
  },
  [POP_EMAIL](state, type) {
    state[type] = state[type].slice(0, -1);
  },
  [RESET_EMAILS](state) {
    state.to = [];
    state.cc = [];
    state.bcc = [];
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
