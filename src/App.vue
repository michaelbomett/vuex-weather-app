<template>
  <nav>

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="dark:text-white ">
    <h2 class="text-3xl">Weather App </h2>
    <!--            <p>Click on a city to get the current weather</p>-->
  </div>

  <router-view/>

  <div class="date italic dark:text-white">
    <h1>Weather App by Michael Bomett</h1>
    <br>
  </div>
  <footer> Copyright 2022</footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

</script>