<template>
  <div class="home">
    <h1>Todos</h1>
    <router-link to="/agregar" class="btn btn-primary">Agregar</router-link>
    <TablaTodos />
  </div>
</template>

<script>
import TablaTodos from '../components/TablaTodos.vue'
export default {
  name: "Home",
  components: {TablaTodos}
};
</script>
