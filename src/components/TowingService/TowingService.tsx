import { VStack, Divider, List, ListItem, Img } from "@chakra-ui/react";

export const TowingService = () => (
  <VStack
    align="start"
    color="white"
    borderRadius="md"
    fontSize="14px"
    fontWeight="600"
  >
    <List spacing={2}>
      <ListItem>
        Odtahová služba
      </ListItem>

      <ListItem>
        Náš servis nabízí odtahové služby 27/7 v rámci
      </ListItem>

      <ListItem>
        Ostravu a také po celé České republice.
      </ListItem>
    </List>

    <Divider />

    <Img
      src="src/assets/img/towing.png"
      mt={7}
    />

  </VStack>
);
