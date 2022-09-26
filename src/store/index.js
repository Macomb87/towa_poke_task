import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemons: [],
        selectedPokemons: [],
    },
    getters: {
        selectedPokemons: state => state.selectedPokemons,
        pokemons: state => state.pokemons
    },
    mutations: {
        ADD_POKEMONS: (state, pokemons) => state.pokemons = pokemons,
        ADD_POKEMON: (state, pokemon) => state.selectedPokemons.push(pokemon),
        REMOVE_POKEMON: (state, pokemonId) => {
            state.selectedPokemons.forEach((selected, index) => {
                if (pokemonId === selected.id) {
                    state.selectedPokemons.splice(index, 1)
                }
            })
        }
    },
    actions: {
        setPokemons({commit}, pokemons) {
            commit("ADD_POKEMONS", pokemons);
        },
        addPokemon({commit}, pokemon) {
            commit("ADD_POKEMON", pokemon);
        },
        removePokemon({commit}, pokemonId) {
            commit("REMOVE_POKEMON", pokemonId)
        }
    },
    modules: {}
})
