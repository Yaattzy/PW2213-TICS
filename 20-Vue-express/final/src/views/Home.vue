<template>
  <div class="home">
    <div class="d-flex justify-content-between align-items-start">
      <h1>Personas</h1>
      <b-button to="/agregar" variant="outline-primary">Agregar</b-button>
    </div>
    <Table :items="personas" :fields="campos" :busy="loading" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Table from "../components/Table.vue";
export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      campos: [
        { key: "id", label: "Clave" },
        "nombre",
        {
          key: "direccion",
          label: "Dirección",
          formatter: (value) => {
            return value || "Sin información";
          },
        },
        {
          key: "telefono",
          label: "Teléfono",
          formatter: (value) => {
            return value || "--";
          },
        },
        {
          key: 'actions', label: 'Acciones'
        }
      ],
    };
  },
  computed: {
    ...mapState(["personas", "loading"]),
  },
  methods: {
    ...mapActions(["setPersonas"]),
  },
  mounted() {
    this.setPersonas();
  },
};
</script>
