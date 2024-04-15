import GridList2 from "@/components/grid-list2";
import Header from "@/components/header";
import { PokemonGridList } from "@/components/pokemon-grid-list";
import { fetchPokemonList } from "@/lib/api-requests";

export default async function Home({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const pokemonList = await fetchPokemonList();

  return (
    <main className="min-h-screen">
      <div>
        <GridList2 query={searchParams?.q} />
      </div>
    </main>
  );
}
