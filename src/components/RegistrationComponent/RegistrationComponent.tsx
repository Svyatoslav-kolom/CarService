import { IconButton, Image } from "@chakra-ui/react";
import registerIcon from "/icons/RegistrationButton/register.svg"
import registerDoneIcon from "/icons/RegistrationButton/register-done.svg";

interface RegistrationComponentProps {
  onOpen: () => void;
  isRegistered: boolean;
}

export const RegistrationComponent = ({ onOpen, isRegistered }: RegistrationComponentProps) => {
  return (
    <IconButton
      aria-label="Register"
      icon={<Image src={isRegistered ? registerDoneIcon : registerIcon} boxSize="60px" />}
      colorScheme="transparent"
      onClick={() => {
        if (!isRegistered) {
          onOpen();
        }
      }}
    />
  );
};
