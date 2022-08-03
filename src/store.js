import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
      city: "Nairobi",
      weathers: {},
      currWeather: {},
      cityList: ["Nairobi", "Mombasa", "Nakuru", "Kisumu", "Eldoret"]
  },
  mutations: {
      set(state, data) {
          state.weathers = data;
          },
      setCurr(state, data) {
          state.currWeather = data;
          },
      updateCity(state, data) {
          state.city = data;
      }
      },
  actions: {
    load: async ({ commit }) => {
      await axios
          .get(
              `https://api.openweathermap.org/data/2.5/forecast/daily?q=${
                  store.state.city
              }&units=metric&cnt=5&appid=68a2b3c4663814a2a5d2d8ca3d2df853`
          )
          .then(response => response.data)
          .then(weathers => {
            commit("set", weathers);
          })
          .catch(errors => {
            console.error(errors);
            commit("set", {});
          });
    },
    loadCurrent: async ({ commit }) => {
      await axios
          .get(
              `https://api.openweathermap.org/data/2.5/weather/?q=${
                  store.state.city
              }&units=metric&APPID=2bc6fce6dcdf72d3f00bbdf18dcf3ad3`
          )
          .then(response => response.data)
          .then(currWeather => {
            commit("setCurr", currWeather);
          })
          .catch(errors => {
            console.error(errors);
            commit("setCurr", {});
          });
    }
  },
  getters: {
    city: state => state.city,
    weathers: state => state.weathers
  }

})

export default store
