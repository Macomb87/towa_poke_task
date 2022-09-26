<template>
  <div>
    <v-card
        class="mx-auto my-12"
        max-width="374">
      <v-img
          :src=" pokemonImage ?? 'https://dummyimage.com/374x374/ffffff/eff0f7.png&text=??'"
      ></v-img>
      <v-card-title>
        {{ checkbox }}
        <v-checkbox
            :label="pokemon.name "
            v-model="checkbox"
            :disabled="!allowSelect && !checkbox"
            @click="togglePokemon(pokemon)"
        ></v-checkbox>
      </v-card-title>
      <v-card-text>
        <v-row
            align="center"
            class="mx-0">
        </v-row>
        <div class="my-4 text-subtitle-1">
          <ul>
            <li v-for="stat in pokemon.stats">
              {{ stat.stat?.name }}: {{ stat.base_stat }}
            </li>
          </ul>
        </div>
        <div></div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "pokeCard",
  props: ["link", "gameView"],
  computed: {
    ...mapGetters(['selectedPokemons']),
    allowSelect() {
      return this.selectedPokemons.length < 8;
    }
  },
  data: () => ({
    selection: 1,
    pokemon: {},
    checkbox: false,
    pokemonImage: undefined,
    pokemonName: undefined,
  }),
  async mounted() {
    const result = await axios.get(this.link);
    this.pokemon = result.data;
    this.pokemonImage = this.pokemon.sprites?.front_default
    this.checkbox = this.checkIfItemSelected();
  },
  methods: {
    ...mapActions(['addPokemon', 'removePokemon']),
    async togglePokemon() {
      if (this.checkIfItemSelected()) {
        this.removePokemon(this.pokemon.id)
      } else {
        this.addPokemon(this.pokemon)
      }
    },
    checkIfItemSelected() {
      return this.selectedPokemons.some(selectedPokemon => {
        return selectedPokemon.id === this.pokemon.id
      })
    }
  },
}
</script>

<style scoped>

</style>
