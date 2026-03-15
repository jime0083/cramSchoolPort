import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: () => import('../views/TopPage.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/PolicyPage.vue')
  },
  {
    path: '/timetable',
    name: 'Timetable',
    component: () => import('../views/TimetablePage.vue')
  },
  {
    path: '/achievement',
    name: 'Achievement',
    component: () => import('../views/AchievementPage.vue')
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('../views/OverviewPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
