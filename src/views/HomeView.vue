<template>
  <div>
    <div class="search-wrapper">
      <v-row no-gutters>
        <v-col
            cols="12"
            sm="12">
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12"
               sm="12">
          <v-btn
              :disabled="selectedPokemons.length < 8"
              color="primary"
              elevation="8"
              large
              x-large
              @click="startGame"
          >
            Start Game
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-row no-gutters>
      <v-col
          v-for="pokemon in filteredList"
          :key="pokemon.name"
          cols="12"
          sm="3">
        <poke-card :link="pokemon.url"></poke-card>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="pagination.length"
          :total-visible="pagination.totalVisible"
          @input="nextPage"
      ></v-pagination>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import PokeCard from "@/components/pokeCard";
import {mapActions, mapGetters} from "vuex";
import {paginate} from "@/helpers/paginate";
import {searchFilter} from "@/helpers/search";
export default {
  name: 'Home',
  components: {PokeCard},
  computed: {
    ...mapGetters(['pokemons', 'selectedPokemons']),
    filteredList() {
      const filteredList = searchFilter(this.pokemons,this.search);
      this.pagination.length = Math.ceil(filteredList.length / 10);
      return paginate(filteredList, 10, this.page)
    },
  },
  data() {
    return {
      apiUrl: 'https://pokeapi.co/api/v2/pokemon?limit=1560&offset=0',
      totalPokemons: 0,
      pagination: {
        totalVisible: 10,
        length: 0,
      },
      loading: false,
      search: '',
      page: 1,
      selected: [],
      headers: [
        {
          text: 'Image',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'URL', value: 'url'},
      ],
      result: [],
    }
  },
  async mounted() {
    this.loading = true;
    this.result = await axios.get(`${this.apiUrl}`);
    this.setPokemons(this.result.data.results)
  },
  methods: {
    ...mapActions(['setPokemons']),
    async nextPage(page) {
      this.page = page;
    },

    startGame() {
      this.$router.push('/game')
    }

  },

}
</script>
