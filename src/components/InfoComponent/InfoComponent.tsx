import { Box, Divider } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { SocialLinks } from "../SocialLinks";
import { Services } from "../Services";
import { AboutUs } from "../AboutUs";
import { Contacts } from "../Contacts";
import { Cooperation } from "../Cooperation";
import { CleaningDPF } from "../CleaningDPF";
import { TowingService } from "../TowingService";
import { LocationComponent } from "../LocationComponent";

interface Props {
  selectedComponent: string | null;
}

export const InfoComponent: FC<Props> = ({ selectedComponent }) => {


  const renderComponent = () => {
    switch (selectedComponent) {
      case "/services":
        return <Services />;
      case "/about":
        return <AboutUs />;
      case "/contacts":
        return <Contacts />;
      case "/partnerships":
        return <Cooperation />;
      case "/dpf-cleaning":
        return <CleaningDPF />;
      case "/towing-service":
        return <TowingService />;
      case "/location":
      default:
        return <LocationComponent />;
    }
  };

  return (
    <Box
      id="info-component"
      px={8}
      py={6}
      maxW="600px"
      borderRadius="lg"
      boxShadow="md"
      bg="primary.cardGray"
      mx={4}
    >
      <Divider mb={3} />
      {renderComponent()}
      <Box mt={10}>
        <SocialLinks />
      </Box>
    </Box>
  );
};

