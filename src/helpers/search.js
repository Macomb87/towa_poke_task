export function searchFilter(pokemons, search){
    return pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })
}
