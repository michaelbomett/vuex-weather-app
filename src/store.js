import { createStore } from "vuex";
import axios from "axios";
// import createCache from 'vuex-cache';


const store = createStore({

    // plugins: createCache({ timeout: 100000}),
    state: {
        city: "",
        weathers: {},
        currWeather: {},
        cityList: ["Nairobi", "Mombasa", "Nakuru", "Kisumu", "Eldoret"],
        errorMsg: ""
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
    load: async ({ commit }, loadCity) => {
      await axios
          .get(
              `https://api.openweathermap.org/data/2.5/forecast/daily?q=${
                  loadCity
              }&units=metric&cnt=5&appid=68a2b3c4663814a2a5d2d8ca3d2df853`
          )
          .then(response => response.data)
          .then(weathers => {
            commit("set", weathers);
          })
          .catch(errors => {
            // console.error(errors);
              store.state.errorMsg = errors
            commit("set", {});
          });
    },
    loadCurrent: async ({ commit }, loadCity) => {
      await axios
          .get(
              `https://api.openweathermap.org/data/2.5/weather/?q=${
                  loadCity
              }&units=metric&APPID=2bc6fce6dcdf72d3f00bbdf18dcf3ad3`
          )
          .then(response => response.data)
          .then(currWeather => {
            commit("setCurr", currWeather);
            store.state.errorMsg = ''
          })
          .catch(errors => {
            // console.error(errors);
              store.state.errorMsg = errors
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
