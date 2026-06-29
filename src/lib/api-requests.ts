import { cache } from "react";
import { Pokemon } from "./index";

const BASE_PATH = "https://pokeapi.co/api/v2";
const FIRST_GENERATION_LIMIT = 151;
const HOME_PAGE_LIMIT = 20;

export type PokemonResultType = {
  name: string;
  url: string;
};
export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResultType[];
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

const fetchPokemonDetails = cache(async (url: string) => fetchJson<Pokemon>(url));

async function fetchPokemonResults(limit: number): Promise<PokemonResultType[]> {
  const data = await fetchJson<PokemonList>(
    `${BASE_PATH}/pokemon?limit=${limit}&offset=0`,
  );

  return data.results;
}

async function fetchPokemonFromResults(
  results: PokemonResultType[],
): Promise<Pokemon[]> {
  return Promise.all(results.map((result) => fetchPokemonDetails(result.url)));
}

export async function fetchPokemonList(): Promise<Pokemon[]> {
  const results = await fetchPokemonResults(HOME_PAGE_LIMIT);

  return fetchPokemonFromResults(results);
}

export async function fetchPokemonByName(name: string): Promise<Pokemon> {
  return fetchJson<Pokemon>(`${BASE_PATH}/pokemon/${name.toLowerCase()}`);
}

export async function fetchBySearchTerm(term: string): Promise<Pokemon[]> {
  const normalisedTerm = term.trim().toLowerCase();
  const results = await fetchPokemonResults(FIRST_GENERATION_LIMIT);
  const filteredResults = normalisedTerm
    ? results.filter((result) => result.name.includes(normalisedTerm))
    : results.slice(0, HOME_PAGE_LIMIT);

  return fetchPokemonFromResults(filteredResults);
}
