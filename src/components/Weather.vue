<template>
  <div class="item">
    <img :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'">
    <p>{{ date }}</p>
    <p>min:
      <br>
      {{ item.temp.min }} °C
    </p>
    <p>max:
      <br>
      {{ item.temp.max }} °C
    </p>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    item: Object
  },
  computed: {
    date: function() {
      return new Date(this.item.dt * 1000).toLocaleDateString("hu-HU");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  width: 20%;
}
</style>
