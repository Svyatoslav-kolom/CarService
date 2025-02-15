import { Box, Divider } from "@chakra-ui/react";
import { LocationInfo } from "../LocationInfo";
import { MapSlider } from "../MapSlider";


export const LocationComponent = () => {
  const display = { base: "block", xl: "none" }

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <LocationInfo />

      <Divider my={4} display={display}/>

      <Box mt="auto">
        <MapSlider />
      </Box>

    </Box>
  );
};
