import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Organiser from './views/Organiser.vue'
// import LocationTime from './views/LocationTime.vue'
// import Matters from './views/Matters.vue'
// import Schedule from './views/Schedule.vue'
// import Content from './views/Content.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/organiser',
      name: 'organiser',
      component: () => import(/* webpackChunkName: "organiser" */ './views/Organiser.vue')
    },
    {
      path: '/matters',
      name: 'matters',
      component: () => import(/* webpackChunkName: "matters" */ './views/Matters.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import(/* webpackChunkName: "content" */ './views/Content.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "content" */ './views/Contact.vue')
    },
    {
      path: '/paper',
      name: 'paper',
      component: () => import(/* webpackChunkName: "paper" */ './views/Paper.vue')
    },
    {
      path: '/locationTime',
      name: 'locationTime',
      component: () => import(/* webpackChunkName: "locationTime" */ './views/LocationTime.vue')
    }
  ]
})
