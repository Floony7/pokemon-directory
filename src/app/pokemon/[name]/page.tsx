import { PokemonImage } from "@/components/pokemon-image";
import { fetchPokemonByName } from "@/lib/api-requests";
import { capitalise } from "@/lib/utils";
import { Badge, Box, Progress } from "@radix-ui/themes";
import { Suspense } from "react";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemon = await fetchPokemonByName(name);

  return (
    <main className="min-h-screen p-3">
      <div className="p-6 md:p-24 text-slate-100 bg-slate-200/20">
        <div className="flex justify-center">
          <Box as="div" display="block" className="rounded-lg w-11/12 p-5 pb-8">
            <Suspense fallback={<div>Loading...</div>}>
              <header className="pb-6 pt-2 mb-2">
                <h1 className="text-4xl 2xl:text-5xl flex justify-center">
                  <span className="font-bold">{capitalise(pokemon.name)}</span>
                  &nbsp;&nbsp;
                  <span className="font-mono">
                    #{String(pokemon.order).padStart(4, "0")}
                  </span>
                </h1>
              </header>
              <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-12">
                <div className="bg-slate-300 rounded-full flex justify-center">
                  <PokemonImage
                    imageUrl={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    name={pokemon.name}
                    height={500}
                    width={500}
                  />
                </div>
                <aside>
                  <Box
                    as="div"
                    display="block"
                    className="rounded-lg bg-pink-500/70 text-slate-100 p-5"
                  >
                    <ul className="list-none ps-0 columns-1 2xl:columns-2 text-xl">
                      <li>
                        <span className="font-bold">Height:&nbsp;</span>
                        {pokemon.height}
                      </li>
                      <li>
                        {" "}
                        <span className="font-bold">Weight:&nbsp;</span>
                        {pokemon.weight}
                      </li>
                      <li>
                        {" "}
                        <span className="font-bold">Weight:&nbsp;</span>
                        {pokemon.weight}
                      </li>
                    </ul>
                  </Box>
                  <Box
                    as="div"
                    display="block"
                    className="rounded-lg bg-blue-700/80 mt-5 text-slate-100 p-5"
                  >
                    <h2 className="text-2xl font-bold">Stats</h2>
                    <div className="flex flex-col">
                      {pokemon.stats.map((s) => (
                        <div key={s.stat.name} className="flex items-center">
                          <h3 className="p-3 text-xl w-2/4">
                            {capitalise(s.stat.name)}
                          </h3>
                          <Progress
                            color="crimson"
                            variant="classic"
                            value={s.base_stat}
                          />
                        </div>
                      ))}
                    </div>
                  </Box>
                  <Box
                    as="div"
                    display="block"
                    className="rounded-lg bg-slate-800/70 mt-5 text-slate-100 p-5"
                  >
                    <h2 className="text-2xl font-bold">Abilities</h2>
                    {pokemon.abilities.map((ability) => (
                      <Badge color="crimson" key={ability.ability.name}>
                        {ability.ability.name}
                      </Badge>
                    ))}
                  </Box>
                  {/* <Box
                    as="div"
                    display="block"
                    className="rounded-lg bg-purple-300/20 mt-5 text-slate-100 p-5"
                  >
                    <h2 className="text-2xl font-bold">Abilities</h2>
                  </Box> */}
                </aside>
              </section>
            </Suspense>
          </Box>
        </div>
      </div>
    </main>
  );
}
