import { Box, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { SocialLinks } from "../SocialLinks";
import { Services } from "../Services";
import { AboutUs } from "../AboutUs";
import { Contacts } from "../Contacts";
import { Cooperation } from "../Cooperation";
import { CleaningDPF } from "../CleaningDPF";
import { TowingService } from "../TowingService";
import { LocationComponent } from "../LocationComponent";
import { DefaultComponent } from "../DefaultComponent";

interface Props {
  selectedComponent: string | null;
}

const COMPONENT_MAP: Record<string, JSX.Element> = {
  "/services": <Services />,
  "/about": <AboutUs />,
  "/contacts": <Contacts />,
  "/partnerships": <Cooperation />,
  "/dpf-cleaning": <CleaningDPF />,
  "/towing-service": <TowingService />,
  "/location": <LocationComponent />,
};

const BACKGROUND_MAP: Record<string, string> = {
  "/services": "/background/services.png",
  "/about": "/background/about.png",
  "/contacts": "/background/contacts.png",
  "/partnerships": "/background/cooperation.png",
  "/dpf-cleaning": "/background/dpf-cleaning.png",
  "/towing-service": "/background/towing.png",
  "/location": "/background/location.png",
};

export const InfoComponent: FC<Props> = ({ selectedComponent }) => {
  const SelectedComponent = useBreakpointValue({
    base: LocationComponent,
    xl: DefaultComponent,
  }) || LocationComponent;

  const component = COMPONENT_MAP[selectedComponent || ""] || <SelectedComponent />;
  const backgroundImage = BACKGROUND_MAP[selectedComponent || ""] || "/background/default.png";
  const mixBlendMode = selectedComponent === "/services" ? "normal" : "lighten";

  return (
    <Box
      id="info-component"
      pl={6}
      pr={{ base: 6, xl: 0 }}
      py={4}
      width={{ base: "100%", md: "650px" }}
      height="100%"
      borderRadius="lg"
      boxShadow={{ base: "sm", md: "none" }}
      fontSize={{ base: "13px", md: "18px" }}
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mixBlendMode={mixBlendMode}
    >
      {component}
      <Box mt={6} fontWeight="bold" display={{ base: "block", xl: "none" }}>
        <SocialLinks />
      </Box>
    </Box>
  );
};
