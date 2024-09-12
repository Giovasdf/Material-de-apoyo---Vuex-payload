import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 0,
    frutas: ["Fruta 1", "Fruta 2", "Fruta 3"],
  },
  getters: {
    obtenerFrutas(state) {
      return state.frutas.length;
    },
  },
  mutations: {
    incrementar(state, payload) {
      state.contador += payload;
    },
  },
  actions: {
    accionIncrementar({ commit }) {
      setTimeout(() => {
        commit("incrementar", 10);
      }, 3000);
    },

    accionDecrementar({ commit }) {
      setTimeout(() => {
        commit("incrementar", -10);
      }, 3000);
    },
  },
  modules: {},
});
