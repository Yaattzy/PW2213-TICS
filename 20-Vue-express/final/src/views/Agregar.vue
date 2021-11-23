<template>
  <div>
    <h1>Agregar</h1>
    <b-form @submit.prevent="guardarPersona">
      <Input
        v-model="persona.nombre"
        class="mb-3"
        titulo="Nombre"
        id="nombre"
        :error="true"
        placeholder="Ingrese nombre de la persona"
        :maxlength="50"
      />
      <Input
        v-model="persona.direccion"
        class="mb-3"
        titulo="Dirección"
        id="direccion"
        placeholder="Ingrese una dirección"
        :maxlength="100"
      />
      <Input
        v-model="persona.telefono"
        class="mb-3"
        titulo="Teléfono"
        id="telefono"
        placeholder="Ingrese un teléfono"
        :maxlength="10"
      />
      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
export default {
  name: "Agregar",
  components: {
    Input,
  },
  data() {
    return {
      persona: {
        nombre: "",
        direccion: "",
        telefono: "",
      },
    };
  }, 
  methods: {
    guardarPersona() {
      alert("Guardar");
    }
  }
};
</script>

<style></style>
