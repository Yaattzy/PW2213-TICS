<template>
  <div class="card" style="width: 18rem;">
    <img :src="imagen" class="card-img-top" :alt="titulo" />
    <div class="card-body">
      <h5 class="card-title">{{titulo}}</h5>
      <p class="card-text">
        {{descripcion}}
      </p>
      <p>{{estreno}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: [Number, String],
    titulo: String,
    imagen: String,
    descripcion: String,
    estreno: [Number, String]
  },
};
</script>

<style></style>
