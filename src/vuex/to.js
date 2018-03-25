// helper
/**************************************************/
const insertAtIndex = (emails, index, updatedEmail) => [
  ...emails.slice(0, index),
  updatedEmail,
  ...emails.slice(index + 1, emails.length)
];

const removeAtIndex = (emails, index) => [
  ...emails.slice(0, index),
  ...emails.slice(index + 1, emails.length)
];

export const MODULE_NAME = 'to';
export const getActionName = (moduleName, actionName) =>
  `${moduleName}/${actionName}`;
// store data
/**************************************************/
const defaultState = {
  emails: []
};

const state = defaultState;

const getters = {
  emails: state => state.emails
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
    console.log('called add: ', email); // eslint-disable-line no-console
    state.emails = [...state.emails, email];
    console.log('state: ', email); // eslint-disable-line no-console
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
