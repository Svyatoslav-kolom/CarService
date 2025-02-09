import { Text, VStack, HStack, Icon, Link, ListItem, List, Box, Flex } from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";

export const LocationInfo = ({ onAddressClick }: { onAddressClick: (url: string) => void }) => (
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
    {/* Обертка для заголовка и времени работы */}
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
        <Link
          onClick={() => onAddressClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.4988036615186!2d18.283388150262475!3d49.83432455527505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41734eba481024db%3A0x82cc9fdaa9c8f707!2sNotarial%20Chamber%20in%20Ostrava!5e0!3m2!1suk!2sus!4v1738773909534!5m2!1suk!2sus")}
          _hover={{ textDecoration: "underline" }}
        >
          Masná 1850/4, Moravská Ostrava a Přívoz, 702 00
        </Link>
      </ListItem>

      <ListItem>
        <Text fontWeight="bold">Provozovna</Text>
        <Link
          onClick={() => onAddressClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.73647075442904!2d18.24547281434056!3d49.825699417596624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e31990297aab%3A0xed953f21c5b9419f!2sSVI%20AUTOSERVIS%20s.r.o.!5e0!3m2!1suk!2sus!4v1738773784215!5m2!1suk!2sus")}
          _hover={{ textDecoration: "underline" }}
        >
          Varšavská 604/8, Ostrava-Hulváky 709 00
        </Link>
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
