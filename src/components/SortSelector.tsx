import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortOption {
  display: string;
  value: string;
}

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortingOptions: SortOption[] = [
    { display: "Name", value: "name" },
    { display: "Date Released", value: "released" },
    { display: "Date Added", value: "added" },
    { display: "Date Created", value: "created" },
    { display: "Date Updated", value: "updated" },
    { display: "Rating", value: "rating" },
    { display: "Metacritic Score", value: "metacritic" }
  ];

  const selectedOptionDisplay = selectedSortOrder ?
    sortingOptions.find(opt => opt.value === selectedSortOrder)?.display : null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedOptionDisplay && ("Order By: " + selectedOptionDisplay) || "Sort By:"}<BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem>
            {/*{sortingOptions.map(opt => <Menu.Item key={opt.value} onClick={() => onSelectSortOrder(opt.value)}*/}
            {/*                                      value={opt.value}>{opt.display}</Menu.Item>)}*/}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;