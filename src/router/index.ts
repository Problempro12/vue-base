import { createRouter, createWebHistory } from 'vue-router'
import RegistrationForm from '../components/RegistrationForm.vue'
import SuccessPage from '../components/SuccessPage.vue'

const routes = [
  { path: '/', component: RegistrationForm },
  { path: '/success', component: SuccessPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
