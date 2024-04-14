import { capitalise } from "@/lib/utils";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "pokeapi-types";
import { PokemonImage } from "./pokemon-image";

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Card className="rounded w-full shadow-lg bg-amber-700 mb-2 ms-1 duration-150 hover:bg-purple-700">
      <Link href={`/pokemon/${pokemon.name}`}>
        <header className="flex justify-between">
          <Heading>{capitalise(pokemon.name)}</Heading>
          <Text className="text-2xl font-bold">{pokemon.order}</Text>
        </header>
        <section className="px-6 py-4">
          <div className="w-full flex flex-col justify-center items-center">
            <PokemonImage
              imageUrl={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name}
              width={300}
              height={300}
            />
            {/* <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width="300"
              height="300"
              priority
            /> */}
          </div>
          <Flex gap="2">
            <Badge variant="solid" color="indigo">
              New
            </Badge>
            <Badge variant="solid" color="indigo">
              New
            </Badge>
          </Flex>
        </section>
      </Link>
    </Card>
  );
};
