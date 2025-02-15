import { Box, Text, Image, useTheme } from "@chakra-ui/react";
import { FC } from "react";

interface HexagonProps {
  title: string;
  icon: string;
  onClick: () => void;
}

export const Hexagon: FC<HexagonProps> = ({ title, icon, onClick }) => {
  const theme = useTheme();

  const hexWidht = { base: "120px", md: "220px", xl: "180px" };
  const hexHeight = { base: "130px", md: "235px", xl: "200px" };
  const hexPaddingY = { base: "25px", md: "50px", xl: "40px" };
  const hexPaddingX = { base: "15px", md: "30px", xl: "20px" };
  const iconSize = { base: "33px", md: "50px", xl: "40px" };
  const textSize = { base: "10px", md: "20px", xl: "18px" };

  return (
    <Box
      role="group"
      cursor="pointer"
      textAlign="center"
      position="relative"
      w={hexWidht}
      h={hexHeight}
      pt={hexPaddingY}
      px={hexPaddingX}
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow="hidden"
      _hover={{
        backgroundImage: "url('background/Hexagons/hover.svg')",
      }}
      _active={{
        transform: "scale(1.1)",
        transition: "transform 0.2s ease, background-image 0.5s ease",
      }}
      transition="background-image 0.5s ease"
      backgroundImage="url('background/Hexagons/default.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      onClick={() => {
        onClick();
        setTimeout(() => {
          document.getElementById("info-component")?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }}
    >
      <Image src={icon} alt={title} boxSize={iconSize} mb={2} />
      <Box
        w="full"
        h="4px"
        bgGradient={theme.colors.gradients.red}
        mb={2}
        _groupHover={{ bg: "black" }}
      />
      <Text
        color="white"
        fontWeight="bold"
        fontSize={textSize}
      >
        {title}
      </Text>
    </Box>
  )
}
