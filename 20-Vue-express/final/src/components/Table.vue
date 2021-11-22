<template>
  <div>
       <b-table striped :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
    name: 'Tabla',
    props: {
        items: Array,
        fields: {
            type: Array,
            default: []
        }
    },
    data() {
      return {
      }
    }
}
</script>

<style>

</style>