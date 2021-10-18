<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="titulo" descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci nemo rerum incidunt deleniti eveniet, quasi nam possimus eum dicta atque ipsa saepe laborum nulla. Eum perferendis vero architecto nulla fuga?"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      titulo: "Welcome to Your Vue App"
    }
  },
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
