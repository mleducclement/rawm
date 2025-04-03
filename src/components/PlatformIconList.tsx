import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox, FaQuestionCircle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "@/services/platformService.ts";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    linux: FaLinux,
    sega: SiSega
  };

  return (
    <Flex
      wrap="wrap"
      gap={2}
      marginY={1}>
      {platforms?.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return (
          <div key={platform.id}>
            <Icon as={iconMap[platform.slug] || FaQuestionCircle} color="blue.400" size="md">
              <IconComponent />
            </Icon>
          </div>
        );
      })}
    </Flex>
  );
};
export default PlatformIconList;