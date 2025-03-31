import { Flex, Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";


interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <Flex justifyContent="center">
        <InputGroup width="50%" startElement={<BsSearch size="20px" />}>
          <Input fontSize="1.2rem" ref={ref} borderRadius={20} placeholder="Search games..." variant="subtle" />
        </InputGroup>
      </Flex>
    </form>
  );
};
export default SearchInput;