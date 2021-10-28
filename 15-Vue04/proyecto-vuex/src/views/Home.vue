<template>
  <div class="home">
   <h4>{{ $store.state.total }}</h4>
   <h3 :style="colorTotal">{{total}}</h3>
   <p>{{mensaje}}</p>
   <button @click="SET_TOTAL()">Aumentar con mutación</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      info: null
    }
  },
  methods:{
    ...mapMutations(["SET_TOTAL"])
  },
  computed: {
    ...mapState(["total", "mensaje"]),
    colorTotal() {
      return this.total >= 100 ? {'color': 'green'} : {'color': 'red'};
    }
  }
}
</script>
