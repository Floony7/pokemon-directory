import { PokemonResultType } from "@/lib/api";
import { capitalise } from "@/lib/utils";
import { Card, Heading, Text } from "@radix-ui/themes";
// import Image from "next/image";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonResultType }) => {
  return (
    <Card className="rounded w-full md:w-80 shadow-lg bg-amber-700/50 mb-2 ms-1 ">
      <div className="px-6 py-4">
        <Heading>{capitalise(pokemon.name)}</Heading>
        <Text>{pokemon.url}</Text>
      </div>
    </Card>
  );
};
