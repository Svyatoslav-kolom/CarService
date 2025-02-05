import { VStack, Text, Box, List, ListItem, useTheme } from "@chakra-ui/react";

export const Head = () => {
  const theme = useTheme();

  return (
    <VStack
      bgGradient={theme.colors.gradients.gray2}
      p="16px"
      borderRadius="0px 0px 5px 5px"
    >
      <Text color="primary.white">
        Kontakt: +420739696649 <br />
        sviautoservis@email.cz
      </Text>

      <Box
        bgGradient={theme.colors.gradients.red}
        p={4}
        borderRadius="md"
        w={300}
      >
        <List
          spacing={2}
          color="white"
          w={156}
          textAlign="right"
          mx="auto"
        >
          <ListItem>Po–Pá 08:00–18:00</ListItem>
          <ListItem>So 09:00–16:00</ListItem>
          <ListItem>Ne – ZAVŘENO</ListItem>
        </List>
      </Box>
    </VStack>
  );
};
