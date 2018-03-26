import Vue from 'vue';
import Vuex from 'vuex';
import to from './to';
import cc from './cc';
import bcc from './bcc';
import subject from './subject';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    to,
    cc,
    bcc,
    subject
  }
});

export default store;
