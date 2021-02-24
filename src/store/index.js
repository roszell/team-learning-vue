import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: String
  },
  getters: {
    isLoggedIn: state => {
      return state.userName !== "";
    }
  },
  mutations: {
    initializeStore (state) {
      state.userName = "";
    },
    setUserName (state, payload) {
      state.userName = payload.userName;
    }
  },
  actions: {
  },
  modules: {
  }
})
