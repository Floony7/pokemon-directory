import { PokemonCard } from "@/components/pokemon-card";
import { SearchForm } from "@/components/search-form";
import { fetchPokemonList } from "@/lib/api-requests";
import { Container, Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
  const pokemonList = await fetchPokemonList();
  console.log(pokemonList);

  return (
    <main className="min-h-screen p-6 md:p-24">
      <div>
        <header className="mb-6 flex ms-5 justify-center 2xl:justify-start">
          <div className="w-full flex flex-col justify-center 2xl:flex-row 2xl:justify-between items-center">
            <div>
              <div
                style={{ transform: "rotate(15deg)" }}
                className="text-3xl text-yellow-400 font-bold bg-amber-950 w-fit h-fit p-2 rounded-full"
              >
                The
              </div>
              <h1 className="text-4xl font-bold xl:text-6xl text-white m-0 p-0">
                Pokemon White Pages
              </h1>
            </div>
            <SearchForm />
          </div>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pokemonList !== undefined
            ? pokemonList?.map((p) => <PokemonCard key={p.name} pokemon={p} />)
            : null}
        </section>
      </div>
    </main>
  );
}
