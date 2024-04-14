"use client";

import { SearchInput } from "./search-input";

export default function Header() {
  return (
    <header className="mb-6 flex ms-5 justify-center 2xl:justify-start">
      <div className="w-full flex flex-col justify-center 2xl:flex-row 2xl:justify-between items-end">
        <div>
          <div
            // style={{ transform: "rotate(15deg)" }}
            className="text-xl text-yellow-400 font-bold bg-amber-950 w-fit h-fit p-2 rounded-full uppercase"
          >
            The official
          </div>
          <h1 className="text-4xl font-bold xl:text-6xl text-white m-0 p-0">
            Pok&eacute;dex
          </h1>
        </div>
        <SearchInput />
      </div>
    </header>
  );
}
