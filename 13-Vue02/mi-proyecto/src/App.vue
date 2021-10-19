<template>
  <div id="app" class="m-4">
    <img alt="Vue logo" src="./assets/logo.png" width="30">
    <Tarjeta 
      v-for="f in listaElementos"
      :key="f.id"
      :titulo="f.nombre" 
      :subtitulo="f.color" 
      :texto="f.descripcion"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Tarjeta from './components/Tarjeta.vue'

export default {
  name: 'App',
  components: {
    Tarjeta
  },
  data() {
    return {
      listaElementos: [
        {
          id: 1,
          nombre: "Fresa",
          color: "Rojo",
          descripcion: "Fruta que le gusta a mucha gente",
          cantidad: 10
        },
        {
          id: 2,
          nombre: "Manzana",
          color: "Verde",
          descripcion: "Esta es mi otra fruta",
          cantidad: 8
        },
        {
          id: 3,
          nombre: "Uva",
          color: "Lila",
          descripcion: "Mi otra fruta de nuevo",
          cantidad: 4
        }
      ]
    }
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
