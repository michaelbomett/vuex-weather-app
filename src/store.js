import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  city: "Budapest",
  weathers: {}
};

const mutations = {
  set(state, data) {
    state.weathers = data;
  },
  updateCity(state, data) {
    state.city = data;
  }
};

const actions = {
  load: async ({ commit }) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${
          state.city
        }&units=metric&cnt=5&appid=68a2b3c4663814a2a5d2d8ca3d2df853`
      )
      .then(response => response.data)
      .then(weathers => {
        console.log(weathers);
        commit("set", weathers);
      })
      .catch(errors => {
        console.error(errors);
        commit("set", {});
      });
  }
};

const getters = {
  city: state => state.city,
  weathers: state => state.weathers
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
