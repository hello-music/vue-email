import Vue from 'vue';
import Vuex from 'vuex';
import subject from './subject';
import content from './content';
import ajax from './ajax';
import emails from './emails';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    subject,
    content,
    ajax,
    emails
  }
});

export default store;
