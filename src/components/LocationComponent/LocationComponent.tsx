import { Box, Divider } from "@chakra-ui/react";
import { LocationInfo } from "../LocationInfo";
import { MapSlider } from "../MapSlider";
import { useState } from "react";


export const LocationComponent = () => {
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.4988036615186!2d18.283388150262475!3d49.83432455527505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41734eba481024db%3A0x82cc9fdaa9c8f707!2sNotarial%20Chamber%20in%20Ostrava!5e0!3m2!1suk!2sus!4v1738773909534!5m2!1suk!2sus");

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
