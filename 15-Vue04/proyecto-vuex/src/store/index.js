import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 100,
    mensaje: 'Hola'
  },
  mutations: {
    SET_TOTAL(state){
      state.total++;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})