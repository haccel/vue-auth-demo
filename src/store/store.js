import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    setUser: state => {
      // do some work
      state.user = null;
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser');
    }
  }
});
