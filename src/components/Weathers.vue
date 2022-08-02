<template>
  <div class="items">
    <div v-if="weathers.list" class="row">
      <Weather v-for="(item, index) in weathers.list" :key="index" :item="item"/>
    </div>
    <p v-else>Oh 😢</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Weather from "./Weather";

export default {
  name: "Weathers",
  components: {
    Weather
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