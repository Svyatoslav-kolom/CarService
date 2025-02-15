import { Text, VStack, ListItem, List, Box, Flex } from "@chakra-ui/react";

export const LocationInfo = () => (
  <VStack
    align="start"
    spacing={2}
    pt={0}
    color="white"
    borderRadius="md"
    position="relative"
  >
    <Flex w="100%" justify="space-between" align="start">
      <Text fontSize="20px" fontWeight="bold">SVI servis s.r.o.</Text>

      <Box
        p={1}
        color="white"
        fontSize="0.9em"
        textAlign="right"
        border="1px solid white"
        display={{ base: "block", xl: "none" }}
      >
        <Text>Po-Pá: 08.00 - 18.00</Text>
        <Text>So: 09.00 - 16.00</Text>
        <Text>Ne: ZAVŘENO</Text>
      </Box>
    </Flex>

    <List ml="30px" spacing={2} styleType="disc">
      <ListItem>
        <Text fontWeight="bold">Sídlo</Text>
          Masná 1850/4, Moravská Ostrava a Přívoz, 702 00
      </ListItem>

      <ListItem>
        <Text fontWeight="bold">Provozovna</Text>
        Varšavská 604/8, Ostrava-Hulváky 709 00
      </ListItem>
    </List>

    <VStack align="start">
      <Text>IČ: 17685664</Text>
      <Text>DIČ: CZ17685664</Text>
    </VStack>
  </VStack>
);
