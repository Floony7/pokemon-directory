import { PokemonCard } from "@/components/pokemon-card";
import { fetchPokemonList } from "@/lib/api";

export default async function Home() {
  const pokemonList = await fetchPokemonList();
  console.log(pokemonList);

  return (
    <main className="min-h-screen p-6 md:p-24">
      <header>
        <h1 className="text-7xl font-bold">Pokemon</h1>
      </header>
      <section className="w-full flex flex-row flex-wrap justify-evenly">
        {pokemonList !== undefined
          ? pokemonList?.map((p) => <PokemonCard key={p.name} pokemon={p} />)
          : null}
      </section>
    </main>
  );
}
