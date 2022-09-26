<template>
  <div>
    <v-btn
        color="primary"
        elevation="8"
        large
        x-large
        @click="startGame"
    >
      Start Game

    </v-btn>

    <v-row no-gutters>
      <v-col
          v-for="pokemon in sortedPokemons"
          :key="pokemon.name"
          cols="12"
          sm="3">
        <game-card :pokemon="pokemon"></game-card>
      </v-col>
    </v-row>

  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import PokeCard from "@/components/pokeCard";
import GameCard from "@/components/GameCard";

export default {
  name: "GameView",
  components: {
    GameCard,
    PokeCard
  },
  computed: {
    ...mapGetters(['selectedPokemons']),
    sortedPokemons() {
      const result = this.selectedPokemons.sort((a, b) => {
        return a.letterIndex - b.letterIndex;
      });

      this.setSortedPokemons(result);
      return this.selectedPokemons;
    },
    smallestPokemon() {
      return this.selectedPokemons.sort((a, b) => {
        return a.height - b.height;
      });
    }
  },
  data() {
    return {
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    }
  },
  mounted() {
    this.sumLetterIndexes();
  },
  methods: {
    ...mapActions(['removePokemon', 'setSortedPokemons']),
    startGame() {
      this.removePokemon(this.smallestPokemon[0].id)
    },
    sumLetterIndexes() {
      this.selectedPokemons.forEach(pokemon => {
        const letters = pokemon.name.split('');
        pokemon.letterIndex = 0;
        for (let i = 0; i < letters.length; i++) {
          pokemon.letterIndex += this.alphabet.indexOf(letters[i]);
        }
      })

    }
  }
}
</script>

<style scoped>

</style>
