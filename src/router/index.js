import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Crear_registros from '../components/Crear_registros.vue'
import Editar_registros from '../components/Editar_registros.vue'
import Listar_registros from '../components/Listar_registros.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'Crear_registros',
    component: Crear_registros
  },
  {
    path: '/editar',
    name: 'Editar_registros',
    component: Editar_registros
  },
  {
    path: '/listar',
    name: 'Listar_registros',
    component: Listar_registros
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
