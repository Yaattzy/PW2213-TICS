<template>
  <div class="m-4">
    <router-link to="/objeto">Regresar</router-link>
    <h1>{{pelicula.title}}</h1>
    <h3>{{pelicula.director}}</h3>
    <img :src="pelicula.movie_banner" alt="" width="500">
    <br><br>
    <p>{{pelicula.description}}</p>
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
  created(){
    this.detallePelicula();
  }
};
</script>

<style></style>
