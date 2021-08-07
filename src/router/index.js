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
      },
      {
        path: "sign",
        name: '我的签到',
        component: () => import('@/views/Student/Signin.vue')
      },
    ]
  },
  {
    path: '/adminer',    
    component: () => import('@/views/AdminerHome.vue'),
    children: [
      {
        path: "",
        redirect: "/adminer/lab"
      },
      {
        path: "lab",
        name: '我的实验室',
        component: () => import('@/views/Adminer/Lab.vue')
      },
      {
        path: "app",
        name: '我的收到的申请',
        component: () => import('@/views/Adminer/Application.vue')
      },
    ]
  },
  {
    path: '/adminer/lab-change',
    name: '修改实验室信息',
    component: () => import('@/views/Adminer/AlertLab.vue')
  },
  {
    path: '/teacher',
    component: () => import('@/views/TeacherHome.vue'),
    children: [
      {
        path: "",
        redirect: "/teacher/big"
      },
      {
        path: "big",
        name: '实验课管理',
        component: () => import('@/views/Teacher/Big.vue')
      },
      {
        path: "apply",
        name: '我的申请',
        component: () => import('@/views/Teacher/Apply.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
