import { capitalise } from "@/lib/utils";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Pokemon } from "pokeapi-types";
import { PokemonImage } from "./pokemon-image";

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Card className="rounded w-full shadow-lg bg-amber-700 mb-2 ms-1 duration-150 hover:bg-purple-700">
      <Link href={`/pokemon/${pokemon.name}`}>
        <header className="flex justify-between">
          <h2 className="text-blue-900 font-bold text-3xl">
            {capitalise(pokemon.name)}
          </h2>
          <Text className="text-3xl font-mono text-blue-900">
            {String(pokemon.order).padStart(4, "0")}
          </Text>
        </header>
        <section className="px-6 py-4">
          <div className="w-full flex flex-col justify-center items-center">
            <PokemonImage
              imageUrl={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name}
              width={300}
              height={300}
            />
          </div>
          <Flex justify="center" gap="2">
            {pokemon.types.map((t) => (
              <Badge
                className="w-6/12 uppercase flex justify-center"
                size="2"
                key={pokemon.id}
                variant="solid"
                color="plum"
              >
                <span>{t.type.name}</span>
              </Badge>
            ))}
          </Flex>
        </section>
      </Link>
    </Card>
  );
};
