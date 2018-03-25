import Vue from 'vue';
import VueInputAutowidth from 'vue-input-autowidth';
import App from './App.vue';

Vue.use(VueInputAutowidth);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
