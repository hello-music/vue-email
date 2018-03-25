import Vue from 'vue';
import Vuex from 'vuex';
import to from './to';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    to
  }
});

export default store;
