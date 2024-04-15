import GridList2 from "@/components/grid-list2";
import GridListSkeleton from "@/components/grid-skeleton";
import { fetchPokemonList } from "@/lib/api-requests";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<GridListSkeleton />}>
        <GridList2 query={searchParams?.q} />
      </Suspense>
    </main>
  );
}
