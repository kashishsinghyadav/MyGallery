import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  }, 
  actions: {
    login({ commit }, { token }) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('clearToken');
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    }
  }
});
