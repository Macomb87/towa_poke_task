<template>
  <v-card
      class="mx-auto my-12"
      max-width="374">
    <v-img
        :src=" pokemonImage ?? 'https://dummyimage.com/374x374/ffffff/eff0f7.png&text=??'"
    ></v-img>
    <v-card-title>
      {{ pokemon.name }}<br>
       index : {{pokemon.letterIndex}}
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
          <li>
            height: {{pokemon.height}}
          </li>
          <li>
            weight : {{pokemon.weight }}
          </li>
        </ul>
      </div>
      <div></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GameCard",
  props: ["pokemon"],
  data(){
    return {
      pokemonImage:''
    }
  },
  mounted() {
    this.pokemonImage = this.pokemon.sprites?.front_default
  }
}
</script>

<style scoped>

</style>
