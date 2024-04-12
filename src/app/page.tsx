import { PokemonCard } from "@/components/pokemon-card";
import { SearchForm } from "@/components/search-control";
import { fetchPokemonList } from "@/lib/api";
import { Container, Flex } from "@radix-ui/themes";

export default async function Home() {
  const pokemonList = await fetchPokemonList();
  console.log(pokemonList);

  return (
    <main className="min-h-screen p-6 md:p-24">
      <div>
        <header className="mb-6 flex ms-5 justify-center xl:justify-start">
          <div className="w-full flex md:w-7/12 flex-col justify-center 2xl:flex-row 2xl:justify-between items-center">
            <h1 className="text-4xl xl:text-7xl font-bold text-white">
              Pokemon
            </h1>
            <SearchForm />
          </div>
        </header>
        <section className="w-full flex flex-row flex-wrap justify-evenly">
          {pokemonList !== undefined
            ? pokemonList?.map((p) => <PokemonCard key={p.name} pokemon={p} />)
            : null}
        </section>
      </div>
    </main>
  );
}
