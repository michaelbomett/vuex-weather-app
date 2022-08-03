<template>
  <div id="app">
    <div class="dark:text-white ">
      <h2 class="text-3xl">Weather App </h2>
      <!--            <p>Click on a city to get the current weather</p>-->
    </div>
    <CityForm/>
    <WeathersView/>
  </div>
  <div class="date italic dark:text-white">
    <h1>Weather App by Michael Bomett</h1>
    <br>
  </div>
  <footer> Copyright 2022</footer>
</template>

<script>
import WeathersView from "./components/WeathersView";
import CityForm from "./components/CityForm";

export default {
  name: "App",
  components: {
    WeathersView,
    CityForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
