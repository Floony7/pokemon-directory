"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PokemonCard } from "./pokemon-card";

type FetchData = any;
export const PokemonGridList = ({ fetchData }: FetchData) => {
  const [pokemonData, setPokemonData] = useState(fetchData);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    const handleSearch = () => {
      const result = fetchData.filter((p) => {
        if (searchQuery) {
          return p.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
          return true;
        }
      });

      setPokemonData(result);
    };
    handleSearch();
  }, [searchQuery, fetchData]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        {fetchData !== undefined
          ? pokemonData?.map((p) => <PokemonCard key={p.name} pokemon={p} />)
          : null}
      </Suspense>
    </section>
  );
};
