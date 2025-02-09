import { Box, Text, Image, useTheme } from "@chakra-ui/react";
import { FC } from "react";

interface HexagonProps {
  title: string;
  icon: string;
  onClick: () => void;
}

export const Hexagon: FC<HexagonProps> = ({ title, icon, onClick }) => {
  const theme = useTheme();
  
  return (
    <Box
      role="group"
      cursor="pointer"
      textAlign="center"
      position="relative"
      w={120}
      h={130}
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt="25px"
      px="15px"
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
      <Image src={icon} alt={title} boxSize="33px" mb={2} />
      <Box
        w="full"
        h="4px"
        bgGradient={theme.colors.gradients.red}
        mb={2}
        _groupHover={{ bg: "black" }}
      />
      <Text color="white" fontWeight="bold">{title}</Text>
    </Box>
  )
}
