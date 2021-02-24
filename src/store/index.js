import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: String
  },
  getters: {
  },
  mutations: {
    initializeStore (state) {
      state.userName = "";
    }
  },
  actions: {
  },
  modules: {
  }
})
