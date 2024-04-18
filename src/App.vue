<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Birthday />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Birthday from './main/Birthday.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Birthday
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
