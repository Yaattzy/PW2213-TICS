<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="guardar">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          v-model.trim="todoE.nombre"
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Ingresar nombre"
        />
      </div>
      <hr />
      <div>Tipo</div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todoE.tipo"
          type="checkbox"
          value="Hogar"
          id="tipo1"
        />
        <label class="form-check-label" for="tipo1"> Hogar </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todoE.tipo"
          type="checkbox"
          value="Trabajo"
          id="tipo2"
        />
        <label class="form-check-label" for="tipo2"> Trabajo </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todoE.tipo"
          type="checkbox"
          value="Escuela"
          id="tipo3"
        />
        <label class="form-check-label" for="tipo3"> Escuela </label>
      </div>
      <hr />
      <div>Prioridad</div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todoE.prioridad"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="Baja"
        />
        <label class="form-check-label" for="inlineRadio1">Baja</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todoE.prioridad"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Media"
        />
        <label class="form-check-label" for="inlineRadio2">Media</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          v-model="todoE.prioridad"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="Alta"
        />
        <label class="form-check-label" for="inlineRadio3">Alta</label>
      </div>
      <hr />
      <div class="mb-3">
        <label for="horas" class="form-label">Horas requeridas</label>
        <input
          v-model.number="todoE.horas"
          type="number"
          class="form-control"
          id="horas"
          placeholder="Ingresar horas requeridas"
        />
      </div>
      <button class="btn btn-success" type="submit" :disabled="estadoBoton">
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Vue from 'vue'

export default {
  name: "Editar",
  data() {
    return {
      todoE: {
        id: "",
        nombre: "",
        tipo: [],
        prioridad: "",
        horas: 0,
      },
    };
  },
  methods: {
    ...mapActions(["setTodo", "updateTodo"]),
    guardar() {
      this.updateTodo(this.todoE);
      this.$router.push({ name: 'Home' });
    }
  },
  computed: {
      ...mapState(['todo']),
    estadoBoton() {
      return this.todoE.nombre === "" ? true : false;
    },
  },
  created(){
      this.setTodo(this.$route.params.id);
  },
  beforeMount() {
      Vue.set(this, 'todoE', this.todo);
  }
};
</script>

<style></style>
