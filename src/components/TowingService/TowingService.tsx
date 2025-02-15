import { VStack, Divider, List, ListItem, Img } from "@chakra-ui/react";

export const TowingService = () => {
  const display = { base: "block", xl: "none" }

  return (
    <VStack
      align="start"
      color="white"
      borderRadius="md"
      fontWeight="600"
    >
      <List spacing={2} >
        <ListItem fontSize="1.05em">
          Odtahová služba
        </ListItem>

        <ListItem>
          Náš servis nabízí odtahové služby 27/7 v rámci
        </ListItem>

        <ListItem>
          Ostravu a také po celé České republice.
        </ListItem>
      </List>

      <Divider display={display}/>

      <Img
        src="img/towing.webp"
        mt={7}
        w="100%"
        borderRadius="xl"
        filter="brightness(0.5)"
      />
    </VStack>
  );
}
