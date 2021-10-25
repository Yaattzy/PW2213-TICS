<template>
  <div class="m-4">
    <h1>Detalle Película</h1>
  </div>
</template>

<script>
export default {
  name: "Detalle",
  data() {
    return {
      pelicula: {},
    };
  },
  methods: {
    async detallePelicula() {
      try {
        const res = await fetch(
          `https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`
        );
        const data = await res.json();
        this.pelicula = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
