import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 100,
    mensaje: 'Hola'
  },
  mutations: {
    SET_TOTAL_AUM(state){
      state.total++;
    },
    SET_TOTAL_DIS(state, num){
      state.total = state.total - num;
    }
  },
  actions: {
    accionAumentar({commit}){
      commit('SET_TOTAL_AUM');
    },
    accionDisminuir({commit}, num){
      commit('SET_TOTAL_DIS', num);
    },
    accionBoton({commit}, {estado, numero}){
      if(estado) {
        commit('SET_TOTAL_AUM');
      } else {
        commit('SET_TOTAL_DIS', numero);
      }
    }
  },
  modules: {
  },
  getters: {
  }
})
