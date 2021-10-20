<template>
  <div id="nav" :style="`background: ${color}`">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/objeto">Objeto</router-link>
    </div>
    <div class="color">
      <label>Cambiar color:</label>
      <input v-model="color" type="color" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      color: "#ccc",
    };
  },
  props: {
    colors: String,
  },
};
</script>

<style>
#nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #FFF;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.color {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
