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
      state.user = null;//Firebase.auth().currentUser;
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser');
    }
  }
});
