﻿import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms.ts";
import { Platform } from "@/services/platformService.ts";
import useGenre from "@/hooks/useGenre.ts";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = useGenre(selectedPlatformId);

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
                onClick={() => onSelectPlatform(platform)}
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