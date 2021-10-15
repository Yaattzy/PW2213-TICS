// Instancia de Vue
const app = Vue.createApp({
    data() {
        return {
            titulo: "Mi título de página con vue",
            nuevaFruta: "",
            frutas: ['Manzana', 'Pera'],
            frutas2: [
                {
                    nombre: 'Manzana',
                    cantidad: 4
                },
                {
                    nombre: 'Pera',
                    cantidad: 10
                }
            ]
        }
    },
    methods: {
        agregarFruta() {
            this.frutas.push(this.nuevaFruta);
            this.frutas2.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
            this.nuevaFruta = "";
        }
    },
    computed: {
        sumarFrutas() {
            return this.frutas2.reduce((suma, {cantidad}) => suma + cantidad, 0);
        }
    }
});