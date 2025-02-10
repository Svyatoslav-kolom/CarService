import { Box } from "@chakra-ui/react";

export const MapSlider = () => (
  <Box>
    <Box 
      as="iframe" 
      src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.73647075442904!2d18.24547281434056!3d49.825699417596624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e31990297aab%3A0xed953f21c5b9419f!2sSVI%20AUTOSERVIS%20s.r.o.!5e0!3m2!1suk!2sus!4v1738773784215!5m2!1suk!2sus"} 
      title="Location" 
      w="100%" 
    />
  </Box>
);
