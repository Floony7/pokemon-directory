"use client";

import { Suspense } from "react";
import { PokemonCard } from "./pokemon-card";

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
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        {fetchData !== undefined
          ? fetchData?.map((p) => <PokemonCard key={p.name} pokemon={p} />)
          : null}
      </Suspense>
    </section>
  );
};
