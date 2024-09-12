<template>
    <div>
      <h3>{{ contador }}</h3>
      <button @click="botonIncrementar">Incrementar contador</button>
      <button @click="botonDecrementar">Decrementar contador</button>
      <button @click="botonObtenerFrutas">Contar frutas</button>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['contador', 'frutas']),
      cantidadDeFrutas() {
        return this.$store.getters.obtenerFrutas;
      },
    },
    methods: {

    botonIncrementar() {
        this.$store.dispatch('accionIncrementar')
    },
    botonDecrementar() {
        this.$store.dispatch('accionDecrementar')
    },
    botonObtenerFrutas() {
        alert(`Número de frutas: ${this.cantidadDeFrutas}`);
      }
    }
  }
  </script>
  