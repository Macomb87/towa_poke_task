<template>


  <v-row no-gutters>
    <v-col
        v-for="pokemon in selectedPokemons"
        :key="pokemon.name"
        cols="12"
        sm="3">
       <ul>
         <li>{{pokemon.name}}</li>
       </ul>
    </v-col>
  </v-row>

</template>

<script>
import {mapGetters} from "vuex";
import PokeCard from "@/components/pokeCard";

export default {
  name: "GameView",
  components:{
    PokeCard
  },
  computed:{
    ...mapGetters(['selectedPokemons'])

  }
}
</script>

<style scoped>

</style>
