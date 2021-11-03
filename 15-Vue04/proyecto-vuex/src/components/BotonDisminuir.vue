<template>
  <button @click="accionDisminuir(cantidad)">DISMINUIR</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'BotonDisminuir',
    props: {
        cantidad: {
            type: Number,
            default: 3
        }
    },
    methods: {
        ...mapActions(["accionDisminuir"])
    }

}
</script>

<style>

</style>