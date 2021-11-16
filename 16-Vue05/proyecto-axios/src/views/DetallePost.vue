<template>
  <div>
    <router-link to="/">Regresar</router-link>
    <h1>Detalle</h1>
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "DetallePost",
  methods: {
    ...mapActions(["getPost"]),
  },
  computed: {
    ...mapState(["post"]),
  },
  created() {
    this.getPost({id: this.$route.params.idx})
  },
};
</script>

<style></style>
