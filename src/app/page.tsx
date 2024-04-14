import Header from "@/components/header";
import { PokemonGridList } from "@/components/pokemon-grid-list";
import { fetchPokemonList } from "@/lib/api-requests";

export default async function Home() {
  const pokemonList = await fetchPokemonList();
  console.log(pokemonList);

  return (
    <main className="min-h-screen p-6 md:p-24">
      <div>
        <Header />
        <PokemonGridList fetchData={pokemonList} />
      </div>
    </main>
  );
}
