import Vue from 'vue'
import Vuex from 'vuex'
import { reqToken, postUmbrellaBorrow } from '@/API/index'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    Token_name: [],
  },
  mutations: {
    GETTOKEN(state, data) {
      state.Token_name = data
    }
  },
  actions: {
    async getToken({ commit }) {
      let result = await reqToken()
      if (result.code === 200) {
        commit("GETTOKEN", result.data)
      }
    },
    // postUmbrellaBorrow({ commit }, Params) {
    //   let result = postUmbrellaBorrow(Params)
    // }
  },
  getters: {}
})