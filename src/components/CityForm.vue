<template>
  <form v-on:submit.prevent="$store.dispatch('load')">
    <label for="city">City:</label>
    <input
      type="text"
      :value="city"
      @input="updateCity"
      :style="weathers.list ? 'background:none' : 'background:red'"
    >
    <button type="submit" :disabled="!city">Search</button>
  </form>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "CityForm",
  computed: {
    ...mapGetters(["weathers"]),
    ...mapState(["city", "weathers"])
  },
  methods: {
    ...mapActions(["load"]),
    updateCity: function(e) {
      this.$store.commit("updateCity", e.target.value);
    }
  }
};
</script>
