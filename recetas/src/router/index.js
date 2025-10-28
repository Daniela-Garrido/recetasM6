import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Categorias from '../views/Categorias.vue'
import Postres from '../views/categorias/Postres.vue'
import Bebidas from '../views/categorias/Bebidas.vue'
import DetalleReceta from '../views/DetalleReceta.vue'
import PerfilAutor from '../views/PerfilAutor.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias,
    children: [
      {
        path: 'postres',
        name: 'Postres',
        component: Postres
      },
      {
        path: 'bebidas',
        name: 'Bebidas',
        component: Bebidas
      }
    ]
  },
  {
    path: '/receta/:id',
    name: 'DetalleReceta',
    component: DetalleReceta,
    props: true
  },
  {
    path: '/autor/:nombre',
    name: 'PerfilAutor',
    component: PerfilAutor,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
