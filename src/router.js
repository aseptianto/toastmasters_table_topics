import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './views/MainPage.vue';
import QuestionDetail from './views/QuestionDetail.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage },
  { path: '/question/:id', component: QuestionDetail, props: true }
];

const router = new VueRouter({
  routes
});

export default router;

