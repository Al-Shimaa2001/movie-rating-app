import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/MovieList.vue' 
import AddMovie from '../components/AddMovie.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/add-movies', component: AddMovie },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
