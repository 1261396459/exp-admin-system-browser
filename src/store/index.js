import { createStore } from 'vuex'

const noLog = {
  isLogin: false,
  uid: "",
  acc: "",
  level: ""
};

export default createStore({
  state: {
    token: noLog
  },
  mutations: {
    LOGIN: (state, data) => {
      //更改token的值
      state.token = data;
      state.token["isLogin"] = true;
      sessionStorage.setItem("uid", state.token.uid);
    },
    LOGOUT: state => {
      //登出的时候要清除token
      state.token = noLog;
      sessionStorage.removeItem("uid");
    }
  },
  actions: {
    UserLogin({ commit }, data) {
      commit("LOGIN", data);
    },
    UserLogout({ commit }) {
      commit("LOGOUT");
    }
  }
})
