// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import  { ToastPlugin, LoadingPlugin } from 'vux'
import {AjaxPlugin} from 'vux'
process.env.MOCK && require('./mock')

// 提示框
Vue.use(ToastPlugin)
// loading
Vue.use(LoadingPlugin)
// 发送 ajax 请求
Vue.use(AjaxPlugin)
// 添加 Fastclick 移除移动端点击延迟
FastClick.attach(document.body);
// 使用vue-router的beforeEach和afterEach来更改页面切换的loading状态
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  if (to.meta.needLogin) { // 判断该路由是否需要登录权限
    if (store.state.login.isLogin) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
      })
    }
    next();
  } else {
    next();
  }
})

router.afterEach(function (to) {
  // Loading组件一闪而过体验不大好，延迟设置loading=false
  setTimeout(() => {
    store.commit('updateLoadingStatus', {isLoading: false})
  }, 500);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', router, store, components: {
    App
  }, template: '<App/>'})
