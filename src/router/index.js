import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '登录页',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/student',    
    component: () => import('@/views/StudentHome.vue'),
    children: [
      {
        path: "",
        redirect: "/student/course"
      },
      {
        path: "course",
        name: '我的实验课',
        component: () => import('@/views/Student/Course.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
