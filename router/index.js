import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login', 
    name: 'kashish',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
