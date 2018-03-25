import Vue from 'vue';
import Router from 'vue-router';
import Email from '../pages/email/Email.vue';
import NotFound from '../pages/notFound/NotFound.vue';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/email' },
  { path: '/email', name: 'email', component: Email },
  { path: '*', name: 'notFound', component: NotFound }
];
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
