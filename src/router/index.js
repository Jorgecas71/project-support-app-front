import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import RequestList from '../views/RequestListView.vue'
import NewRequest from '../views/NewRequestView.vue'
import LoginView from '../views/LoginView.vue'
import RequestView from '../views/RequestView.vue'


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
      path: '/request',
      name: 'Request',
      component: RequestView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
});

export default router;
