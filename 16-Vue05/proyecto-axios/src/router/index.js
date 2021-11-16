import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetallePost from '../views/DetallePost.vue'
import Todos from '../views/Todos.vue'
import TodosCompletos from '../views/TodosCompletos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:idx',
    name: 'Detalle',
    component: DetallePost
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/todos-completos',
    name: 'TodosCompletos',
    component: TodosCompletos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
