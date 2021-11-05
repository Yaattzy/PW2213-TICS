<template>
  <div>
    <h1>Todos</h1>

    <div v-for="todo in todos" :key="todo.id" class="alert alert-warning" role="alert">
     <h6>{{todo.title}}</h6>
     <span>{{todo.completed ? "Completo" : "Sin completar"}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// 77!!
export default {
  name: "Todos",
  methods: {
    ...mapActions(["getTodos"]),
  },
  computed: {
    ...mapState(["todos"]),
  },
  created() {
    this.getTodos();
  },
};
</script>

<style></style>
