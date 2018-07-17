const state = {
    isLogin: localStorage.getItem("isLogin") || false
};

const mutations = {
    changeLogin(state, status) {
        state.isLogin = status;
    }
};

const actions = {
    loginAction({commit}) {
        commit('changeLogin', true);
    }
};

export default {
    state,
    mutations,
    actions,
};