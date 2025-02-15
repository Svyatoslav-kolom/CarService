import { VStack, Text, List, ListItem, Divider } from "@chakra-ui/react";

export const Contacts = () => {
  const display = { base: "block", xl: "none" }

  return (
    <VStack
      align="start"
      spacing={1}
      color="white"
      borderRadius="md"
      fontWeight="200"
    >
      <Text fontSize="1.05em">
        <Text as="span" fontWeight="bold">
          Provozovna
        </Text>
        Varšavská 604/8, 709 00,
        Ostrava-Hulváky.

      </Text>

      <Divider mb={1} display={display}/>

      <List spacing={2}>
        <ListItem>
          739696646
        </ListItem>

        <Divider mb={1} display={display}/>

        <ListItem>
          sviautoservis@email.cz
        </ListItem>

        <ListItem>
          Fakturační adresa: fakturacesviservis@seznam.cz
        </ListItem>
      </List>
    </VStack>
  );
}
