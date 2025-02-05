import { Box, HStack, Image, Text, useTheme } from "@chakra-ui/react";
import { IconBtn } from "../IconBtn";
import UserIcon from "../../assets/icons/UserIcon";

interface HeaderProps {
  onOpen: () => void;
}

export const Header = ({ onOpen }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Box
      height={50}
      px={4}
      py={2}
      backgroundImage="url('src/assets/background/HeaderBackground.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      boxShadow="0px 5px 100px black"
      zIndex={10}
      position="relative"
    >
      <Image src="src/assets/icons/Logo.svg" />

      <HStack gap="4">
        <Text
          fontSize="16px"
          fontWeight="700"
          lineHeight="19px"
          color={theme.colors.primary.white}
        >
          SVIAUTOSERVIS <br />
          Ostrava-Hulváky
        </Text>
        <IconBtn IconComponent={UserIcon} onClick={onOpen} />
      </HStack>
    </Box>
  );
};
