import Vue from 'vue';
import Vuex from 'vuex';
import to from './to';
import cc from './cc';
import bcc from './bcc';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    to,
    cc,
    bcc
  }
});

export default store;
