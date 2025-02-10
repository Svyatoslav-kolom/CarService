import { Box, VStack } from "@chakra-ui/react";
import { Card } from "../Card";
import { services } from "../../ComponentsData/services";

export const Services = () => {

  return (
    <VStack alignItems="center" gap="20px">
      {services.map((service) => (
        <Box w={300}>
          <Card icon={service.icon} title={service.title} description={service.description} />
        </Box>
      ))}
    </VStack>
  );
}
