import { PokemonResultType } from "@/lib/api-requests";
import { capitalise } from "@/lib/utils";
import { Card, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  return (
    <Card className="rounded w-full shadow-lg bg-amber-700 mb-2 ms-1 duration-150 hover:bg-purple-700">
      <Link href={`/${pokemon.name}`}>
        <header className="flex justify-between">
          <Heading>{capitalise(pokemon.name)}</Heading>
          <Text className="text-2xl font-bold">{pokemon.order}</Text>
        </header>
        <div className="px-6 py-4">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width="300"
              height="300"
            />
          </div>
        </div>
      </Link>
    </Card>
  );
};
