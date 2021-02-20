import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('@/views/Reports.vue'),
      meta: {
        pageTitle: 'Reports',
        breadcrumb: [
          {
            text: 'Reports',
            active: true,
          },
        ],
      },
    },
    {
      path: '/reports/:slug',
      name: 'report-details',
      props: true,
      component: () => import('@/views/ReportDetails.vue'),
      meta: {
        pageTitle: 'Report Details',
        breadcrumb: [
          {
            text: 'Reports',
            active: false,
            path: '/reports',
          },
          {
            text: 'Report Details',
            active: true,
          },
        ],
      },
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/Account.vue'),
      meta: {
        pageTitle: 'Account',
        breadcrumb: [
          {
            text: 'Account',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
