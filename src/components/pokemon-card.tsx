import { PokemonResultType } from "@/lib/api";
import Image from "next/image";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonResultType }) => {
  return (
    <div className="rounded w-full md:w-80 shadow-lg bg-amber-700/50 mb-2 ms-1 ">
      <div className="px-6 py-4">
        <h2>{pokemon.name}</h2>
      </div>
      {/* <Image
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
      <h2>{pokemon.name}</h2>
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div> */}
      {/* <div className="px-6 pt-4 pb-2">
        <span className="button__grey">#photography</span>
        <span className="button__grey">#travel</span>
        <span className="button__grey">#winter</span>
      </div> */}
    </div>
  );
};
