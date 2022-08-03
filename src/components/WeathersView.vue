<template>
  <div class="items">
    <div v-if="weathers.list" class="row">
      <WeatherView v-for="(item, index) in weathers.list" :key="index" :item="item"/>
    </div>
    <p v-else>Oh 😢</p>
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
  created() {
    console.log(this.$store);
    this.$store.dispatch("load");
  }
};
</script>

<style scoped>
.row {
  display: flex;
}
</style>