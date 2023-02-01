import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Views/HomePage.vue'
import MainView from '../views/MainView.vue'
import Contact from '../views/Contact.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/mainview',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import('../views/Faq.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/reset',
      name: 'Reset',
      component: () => import('../views/forgotPassword.vue')
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/About.vue')
    // }
  ]
})

export default router
