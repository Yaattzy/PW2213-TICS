<template>
  <div class="home">
    <h1>Mis Posts</h1>
    <div v-for="p in posts" :key="p.id" class="alert alert-secondary mb-2" role="alert">
      <h4>{{p.title}}</h4>
      <router-link :to="`/post/${p.id}`">Ver más...</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["getPosts"]),
  },
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    this.getPosts();
  },
};
</script>
