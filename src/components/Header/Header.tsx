import { Box, HStack, Img, Link, Text, Tooltip, useTheme, VStack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { socialLinks } from "../../ComponentsData/socialLinks";
import { headerLinks } from "../../ComponentsData/headerLinks";

export const Header = () => {
  const theme = useTheme();
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const { onOpen } = useDisclosure();

  return (
    <Box
      py={4}
      px={5}
      bgGradient={theme.colors.gradients.gray3}
      boxShadow="0px 5px 100px black"
      zIndex={10}
      position="relative"
      borderBottomRadius="lg"
    >
      <HStack justifyContent="space-between">
        <HStack spacing={5}>
          {headerLinks.map(({ icon, label, content }) => (
            <Tooltip
              key={label}
              label={tooltipContent === label ? content : ""}
              isOpen={tooltipContent === label}
              bg="rgba(0, 0, 0, 0.4)"
              border="1px solid black"
              color="white"
              fontSize="14px"
              fontWeight={400}
              borderRadius="md"
              p={3}
            >
              <Box
                as="span"
                display="flex"
                cursor="pointer"
                onClick={() => {
                  setTooltipContent(tooltipContent === label ? null : label);
                  onOpen();
                }}
                onMouseEnter={() => setTooltipContent(label)}
                onMouseLeave={() => setTooltipContent(null)}
              >
                <Img src={icon} alt={label} width="20px" height="20px" />
              </Box>
            </Tooltip>
          ))}
        </HStack>

        <HStack spacing={5}>
          {socialLinks.map(({ icon, href, label }) => (
            <Link key={label} href={href} isExternal>
              <Box as="span" display="flex">
                <Img src={icon} alt={label} width="20px" height="20px" />
              </Box>
            </Link>
          ))}
        </HStack>
      </HStack>

      <VStack spacing={0} mt={6}>
        <Img src="/icons/Logo.svg" w={210} />
        <Text color="primary.white" fontWeight={700} fontSize="16px">Ostrava-Hulváky</Text>
      </VStack>

      <Box w="full" h="3px" bgGradient={theme.colors.gradients.red} mb="20px" boxShadow="xl" mt="10px" />

      {/* Акция */}
      <Box color="white" fontWeight="bold" fontSize="19px" textAlign="center">
        <Text as="span" fontSize="10px" bgGradient="linear(180deg, #E30613 21.5%, #B0050F 63.5%, #7D030A 100%)" bgClip="text">
          ●
        </Text>{" "}
        15% SLEVA NA VŠECHNY SLUŽBY AUTOSERVISU PŘI REGISTRACI NA WEBU
      </Box>
    </Box>
  );
};
