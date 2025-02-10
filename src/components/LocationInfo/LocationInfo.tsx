import { Text, VStack, HStack, Icon, Link, ListItem, List, Box, Flex } from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";

export const LocationInfo = () => (
  <VStack
    align="start"
    spacing={2}
    p={4}
    pt={0}
    color="white"
    borderRadius="md"
    fontSize="14px"
    position="relative"
  >
    <Flex w="100%" justify="space-between" align="start">
      <Text fontSize="20px" fontWeight="bold">SVI servis s.r.o.</Text>

      {/* Время работы справа */}
      <Box
        p={1}
        color="white"
        fontSize="12px"
        textAlign="right"
        border="1px solid white"
      >
        <Text>Po-Pá: 08.00 - 18.00</Text>
        <Text>So: 09.00 - 16.00</Text>
        <Text>Ne: ZAVŘENO</Text>
      </Box>
    </Flex>

    <List ml="30px" spacing={2} styleType="disc" mt="-20px">
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

      <HStack>
        <Icon as={MdPhone} />
        <Link href="tel:+420739696649" _hover={{ textDecoration: "underline" }}>
          +420 739 696 649
        </Link>
      </HStack>

      <HStack>
        <Icon as={MdEmail} />
        <Link href="mailto:sviautoservis@email.cz" _hover={{ textDecoration: "underline" }}>
          sviautoservis@email.cz
        </Link>
      </HStack>

      <Text>Fakturační adresa: fakturacesviservis@seznam.cz</Text>
    </VStack>
  </VStack>
);
