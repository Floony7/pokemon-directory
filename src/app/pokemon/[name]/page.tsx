import { PokemonImage } from "@/components/pokemon-image";
import { fetchPokemonByName } from "@/lib/api-requests";
import { Badge, Box } from "@radix-ui/themes";
import { Suspense } from "react";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemon = await fetchPokemonByName(name);

  return (
    <main className="min-h-screen p-6 md:p-24 text-white flex justify-center">
      <Box
        as="div"
        display="block"
        className="bg-slate-200/45 rounded-lg w-11/12 xl:w-9/12 p-5"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <h1 className="text-5xl text-bold">{pokemon.weight}</h1>
          <section className="grid grid-cols-2">
            <PokemonImage
              imageUrl={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name}
              height={500}
              width={500}
            />
            <aside>
              {pokemon.abilities.map((ability) => (
                <Badge key={pokemon.id}>{ability.ability.name}</Badge>
              ))}
            </aside>
          </section>
        </Suspense>
      </Box>
    </main>
  );
}
