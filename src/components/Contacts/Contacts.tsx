import { VStack, Text, List, ListItem, Divider } from "@chakra-ui/react";

export const Contacts = () => (
  <VStack
    align="start"
    spacing={1}
    color="white"
    borderRadius="md"
    fontSize="14px"
    fontWeight="200"
  >
    <Text fontSize="16px">
      <Text as="span" fontWeight="bold">
        Provozovna
      </Text>
      Varšavská 604/8, 709 00,
      Ostrava-Hulváky.

    </Text>

    <Divider mb={1}/>

    <List spacing={2}>
      <ListItem>
        739696646
      </ListItem>

      <Divider mb={1}/>

      <ListItem>
        sviautoservis@email.cz
      </ListItem>
      
      <ListItem>
        Fakturační adresa: fakturacesviservis@seznam.cz
      </ListItem>
    </List>
  </VStack>
);
