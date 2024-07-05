import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AlumniView from '../views/AlumniView.vue'
import ContactView from '../views/ContactView.vue'
import DepartmentsView from '../views/DepartmentsView.vue'
import FatwaView from '../views/FatwaView.vue'
import ResearchView from '../views/ResearchView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/alumni',
    name: 'alumni',
    component: AlumniView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/departments',
    name: 'departments',
    component: DepartmentsView
  },
  {
    path: '/fatwaheading',
    name: 'fatwaheading',
    component: FatwaView
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
