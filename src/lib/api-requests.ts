const BASE_PATH = 'https://pokeapi.co/api/v2'

export type PokemonResultType = {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number;
    next: string;
    previous: null;
    results: PokemonResultType[];
}

// Fetch first 151
export async function fetchPokemonList() {
    try {
        let allPokemonData = [];
        const res = await fetch(`${BASE_PATH}/pokemon?limit=151&offset=0`);
        const data: PokemonList = await res.json();
        const results = data.results;
        for await (let result of results) {
            const pokemonRes = await fetch(result.url);
            const pokemonData = await pokemonRes.json();
            allPokemonData.push(pokemonData);
        }
        return allPokemonData;
    } catch (err) {
        console.log(err); // Todo: Throw error and create error.tsx file
    }
}

// get individual Pokemon
export async function fetchPokemonByName(name: string) {
    const res =  await fetch(`${BASE_PATH}/pokemon/${name}`);
    const data = await res.json();
    return data;
}

