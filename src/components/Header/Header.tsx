import { Box, HStack, Img, Link, Text, Tooltip, useTheme, VStack} from "@chakra-ui/react";
import { useState } from "react";
import { socialLinks } from "../../ComponentsData/socialLinks";
import { headerLinks } from "../../ComponentsData/headerLinks";

export const Header = () => {
  const theme = useTheme();
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);

  const iconSize = { base: "20px", md: "30px", xl: "30px" };
  const logoSize = { base: "210px", md: "450px", xl: "735px" };
  const iconsGap = { base: 5, md: 7 };
  const titleFontSize = { base: "16px", md: "25px", xl: "36px" };
  const promoFontSize = { base: "19px", md: "30px", xl: "28px" };
  const bulletFontSize = { base: "10px", md: "15px" };
  const tooltipStyle = {
    bg: "rgba(0, 0, 0, 0.4)",
    border: "1px solid black",
    color: "white",
    fontSize: "14px",
    fontWeight: 400,
    borderRadius: "md",
    p: 3,
  };

  const bgGradient = { base: theme.colors.gradients.gray3, xl: "none" };
  const boxShadow = { base: "0px 5px 100px black", xl: "none" };
  const maxWidth = { base: "1000px", xl: "570px" };
  const iconsItemJustify = { base: "space-between", xl: "flex-start" };
  const order = { base: 1, xl: 3 };
  const lineMargin = {
    mt: { base: 6, xl: "auto" },
    mb: { base: 6, xl: 0 },
  };

  return (
    <Box
      py={4}
      px={{ base: 4, md: "45px" }}
      bgGradient={bgGradient}
      boxShadow={boxShadow}
      zIndex={10}
      position="relative"
      borderBottomRadius="lg"
      h="100%"
      display="flex"
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent="space-between"
    >
      <VStack>
        <HStack justifyContent={iconsItemJustify} gap={iconsGap} w="100%">
          <HStack spacing={iconsGap}>
            {headerLinks.map(({ icon, label, content }) => (
              <Tooltip
                key={label}
                label={tooltipContent === label ? content : ""}
                isOpen={tooltipContent === label}
                {...tooltipStyle}
              >
                <Box
                  as="span"
                  display="flex"
                  cursor="pointer"
                  onMouseEnter={() => setTooltipContent(label)}
                  onMouseLeave={() => setTooltipContent(null)}
                >
                  <Img src={icon} alt={label} width={iconSize} height={iconSize} />
                </Box>
              </Tooltip>
            ))}
          </HStack>

          <HStack spacing={5}>
            {socialLinks.map(({ icon, href, label }) => (
              <Link key={label} href={href} isExternal>
                <Box as="span" display="flex">
                  <Img src={icon} alt={label} width={iconSize} height={iconSize} />
                </Box>
              </Link>
            ))}
          </HStack>
        </HStack>

        <Img src="/icons/Logo.svg" w={logoSize} mt={6} />
      </VStack>

      <VStack maxW={maxWidth} alignItems={{ base: "center", xl: "end" }}>
        <Text color="primary.white" fontWeight={700} fontSize={titleFontSize}>
          Ostrava-Hulváky
        </Text>

        <Box
          w="full"
          h="3px"
          bgGradient={theme.colors.gradients.red}
          boxShadow="xl"
          order={order}
          {...lineMargin}
        />

        <Box color="white" fontWeight="bold" fontSize={promoFontSize} textAlign={{ base: "center", xl: "right" }}>
          <Text as="span" fontSize={bulletFontSize} bgGradient="linear(180deg, #E30613 21.5%, #B0050F 63.5%, #7D030A 100%)" bgClip="text">
            ●
          </Text>{" "}
          15% SLEVA NA VŠECHNY SLUŽBY AUTOSERVISU PŘI REGISTRACI NA WEBU
        </Box>
      </VStack>
    </Box>
  );
};