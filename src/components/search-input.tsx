"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
// import { useState, ChangeEvent, useEffect } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <section className="flex w-3/12 gap-1">
      <div className="search__input border-[2px] border-solid bg-white flex flex-row items-center gap-5 p-1 rounded">
        <label htmlFor="inputId">
          <MagnifyingGlassIcon className="ms-2" height="18" width="18" />
        </label>
        <input
          type="text"
          id="inputId"
          placeholder="Find a Pokemon..."
          defaultValue={searchParams.get("q")?.toString()}
          // value={inputValue ?? ""}
          onChange={(e) => handleSearch(e.target.value)}
          className="bg-white outline-none border-none w-full py-2 pl-2 pr-3"
        />
      </div>
      {/* <Button
        style={{
          backgroundColor: "#d97706",
          height: "auto",
          cursor: "pointer",
        }}
      >
        Search
      </Button> */}
    </section>
  );
};
