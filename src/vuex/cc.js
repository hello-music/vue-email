import { insertAtIndex, removeAtIndex } from '../helpers/helper';

export const MODULE_NAME = 'cc';
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
