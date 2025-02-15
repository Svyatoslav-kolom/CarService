import { VStack, Text, List, ListItem, Divider } from "@chakra-ui/react";

export const CleaningDPF = () => {
  const display = { base: "block", xl: "none" }

  return (
    <VStack
      align="start"
      color="white"
      borderRadius="md"
      fontWeight="200"
    >

      <Text fontWeight="400" fontSize="1.05em">
        ČIŠTĚNÍ PROBÍHÁ NA NOVÉM MODERNÍM STROJE KTERÝ DOKÁŽE FILTR
        PEVNÝCH ČÁSTIC OBNOVIT AŽ NA 95%. BEZ JAKÉHOKOLIV NARUŠENÍ
        STRUKTURY FILTRU.
      </Text>

      <Divider display={display}/>

      <Text fontWeight="400" mb={2}>
        Cena čištění
      </Text>

      <List spacing={2} styleType="disc" ml={6}>
        <ListItem>
          Osobní vozidla 3000 s DPHKč
        </ListItem>

        <ListItem>
          Dodávky 4000 s DPH Kč
        </ListItem>
      </List>

      <Text fontWeight="400" my={2}>
        Komplet demontáž, montáž a adaptace
      </Text>

      <List spacing={2} styleType="disc" ml={6}>
        <ListItem>
          Osobní vozidla od 5500 bez DPH Kč
        </ListItem>

        <ListItem>
          Dodávky od 7000 bez  DPH Kč
        </ListItem>
      </List>
    </VStack>
  );
}
