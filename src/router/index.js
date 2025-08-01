import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/MovieList.vue'

const routes = [{ path: '/', component: Home }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
