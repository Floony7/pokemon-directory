import { fetchPokemonByName } from "@/lib/api-requests";
import { Box } from "@radix-ui/themes";
import { Suspense } from "react";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemonDetails = await fetchPokemonByName(name);

  return (
    <main className="min-h-screen p-6 md:p-24 text-white flex justify-center items-center">
      <Box as="div" display="block">
        <Suspense fallback={<div>Loading...</div>}>
          <h1 className="text-5xl text-bold">{pokemonDetails.weight}</h1>
        </Suspense>
      </Box>
    </main>
  );
}
