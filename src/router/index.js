import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ()=>import('../components/HelloWorld.vue')
  },
  {
    path: '/user-list',
    component: ()=>import('../pages/UserList.vue')
  },
  {
    path: '/user-details',
    component: ()=>import('../pages/UserDetails.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})