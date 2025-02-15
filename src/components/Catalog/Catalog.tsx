import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { Hexagon } from "../Hexagon";
import { hexagons } from "../../ComponentsData/hexagons";

interface CatalogProps {
  onSelectComponent: (component: string) => void; // Приймає функцію для зміни компонента
}

export const Catalog = ({ onSelectComponent }: CatalogProps) => {
  const titleSize = { base: "14px", md: "25px" };
  const titleMargin = { base: 3, md: 100 };
  const display = { base: "block", xl: "none" };

  return (
    <Box mt="9px">
      <VStack display="flex" flexWrap="wrap" gap={4} justifyContent="center" fontSize="10px" >
        <HStack mb="-40px">
          {hexagons.slice(0, 2).map((hexagon) => (
            <Hexagon
              key={hexagon.title}
              title={hexagon.title}
              icon={hexagon.icon}
              onClick={() => onSelectComponent(hexagon.link)} // Додаємо onClick
            />
          ))}
        </HStack>

        <HStack>
          {hexagons.slice(2, 5).map((hexagon) => (
            <Hexagon
              key={hexagon.title}
              title={hexagon.title}
              icon={hexagon.icon}
              onClick={() => onSelectComponent(hexagon.link)}
            />
          ))}
        </HStack>

        <HStack mt="-40px">
          {hexagons.slice(5, 7).map((hexagon) => (
            <Hexagon
              key={hexagon.title}
              title={hexagon.title}
              icon={hexagon.icon}
              onClick={() => onSelectComponent(hexagon.link)}
            />
          ))}
        </HStack>
      </VStack>

      <Heading
        fontSize={titleSize}
        fontWeight="bold"
        textAlign="center"
        color="primary.white"
        mt={titleMargin}
        textTransform="uppercase"
        display={display}
      >
        ● Servisujeme vozidla všech značek
      </Heading>

    </Box>
  );
};
