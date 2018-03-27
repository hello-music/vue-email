import Vue from 'vue';
import Router from 'vue-router';
import EmailContainer from '../ui/pages/email/EmailContainer.vue';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/email' },
  { path: '/email', name: 'email', component: EmailContainer },
  { path: '*', redirect: '/email' }
];
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
