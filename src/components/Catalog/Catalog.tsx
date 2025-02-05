import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { Hexagon } from "../Hexagon";
import { hexagons } from "../../ComponentsData/hexagons";

interface CatalogProps {
  onSelectComponent: (component: string) => void; // Приймає функцію для зміни компонента
}

export const Catalog = ({ onSelectComponent }: CatalogProps) => {
  return (
    <Box mt="9px">
      <Heading
        fontSize="14px"
        fontWeight="bold"
        textAlign="center"
        color="primary.white"
        mb={2}
      >
        Servisujeme vozidla <br />
        všech značek
      </Heading>

      <VStack display="flex" flexWrap="wrap" gap={4} justifyContent="center">
        <HStack mb="-40px" fontSize="15px">
          {hexagons.slice(0, 2).map((hexagon) => (
            <Hexagon
              key={hexagon.title}
              title={hexagon.title}
              icon={hexagon.icon}
              onClick={() => onSelectComponent(hexagon.link)} // Додаємо onClick
            />
          ))}
        </HStack>

        <HStack fontSize="10px">
          {hexagons.slice(2, 5).map((hexagon) => (
            <Hexagon
              key={hexagon.title}
              title={hexagon.title}
              icon={hexagon.icon}
              onClick={() => onSelectComponent(hexagon.link)} 
            />
          ))}
        </HStack>

        <HStack mt="-40px" fontSize="10px">
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
    </Box>
  );
};
