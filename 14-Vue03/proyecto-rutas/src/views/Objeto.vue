<template>
  <div class="m-4">
    <h1>Mis Películas</h1>
    <!-- <button class="btn btn-success mb-3" @click="consumirPeliculasAsync">
      Buscar
    </button> -->
    <div class="flex">
      <Card
        v-for="p in peliculas"
        :key="p.id"
        :id="p.id"
        :titulo="p.title"
        :imagen="p.image"
        :descripcion="p.description"
        :estreno="p.release_date"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Objeto",
  components: {
    Card,
  },
  data() {
    return {
      peliculas: [],
    };
  },
  methods: {
    consumirPeliculaFetch() {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
          console.log("fetch", data);
        })
        .catch((error) => console.log(error));
    },

    async consumirPeliculasAsync() {
      try {
        const res = await fetch("https://ghibliapi.herokuapp.com/films");

        const data = await res.json();
        console.log("async", data);
        this.peliculas = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirPeliculasAsync();
  }
};
</script>

<style>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
