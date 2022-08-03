<template>
  <div id="app">
    <CityForm/>
    <WeathersView/>
  </div>
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
