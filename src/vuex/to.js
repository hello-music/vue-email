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

// store data
/**************************************************/
const defaultState = [];

const state = defaultState;

const getters = {
  emails: state => state
};

const ADD = 'add';
const UPDATE = 'update';
const REMOVE = 'remove';

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
    state = [...state, email];
  },
  update(state, { index, email }) {
    state = insertAtIndex(state, index, email);
  },
  remove(state, index) {
    state = removeAtIndex(state, index);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
