import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUP from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Add from '../views/Add.vue'
import Update from '../views/Update.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'sign-up',
   component:SignUP
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/add',
    name:'add-restaurant',
    component:Add
    
  },
  {
    path:'/update/:id',
    name:'update',
    component:Update,
    props:true
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
