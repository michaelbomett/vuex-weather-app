<template>
  <div class="items dark:text-white">
    <div class="font-extrabold">
      <h1>Weather Forecast</h1>
    </div>
    <div v-if="weathers.list" class="row ">

      <WeatherView v-for="(item, index) in weathers.list" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import WeatherView from "./WeatherView";

export default {
  name: "WeathersView",
  components: {
    WeatherView
  },
  computed: {
    ...mapGetters(["weathers"]),
    ...mapState(["weathers"])
  },
  methods: mapActions(["load"]),
};
</script>

<style scoped>
.row {
  display: flex;
}
</style>