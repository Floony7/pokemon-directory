import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchForm = () => {
  return (
    <TextField.Root
      style={{ marginTop: "0.5rem" }}
      placeholder="Find a Pokemon..."
      size="3"
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};
