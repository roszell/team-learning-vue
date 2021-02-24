import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn)
      {
        next();
      }
      else
      {
        alert("Unauthorized");
        next("/");
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
