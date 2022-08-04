import { createStore } from "vuex";
import axios from "axios";
// import createCache from 'vuex-cache';

const store = createStore({

    // plugins: createCache(),
    state: {
        city: "",
        weathers: {},
        currWeather: {},
        cityList: ["Nairobi", "Mombasa", "Nakuru", "Kisumu", "Eldoret"],
        errorMsg: "",
        cacheTime: 36000
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
                  loadCity.toLowerCase()
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
                  loadCity.toLowerCase()
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
    },
      // fetchWithCache: async (cityName, time) => {
      //     const now = new Date().getTime()
      //     if (!cache[cityName] || cache[cityName].cacheTimer < now ) {
      //         cache[cityName] = await this.$store.dispatch('loadCurrent(cityName)')
      //         cache[cityName].cacheTimer = getCacheTimer(time)
      //     }
      //     return cache[cityName]
      // }

  },
  getters: {
    city: state => state.city,
    weathers: state => state.weathers
  }

})

// const cache = {}
//
// let cacheTimer = 0
// const getCacheTimer = time => {
//     const now = new Date().getTime()
//     if(cacheTimer < now + time) {
//         cacheTimer = now + time
//     }
//     return cacheTimer
// }


export default store
