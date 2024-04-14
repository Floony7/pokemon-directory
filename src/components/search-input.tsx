"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, useEffect } from "react";
import { TextField, Button } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface iDefault {
  defaultValue: string | null;
}

export const SearchInput = ({ defaultValue }: iDefault) => {
  // initiate the router from next/navigation

  const router = useRouter();

  // We need to grab the current search parameters and use it as default value for the search input

  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };

  useEffect(() => {
    if (inputValue) {
      return router.push(`/?q=${inputValue}`);
    } else {
      return router.push("/");
    }
  }, [inputValue, router]);

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
          value={inputValue ?? ""}
          onChange={(e) => handleChange(e)}
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
