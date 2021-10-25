<template>
  <div class="tarjeta">
    <router-link :to="`/objeto/detalle/${id}`" class="router">
      <div class="card" style="width: 300px;">
        <!-- <img :src="imagen" class="card-img-top" :alt="titulo" /> -->
        <div class="card-body">
          <h5 class="card-title">{{ titulo }}</h5>
          <p class="card-text">
            {{ descripcion }}
          </p>
          <p>{{ estreno }}</p>
        </div>
      </div>
    </router-link>
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
    estreno: [Number, String],
  },
};
</script>

<style>
.tarjeta {
  display: flex;
  justify-content: center;
}

.router {
  text-decoration: none;
}
</style>
