import { Card, Flex, Skeleton } from "@radix-ui/themes";

export const CardSkeleton = () => {
  return (
    <Card className="rounded w-full shadow-lg mb-2 ms-1">
      <header className="flex justify-between">
        <Skeleton width="40%">Name</Skeleton>
        <Skeleton width="20%">Order</Skeleton>
      </header>
      <section className="px-6 py-4">
        <div className="w-full flex flex-col justify-center items-center">
          <Skeleton height="300px" width="300px">
            Image
          </Skeleton>
        </div>
        <Flex justify="center" gap="2">
          <Skeleton width="30%">badge</Skeleton>
        </Flex>
      </section>
    </Card>
  );
};
