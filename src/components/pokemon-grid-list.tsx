"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PokemonCard } from "./pokemon-card";
import { SearchInput } from "./search-input";
/*
1. Pass in a fetchData prop
2. Search and other server requests return the fetchData and we pass that in here as rthe fetchData prop. The list updates accordingly
3. This list renders the relevant Pokemon card components
4. Include state for rendering only a set of the results or all
5. SortBy state
6. ASC and DESC
*/
// Todo: Type the fetchData prop

type FetchData = any;
export const PokemonGridList = ({ fetchData }: FetchData) => {
  const [pokemonData, setPokemonData] = useState(fetchData);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query
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

  console.log(searchQuery, JSON.stringify(searchParams));

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
