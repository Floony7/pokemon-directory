import { Box, Skeleton } from "@radix-ui/themes";

export function PokemonPageSkeleton() {
  return (
    <>
      <header className="pb-6 pt-2 mb-2">
        <Skeleton width="200px" height="24px"></Skeleton>
      </header>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-12">
        <div className="bg-slate-300 rounded-full flex justify-center">
          <Skeleton width="500" height="500">
            Image
          </Skeleton>
        </div>
        <aside>
          <Box as="div" display="block">
            <Skeleton width="250px" height="50px">
              Details
            </Skeleton>
          </Box>
          <Box as="div" display="block">
            <Skeleton width="200px" height="24px"></Skeleton>
            <div className="flex flex-col">
              {Array(6).map((_, i) => (
                <div key={i} className="flex items-center">
                  <Skeleton width="30%" height="24px"></Skeleton>
                  <Skeleton width="55%" height="24px"></Skeleton>
                </div>
              ))}
            </div>
          </Box>
          <Box as="div" display="block">
            <Skeleton width="200px" height="24px"></Skeleton>
            {Array(3).map((_, i) => (
              <Skeleton key={i} width="50px">
                Ability
              </Skeleton>
            ))}
          </Box>
        </aside>
      </section>
    </>
  );
}
