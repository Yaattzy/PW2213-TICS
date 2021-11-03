<template>
  <button @click="accionBoton({estado: estado, numero: 4})">{{textoBoton}}</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'BotonAccion',
    props: {
        estado: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        ...mapActions(["accionBoton"])
    },
    computed: {
        textoBoton() {
            return this.estado ? "Aumentar" : "Disminuir";
        }
    }
}
</script>

<style>

</style>