<template>
  <div class="home">
   <h4>{{ $store.state.total }}</h4>
   <h3 :style="colorTotal">{{total}}</h3>
   <p>{{mensaje}}</p>
   <button @click="SET_TOTAL_AUM()">Aumentar con mutación</button>
   <br><br>
   <button @click="accionAumentar()">Aumentar con acción</button>
   <br><br>
   <BotonDisminuir :cantidad="5"/>
   <br><br>
   <BotonAccion :estado="true" />
   <br><br>
   <BotonAccion :estado="false" />
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import BotonDisminuir from '../components/BotonDisminuir.vue';
import BotonAccion from '../components/BotonAccion.vue';

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonAccion
  },
  data() {
    return {
      info: null
    }
  },
  methods:{
    ...mapMutations(["SET_TOTAL_AUM"]),
    ...mapActions(["accionAumentar"])
  },
  computed: {
    ...mapState(["total", "mensaje"]),
    colorTotal() {
      return this.total >= 100 ? {'color': 'green'} : {'color': 'red'};
    }
  }
}
</script>
