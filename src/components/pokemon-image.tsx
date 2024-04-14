"use client";
import Image from "next/image";

type ImageProps = {
  imageUrl: string;
  name: string;
  width?: number;
  height?: number;
  fill?: boolean;
};
export const PokemonImage = ({
  imageUrl,
  name,
  height,
  width,
  fill,
}: ImageProps) => {
  return (
    <Image
      src={imageUrl}
      alt={`Image of ${name}`}
      priority
      height={height}
      width={width}
      fill={fill}
      className="object-contain transition-opacity opacity-0 duration-200"
      onLoad={(image) => image.currentTarget.classList.remove("opacity-0")}
    />
  );
};
