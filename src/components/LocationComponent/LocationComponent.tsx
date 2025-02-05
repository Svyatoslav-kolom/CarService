import { Box, Divider } from "@chakra-ui/react";
import { LocationInfo } from "../LocationInfo";
import { MapSlider } from "../MapSlider";
import { useState } from "react";


export const LocationComponent = () => {
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18...");

  const handleAddressClick = (url: string) => {
    setMapUrl(url);
  };

  return (
    <Box>
      <LocationInfo onAddressClick={handleAddressClick} />

      <Divider my={4} />

      <MapSlider mapUrl={mapUrl} />
    </Box>
  );
};
