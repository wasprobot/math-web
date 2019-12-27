import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expressions: [{ latex: "\\frac{E=mc^{hammer}}{Derk}" }, { latex: "E=mc^2" }, { latex: "mc^3" }, { latex: "mc^3" }]
  },
  mutations: {},
  actions: {},
  modules: {}
});
