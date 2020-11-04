import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    saludo: "hola",
  },
  mutations: {
    set_user(context, payload) {
      context.user = payload;
    },
    set_saludo(context, payload) {
      context.saludo += `${payload}`;
    },
  },
  actions: {
    async SET_USER({ commit }, payload) {
      const usuario = await fetch("localhost:3000/login");
      commit("set_user", payload);
    },
  },
  getters: {
    get_user: function(state) {
      return state.user;
    },
  },
  modules: {},
});
