import { HStack, Link, Box } from "@chakra-ui/react";
import { socialLinks } from "../../ComponentsData/socialLinks";

export const SocialLinks = () => {
  return (
    <HStack spacing={6} justify="center">
      {socialLinks.map(({ icon, href, label }) => (
        <Link key={label} href={href} isExternal>
          <Box
            as="span"
            display="flex"
          >
            <img src={icon} alt={label} width="35px" height="35px" />
          </Box>
        </Link>
      ))}
    </HStack>
  );
};
