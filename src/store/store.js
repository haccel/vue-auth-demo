import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../auth';

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
      state.user = auth.user;
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser');
    }
  }
});
