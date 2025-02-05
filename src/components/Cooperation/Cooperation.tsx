import { VStack, Text, List, ListItem } from "@chakra-ui/react";

export const Cooperation = () => (
  <VStack
    align="start"
    color="white"
    borderRadius="md"
    fontSize="14px"
    fontWeight="200"
  >
    
    <Text fontWeight="bold">
      Nabízíme spolupráce s firmami které mají
      svůj vlastní vozový park osobních a maluch
      dodávek do 3.5 tun.
    </Text>

    <Text fontSize="16px" fontWeight="bold" mt={5}>
      Nabízíme
    </Text>

    <List spacing={2} styleType="disc" ml={6}>
      <ListItem>
        Okamžitou opravu vašeho auta.
      </ListItem>

      <ListItem>
        Odtahové služby 24/7 v rámci Ostravě zdarma, a také po celé Republice podle domluvy.
      </ListItem>

      <ListItem>
        Sleva 10% na náhradní díly od nákupní ceny.
      </ListItem>

      <ListItem>
        Splatnost faktur  14 dní po 6 měsících spolupráce.
      </ListItem>
    </List>
  </VStack>
);
