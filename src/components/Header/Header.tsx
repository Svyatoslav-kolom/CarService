import { Box, HStack, Img, Link, Text, Tooltip, useTheme, VStack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export const Header = () => {
  const theme = useTheme();
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const { onOpen } = useDisclosure();

  const headerLinks = [
    {
      icon: "../../../public/icons/HeaderIcons/Phone.svg",
      label: "Телефон",
      content: (
        <>
          <Text>SVI AUTOSERVIS</Text>
          <Text>+420 739 696 649</Text>
        </>
      ),
    },
    {
      icon: "../../../public//icons/HeaderIcons/Mail.svg",
      label: "Email",
      content: (
        <>
          <Text>sviautoservis@email.cz</Text>
          <Text>Fakturační adresa</Text>
          <Text>fakturacesviservis@seznam.cz</Text>
        </>
      ),
    },
    {
      icon: "../../../public//icons/HeaderIcons/Time.svg",
      label: "Время работы",
      content: (
        <>
          <Text fontWeight="bold">Otevírací doba</Text>
          <Text fontSize="12px">Po-Pá  08.00-18.00</Text>
          <Text fontSize="12px" >So  09.00-16.00</Text>
        </>
      ),
    },
  ];

  const socialLinks = [
    {
      icon: "../../../public//icons/HeaderIcons/Instagram.svg",
      href: "https://www.facebook.com/share/g/15gk7HwLAn/?mibextid=wwXIfr",
      label: "Facebook"
    },
    {
      icon: "../../../public//icons/HeaderIcons/Tik-Tok.svg",
      href: "https://www.instagram.com/sviautoservis_?igsh=dGNjY3QwNnlxMjk%3D&utm_source=qr",
      label: "Instagram"
    },
    {
      icon: "../../../public//icons/HeaderIcons/Facebook.svg",
      href: "https://www.tiktok.com/@svi.servis?_t=ZG-8tbgPYLKlub&_r=1",
      label: "TikTok"
    },
  ];



  return (
    <Box
      py={4}
      px={5}
      bgGradient={theme.colors.gradients.gray3}
      boxShadow="0px 5px 100px black"
      zIndex={10}
      position="relative"
      borderBottomRadius="lg"
    >
      <HStack justifyContent="space-between">
        <HStack spacing={5}>
          {headerLinks.map(({ icon, label, content }) => (
            <Tooltip
              key={label}
              label={tooltipContent === label ? content : ""}
              isOpen={tooltipContent === label}
              bg="rgba(0, 0, 0, 0.4)"
              border="1px solid black"
              color="white"
              fontSize="14px"
              fontWeight={400}
              borderRadius="md"
              p={3}
            >
              <Box
                as="span"
                display="flex"
                cursor="pointer"
                onClick={() => {
                  setTooltipContent(tooltipContent === label ? null : label);
                  onOpen();
                }}
                onMouseEnter={() => setTooltipContent(label)}
                onMouseLeave={() => setTooltipContent(null)}
              >
                <Img src={icon} alt={label} width="20px" height="20px" />
              </Box>
            </Tooltip>
          ))}
        </HStack>

        <HStack spacing={5}>
          {socialLinks.map(({ icon, href, label }) => (
            <Link key={label} href={href} isExternal>
              <Box as="span" display="flex">
                <Img src={icon} alt={label} width="20px" height="20px" />
              </Box>
            </Link>
          ))}
        </HStack>
      </HStack>

      {/* Логотип и город */}
      <VStack spacing={0} mt={6}>
        <Img src="/icons/Logo.svg" w={210} />
        <Text color="primary.white" fontWeight={700} fontSize="16px">Ostrava-Hulváky</Text>
      </VStack>

      <Box w="full" h="3px" bgGradient={theme.colors.gradients.red} mb="20px" boxShadow="xl" mt="10px" />

      {/* Акция */}
      <Box color="white" fontWeight="bold" fontSize="19px" textAlign="center">
        <Text as="span" fontSize="10px" bgGradient="linear(180deg, #E30613 21.5%, #B0050F 63.5%, #7D030A 100%)" bgClip="text">
          ●
        </Text>{" "}
        15% SLEVA NA VŠECHNY SLUŽBY AUTOSERVISU PŘI REGISTRACI NA WEBU
      </Box>
    </Box>
  );
};
