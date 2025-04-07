import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms.ts";
import useGenre from "@/hooks/useGenre.ts";
import useGameQueryStore from "@/stores/store.ts";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = useGenre(selectedPlatformId);

  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name ?? "Platforms"}<BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map(platform =>
              <Menu.Item
                onClick={() => setPlatformId(platform.id)}
                key={platform.id}
                value={platform.id.toString()}>{platform.name}
              </Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default PlatformSelector;