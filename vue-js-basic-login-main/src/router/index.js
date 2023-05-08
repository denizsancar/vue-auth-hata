import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/openpage",
    name: "OpenPage",
    component: () => import("../components/OpenPage.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.access_token;
  if (to.name !== 'Login' && to.name !== 'Register' && (!token)) {
    localStorage.clear()
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
