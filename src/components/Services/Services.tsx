import { Box, Flex } from "@chakra-ui/react";
import { Card } from "../Card";
import { services } from "../../ComponentsData/services";
import { useState } from "react";

export const Services = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <Flex justify="center">
      <Flex wrap="wrap" gap={5} justify="center" maxW="800px">
        {services.map((service) => (
          <Box
            key={service.title}
            w={{ base: "100%", md: "48%" }}
            minWidth="270px"
            maxWidth="300px"
            display="flex"
            justifyContent="center"
          >
            <Card
              icon={service.icon}
              title={service.title}
              description={service.description}
              isOpen={openCard === service.title}
              onClick={() => setOpenCard(openCard === service.title ? null : service.title)}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
