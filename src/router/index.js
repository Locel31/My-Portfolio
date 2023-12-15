import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs.vue'
import Login from '../views/LoginView.vue'
import Admin from '../views/AdminView.vue'
import Education from '../views/EducationView.vue'
import EducationEdit from '../views/EducationEditView.vue'
import Contactus from '../views/ContactusView.vue'
import ProfessionalExperience from '../views/ProfessionalExperienceView.vue'
import ProfessionalExperienceEdit from '../views/ProfessionalExperienceEditView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
 ,{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/admin',
    name: 'Admin',
    component: Admin
  },{
    path: '/admin/education',
    name: 'Education',
    component: Education
  },{
    path: '/admin/education/:id',
    name: 'EducationEdit',
    component: EducationEdit
  },{
    path: '/admin/professional-experience',
    name: 'ProfessionalExperience',
    component: ProfessionalExperience
  },{
    path: '/admin/professional-experience/:id',
    name: 'ProfessionalExperienceEdit',
    component: ProfessionalExperienceEdit
  },{
    path: '/admin/contact-us',
    name: 'Contactus',
    component: Contactus
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
