<template>
  <div>
    <h1>Completos</h1>
    <div v-for="todo in doneTodos" :key="todo.id" class="alert alert-primary" role="alert">
     <h6>{{todo.title}}</h6>
     <span>{{todo.completed ? "Completo" : "Sin completar"}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "TodosCompletos",
  methods: {
    ...mapActions(["getTodos"]),
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["doneTodos"]),
    misTodosCompletos() {
        return this.todos.filter(t => t.completed);
    }
  },
  created() {
    this.getTodos();
  }
};
</script>

<style></style>
