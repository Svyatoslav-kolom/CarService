import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
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

const COMPONENT_MAP: Record<string, FC> = {
  "/services": Services,
  "/about": AboutUs,
  "/contacts": Contacts,
  "/cooperation": Cooperation,
  "/dpf-cleaning": CleaningDPF,
  "/towing-service": TowingService,
  "/location": LocationComponent,
};

const BACKGROUND_MAP: Record<string, string> = {
  ...Object.fromEntries(
    Object.keys(COMPONENT_MAP).map((key) => [key, `/background${key}.webp`])
  ),
};

const FALLBACK_BACKGROUND = {
  mobile: "/background/location.png",
  desktop: "/background/default.png",
};

export const InfoComponent: FC<Props> = ({ selectedComponent }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleResize = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const ComponentToRender = COMPONENT_MAP[selectedComponent || ""] || (isDesktop ? DefaultComponent : LocationComponent);
  const backgroundImage = BACKGROUND_MAP[selectedComponent || ""] || (isDesktop ? FALLBACK_BACKGROUND.desktop : FALLBACK_BACKGROUND.mobile);
  
  return (
    <Box
      as="section"
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
      mixBlendMode={selectedComponent === "/services" ? "normal" : "lighten"}
    >
      <ComponentToRender />
      <Box mt={6} fontWeight="bold" display={{ base: "block", xl: "none" }}>
        <SocialLinks />
      </Box>
    </Box>
  );
};
