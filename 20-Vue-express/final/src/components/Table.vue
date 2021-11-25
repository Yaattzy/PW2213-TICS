<template>
  <div>
    <b-table striped :items="items" :busy="busy" :fields="fields">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Cargando...</strong>
        </div>
      </template>

       <template #cell(actions)="data">
         <slot name="actions" :item="data"></slot>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    items: Array,
    fields: {
      type: Array,
      default: [],
    },
    busy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
};
</script>

<style></style>
