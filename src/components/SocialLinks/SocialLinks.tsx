import { HStack, Link, Box } from "@chakra-ui/react";
import { socialLinks } from "../../ComponentsData/socialLinks";

export const SocialLinks = () => {
  const iconSize = { base: "35px", md: "50px" };

  return (
    <HStack spacing={6} justify="center">
      {socialLinks.map(({ icon, href, label }) => (
        <Link key={label} href={href} isExternal>
          <Box
            as="span"
            display="flex"
            w={iconSize}
            h={iconSize}
          >
            <img src={icon} alt={label} width="100%" height="100%" />
          </Box>
        </Link>
      ))}
    </HStack>
  );
};
