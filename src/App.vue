<template>
  <div id="app">
    <CityForm/>
    <Weathers/>
  </div>
</template>

<script>
import Weathers from "./components/Weathers";
import CityForm from "./components/CityForm";

export default {
  name: "App",
  components: {
    Weathers,
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
