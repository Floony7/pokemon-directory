import { CardSkeleton } from "./card-skeleton";

export default async function GridListSkeleton() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array(12).map((p, i) => (
        <CardSkeleton key={i} />
      ))}
    </section>
  );
}
