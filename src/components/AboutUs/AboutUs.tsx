import { VStack, Text, List, ListItem, Divider } from "@chakra-ui/react";

export const AboutUs = () => {
  const display = { base: "block", xl: "none" }

  return (
    <VStack
      align="start"
      spacing={2}
      color="white"
      borderRadius="md"
      fontWeight="200"
    >
      <Text fontSize="1.05em">
        <Text as="span" fontWeight="bold">
          SVIAUTOSERVIS
        </Text>
        - servis osobních a maluch dodávek do 3.5 tun.

      </Text>

      <Divider display={display}/>

      <List ml="30px" spacing={2} styleType="disc">
        <ListItem>
          Jsme nově otevřeně v roce 2024 servis ve kterém pracuji zkušení profesionálové s velkou praxe v oblasti servisu a oprav osobních vozů
        </ListItem>

        <Divider display={display}/>

        <ListItem>
          Když chcete kompletně opravit auto, rychle a kvalitně tak se stavte
        </ListItem>
      </List>
    </VStack>
  );
}
