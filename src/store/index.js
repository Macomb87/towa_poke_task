import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemons: [],
        selectedPokemons: [],
    },
    getters: {
        selectedPokemons: state => state.selectedPokemons
    },
    mutations: {
        ADD_POKEMON: (state, pokemon) => state.selectedPokemons.push(pokemon),
        REMOVE_POKEMON: (state, pokemonId) => {
            state.selectedPokemons.forEach((selected, index) => {
                if (pokemonId === selected.id) {
                    state.selectedPokemons.splice(1, index)
                }
            })
        }
    },
    actions: {
        addPokemon({commit}, pokemon) {
            commit("ADD_POKEMON", pokemon);
        },
        removePokemon({commit}, pokemonId) {
            commit("REMOVE_POKEMON", pokemonId)
        }
    },
    modules: {}
})
