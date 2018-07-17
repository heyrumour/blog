import Vue from 'vue'
import {AjaxPlugin} from 'vux'
import api from "../../http/apiPath";

Vue.use(AjaxPlugin)

const state = {
    //文章列表
    blog_list: [],
};

const getters = {
    //计算总数量
    totalNum: state => state.blog_list.length,
};

const actions = {
    //获取文章
    setBlogList({commit}) {
        Vue.http.get(api.blogListApi).then(({ data }) => {
            if (data.code == 200 && data.msg == "success") {
                commit('updateBlogList', data.data.list);   
            }
        });
    },
};

//mutation
const mutations = {
    //设置文章到state
    updateBlogList(state, list) {
        state.blog_list = list;
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};