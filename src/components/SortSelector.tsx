import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortOption {
  display: string;
  value: string;
}

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOption: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortingOptions: SortOption[] = [
    { display: "Relevance", value: "" },
    { display: "Name", value: "name" },
    { display: "Date Released", value: "-released" },
    { display: "Date Added", value: "added" },
    { display: "Rating", value: "-rating" },
    { display: "Metacritic Score", value: "-metacritic" }
  ];

  const selectedOptionDisplay = selectedSortOrder ?
    sortingOptions.find(opt => opt.value === selectedSortOrder) : null;

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
            {sortingOptions.map(opt => <Menu.Item key={opt.value} onClick={() => onSelectSortOrder(opt.value)}
                                                  value={opt.value}>{opt.display}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;