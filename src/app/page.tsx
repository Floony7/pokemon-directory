import GridList2 from "@/components/grid-list2";
import GridListSkeleton from "@/components/grid-skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicGridList = dynamic(() => import("@/components/grid-list2"), {
  loading: () => <GridListSkeleton />,
});

export default async function Home({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  return (
    <main className="min-h-screen">
      <DynamicGridList query={searchParams?.q} />
    </main>
  );
}
