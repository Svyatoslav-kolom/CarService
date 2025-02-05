import { VStack, Text, List, ListItem, Divider } from "@chakra-ui/react";

export const AboutUs = () => (
  <VStack
    align="start"
    spacing={2}
    color="white"
    borderRadius="md"
    fontSize="14px"
    fontWeight="200"
  >
    <Text fontSize="16px">
      <Text as="span" fontWeight="bold">
        SVIAUTOSERVIS
      </Text>
      - servis osobních a maluch dodávek do 3.5 tun.

    </Text>

    <Divider />

    <List ml="30px" spacing={2} styleType="disc">
      <ListItem>
        Jsme nově otevřeně v roce 2024 servis ve kterém pracuji zkušení profesionálové s velkou praxe v oblasti servisu a oprav osobních vozů
      </ListItem>

      <Divider />

      <ListItem>
        Když chcete kompletně opravit auto, rychle a kvalitně tak se stavte
      </ListItem>
    </List>
  </VStack>
);
