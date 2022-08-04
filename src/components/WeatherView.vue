<template>
  <div class="item">
    <img alt="image" class="centre" :src="'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png'">
    <p class="font-semibold">{{ date }}</p>
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
  name: "WeatherView",
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
  border: solid;
}
</style>
