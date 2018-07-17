// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

import blog from './modules/blog';
import loading from './modules/loading';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {  //和文件名字对应
    blog,
    loading,
    login,
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});