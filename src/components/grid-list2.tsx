import { PokemonCard } from "./pokemon-card";
import { fetchBySearchTerm } from "@/lib/api-requests";

export default async function GridList2({ query }: { query?: string }) {
  const fetchData = await fetchBySearchTerm(query ?? "");

  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {fetchData !== undefined ? (
        fetchData?.map((p) => <PokemonCard key={p.name} pokemon={p} />)
      ) : (
        <h3>Failed to fetch data</h3>
      )}
    </section>
  );
}
