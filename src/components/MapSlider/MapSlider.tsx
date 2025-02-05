import { Box } from "@chakra-ui/react";

export const MapSlider = ({ mapUrl }: { mapUrl: string }) => (
  <Box>
    <Box as="iframe" src={mapUrl} title="Location" />
  </Box>
);
