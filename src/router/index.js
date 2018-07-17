import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import ('../views/index.vue').then(m => m.default)
const Login = () => import ('../views/login.vue').then(m => m.default)
const New = () => import ('../views/new.vue').then(m => m.default)
const Person = () => import ('../views/person.vue').then(m => m.default)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        needLogin: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Index
    }, {
      path: '/index',
      name: 'index',
      meta: {
        needLogin: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/new',
      name: 'new',
      meta: {
        needLogin: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: New
    }, {
      path: '/person',
      name: 'person',
      meta: {
        needLogin: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Person
    }
  ]
})
