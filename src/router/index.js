import Vue from 'vue';
import Router from 'vue-router';
import Email from '../pages/email/Email.vue';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/email' },
  { path: '/email', name: 'email', component: Email },
  { path: '*', redirect: '/email' }
];
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
