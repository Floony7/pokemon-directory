import { fetchPokemonByName } from "@/lib/api-requests";

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const pokemonDetails = await fetchPokemonByName(name);

  return (
    <main className="min-h-screen p-6 md:p-24 text-white">
      <h1 className="text-5xl text-bold">{pokemonDetails.weight}</h1>
    </main>
  );
}
