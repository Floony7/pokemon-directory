
export function capitalise(word: string) {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return `${firstLetter}${restOfWord}`;
}

export const typeColors: Record<string, string> = {
    fire: "red",
    water: "indigo",
    grass: "grass",
    electric: "amber",
    ice: "cyan",
    fighting: "tomato",
    poison: "crimson",
    ground: "orange",
    flying: "mint",
    psychic: "plum",
    bug: "teal",
    rock: "brown",
    ghost: "purple",
    dragon: "violet",
    dark: "bronze",
    steel: "iris",
    fairy: "pink",
  };
  