import { Text, VStack, HStack, Icon, Link, ListItem, List } from "@chakra-ui/react";
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
  >
    <Text
      fontSize="20px"
      fontWeight="bold"
    >
      SVI servis s.r.o.
    </Text>

    <List ml="30px" spacing={2} styleType="disc">
      <ListItem>
        <Text fontWeight="bold">
          Sídlo
        </Text>
        <Link
          onClick={() => onAddressClick("https://www.google.com/maps/embed?pb=!1m18...")}
          _hover={{ textDecoration: "underline" }}
        >
          Masná 1850/4, Moravská Ostrava a Přívoz, 702 00
        </Link>
      </ListItem>

      <ListItem>
        <Text fontWeight="bold">
          Provozovna
        </Text>
        <Link
          onClick={() => onAddressClick("https://www.google.com/maps/embed?pb=!2m18...")}
          _hover={{ textDecoration: "underline" }}
        >
          Varšavská 604/8, Ostrava-Hulváky 709 00
        </Link>
      </ListItem>
    </List>

    <VStack align="start">
      <Text>
        IČ: 17685664
      </Text>

      <Text>
        DIČ: CZ17685664
      </Text>

      <HStack>
        <Icon as={MdPhone} />
        <Link
          href="tel:+420739696649"
          _hover={{ textDecoration: "underline" }}
        >
          +420 739 696 649
        </Link>
      </HStack>

      <HStack>
        <Icon as={MdEmail} />
        <Link
          href="mailto:sviautoservis@email.cz"
          _hover={{ textDecoration: "underline" }}>
          sviautoservis@email.cz
        </Link>
      </HStack>
      <Text>
        Fakturační adresa: fakturacesviservis@seznam.cz
      </Text>
    </VStack>

  </VStack>
);
