"use client";

import Link from "next/link";
import { SearchInput } from "./search-input";

export default function Header() {
  return (
    <header className="mb-6 mx-5">
      <div className="w-full flex flex-col items-center justify-center 2xl:flex-row 2xl:justify-between 2xl:items-end">
        <div className="flex flex-col items-center justify-center 2xl:block">
          <div className="text-sm text-yellow-400 font-bold bg-amber-950 w-fit h-fit p-1 mb-2 rounded uppercase">
            The somewhat unofficial
          </div>
          <h1 className="text-5xl font-bold xl:text-6xl text-white m-0 p-0">
            <Link href="/">Pok&eacute;dex</Link>
          </h1>
        </div>
        <SearchInput />
      </div>
    </header>
  );
}
