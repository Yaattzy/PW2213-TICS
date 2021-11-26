<template>
  <div>
    <h1>Editar</h1>
    <b-form @submit.prevent="guardarPersona">
      <Input
        class="mb-3"
        titulo="Clave"
        id="clave"
        :value="persona.id"
        disabled
      />
      <Input
        v-model="persona.nombre"
        class="mb-3"
        titulo="Nombre"
        id="nombre"
        :error="erroresValidacion && !validacionNombre"
        mensajeError="El nombre es obligatorio"
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
import Vue from 'vue'
import { mapActions } from "vuex";
import Input from "../components/Input.vue";
export default {
  name: "Editar",
  components: {
    Input,
  },
  data() {
    return {
      persona: {
        id: 0,
        nombre: "",
        direccion: "",
        telefono: "",
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionNombre() {
      return (
        this.persona.nombre !== undefined && this.persona.nombre.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["obtenerPersona"]),
    guardarPersona() {
      if (this.validacionNombre) {
        this.erroresValidacion = false;
        /*this.crearPersona({
          params: this.persona,
          onComplete: (response) => {
            // Si todo sale bien
            this.$notify({
              title: response.data.mensaje,
              type: 'success'
            });
            this.$router.push({
              name: "Home",
            });
          },
          onError: (error) => {
            // Si hay error
            this.$notify({
              title: error.response.data.mensaje,
              type: 'error'
            });
          },
        }); */
      } else {
        this.erroresValidacion = true;
      }
    },
  },
  created() {
      // Llamar al obtenerPersona
      this.obtenerPersona({
          id: this.$route.params.id,
          onComplete: (response) => {
              // SETEAR EL VALOR DE LA RESPUESTA EN PERSONA (DATA)
              Vue.set(this, 'persona', response.data.data);
          }
      });
  }
};
</script>

<style></style>
