import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RequestList from '../views/RequestListView.vue';
import NewRequest from '../views/NewRequestView.vue';
import Request from '../views/RequestView.vue';
import LoginView from '../views/LoginView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/request-list',
      name: 'RequestList',
      component: RequestList
    },
    {
      path: '/new-request',
      name: 'NewRequest',
      component: NewRequest
    },
    {
      path: '/request/:id',
      name: 'RequestView',
      component: Request
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ],
});

export default router;
