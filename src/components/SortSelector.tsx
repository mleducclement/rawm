import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "@/stores/store.ts";

interface SortOption {
  display: string;
  value: string;
}

const SortSelector = () => {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const sortingOptions: SortOption[] = [
    { display: "Relevance", value: "" },
    { display: "Name", value: "name" },
    { display: "Date Released", value: "-released" },
    { display: "Date Added", value: "added" },
    { display: "Rating", value: "-rating" },
    { display: "Metacritic Score", value: "-metacritic" }
  ];

  const selectedOptionDisplay = sortOrder ?
    sortingOptions.find(opt => opt.value === sortOrder) : null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Ordered By: {selectedOptionDisplay?.display || "Relevance"}<BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortingOptions.map(opt => <Menu.Item key={opt.value} onClick={() => setSortOrder(opt.value)}
                                                  value={opt.value}>{opt.display}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;