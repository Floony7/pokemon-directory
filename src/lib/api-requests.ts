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
        const res = await fetch(`${BASE_PATH}/pokemon?limit=151&offfset=0`);
        const data: PokemonList = await res.json();
        return data.results;
    } catch (err) {
        console.log(err);
    }
}

// get individual Pokemon
export async function fetchPokemonByName(name: string) {
    const res =  await fetch(`${BASE_PATH}/pokemon/${name}`);
    const data = await res.json();
    return data;
}