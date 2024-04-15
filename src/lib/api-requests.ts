import { Pokemon } from './index'

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
export async function fetchPokemonList() {
    try {
        let allPokemonData: Pokemon[] = [];
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
export async function fetchPokemonByName(name: string) {
    const res =  await fetch(`${BASE_PATH}/pokemon/${name}`);
    const data: Pokemon = await res.json();
    return data;
}

export async function fetchBySearchTerm(term: string) {
    try {
        const res = await fetch(`${BASE_PATH}/pokemon?limit=151&offset=0`);
        const data: PokemonList = await res.json();
        let allPokemonData: Pokemon[] = [];
        const results = data.results;
        for await (let result of results) {
            const pokemonRes = await fetch(result.url);
            const pokemonData: Pokemon = await pokemonRes.json();
            allPokemonData.push(pokemonData);
        }
        if (!term) {
            return allPokemonData;
        }
        return allPokemonData.filter(d => d.name.includes(term.toLowerCase()));
    } catch (err) {
        throw new Error("Failed to fetch Pokemon")
    }
}