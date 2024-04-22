"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchInput = () => {
  const searchParams = useSearchParams();
  // const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`/?${params.toString()}`);
  }, 300);

  return (
    <section className="flex justify-center 2xl:justify-end w-full 2xl:w-3/12 gap-1 mt-2 2xl:mt-0">
      <div className="search__input border-[2px] w-100 border-solid bg-white flex flex-row items-center gap-5 p-1 rounded">
        <label htmlFor="inputId">
          <MagnifyingGlassIcon className="ms-2" height="18" width="18" />
        </label>
        <input
          type="text"
          id="inputId"
          placeholder="Find Pokemon by name"
          defaultValue={searchParams.get("q")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          className="bg-white outline-none border-none w-full py-2 pl-2 pr-3"
        />
      </div>
    </section>
  );
};
