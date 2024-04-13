import { PokemonResultType } from "@/lib/api-requests";
import { capitalise } from "@/lib/utils";
import { Card, Heading, Text } from "@radix-ui/themes";
// import Image from "next/image";

export const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  return (
    <Card className="rounded w-full shadow-lg bg-amber-700/50 mb-2 ms-1">
      <div className="px-6 py-4">
        <Heading>{capitalise(pokemon.name)}</Heading>
        <Text>{pokemon.height}</Text>
      </div>
    </Card>
  );
};
