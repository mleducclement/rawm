import useGenres from "@/hooks/useGenres.ts";
import {HStack, List, Image, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

const GenreList = () => {
   const {data} = useGenres();

   return (
      <List.Root variant="plain">
         {data.map(genre => (
            <List.Item key={genre.id} paddingY="5px" fontSize="lg">
               <HStack>
                  <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                  <Text>{genre.name}</Text>
               </HStack>
            </List.Item>
         ))}
      </List.Root>
   );
};
export default GenreList;