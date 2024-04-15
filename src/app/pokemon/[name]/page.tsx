import { PokemonImage } from "@/components/pokemon-image";
import { PokemonStat } from "@/lib";
import { PokemonPageSkeleton } from "@/components/pokemon-page-skeleton";
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
      <div className="p-2 xl:p-6 md:p-24 text-white bg-slate-200/20">
        <div className="flex justify-center">
          <Box
            as="div"
            display="block"
            className="rounded-lg w-full p-1 xl:p-5 pb-8"
          >
            <Suspense fallback={<PokemonPageSkeleton />}>
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
                    className="rounded-lg bg-amber-600/70 text-slate-100 p-5"
                  >
                    <section className="flex justify-evenly gap-4 text-lg xl:text-xl">
                      <div>
                        <span className="font-bold">Height:&nbsp;</span>
                        {pokemon.height / 10}m
                      </div>
                      <div>
                        {" "}
                        <span className="font-bold">Weight:&nbsp;</span>
                        {pokemon.weight}lb
                      </div>
                    </section>
                  </Box>
                  <Box
                    as="div"
                    display="block"
                    className="rounded-lg bg-indigo-900 mt-5 text-slate-100 p-5"
                  >
                    <h2 className="text-2xl font-bold">Stats</h2>
                    <div className="flex flex-col">
                      {pokemon.stats.map((s: PokemonStat) => {
                        return (
                          <div key={s.stat.name} className="flex items-center">
                            <h3 className="p-3 text-xl w-2/4">
                              {capitalise(s.stat.name)}
                            </h3>
                            <Progress
                              color="crimson"
                              variant="classic"
                              value={Math.min(100, s.base_stat)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Box>
                  <Box
                    as="div"
                    display="block"
                    className="rounded-lg bg-slate-800/70 mt-5 text-slate-100 p-5"
                  >
                    <h2 className="text-2xl font-bold">Abilities</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pokemon.abilities.map((ability) => (
                        <Badge
                          size="3"
                          color="mint"
                          variant="solid"
                          key={ability.ability.name}
                          className="uppercase me-2"
                        >
                          {ability.ability.name}
                        </Badge>
                      ))}
                    </div>
                  </Box>
                </aside>
              </section>
            </Suspense>
          </Box>
        </div>
      </div>
    </main>
  );
}
