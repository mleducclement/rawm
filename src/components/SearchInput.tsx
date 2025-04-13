import { Flex, Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/stores/store.ts";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        setSearchText(ref.current.value);
        navigate("/");
      }
    }}>
      <Flex justifyContent="center">
        <InputGroup startElement={<BsSearch size="20px" />}>
          <Input fontSize="1.2rem" ref={ref} borderRadius={20} placeholder="Search games..." variant="subtle" />
        </InputGroup>
      </Flex>
    </form>
  );
};
export default SearchInput;