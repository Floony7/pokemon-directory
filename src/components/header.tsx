"use client";

import { useSearchParams } from "next/navigation";
import { SearchInput } from "./search-input";

export default function Header() {
  return (
    <header className="mb-6 flex ms-5 justify-center 2xl:justify-start items-end">
      <div className="w-full flex flex-col justify-center 2xl:flex-row 2xl:justify-between items-center">
        <div>
          <div
            style={{ transform: "rotate(15deg)" }}
            className="text-3xl text-yellow-400 font-bold bg-amber-950 w-fit h-fit p-2 rounded-full"
          >
            The
          </div>
          <h1 className="text-4xl font-bold xl:text-6xl text-white m-0 p-0">
            Pokemon White Pages
          </h1>
        </div>
        <SearchInput />
      </div>
    </header>
  );
}
