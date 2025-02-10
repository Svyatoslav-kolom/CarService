import { IconButton, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import registerIcon0 from "/icons/RegistrationButton/register-0.svg";
import registerDoneIcon from "/icons/RegistrationButton/register-done.svg";

interface RegistrationComponentProps {
  onOpen: () => void;
  isRegistered: boolean;
}

const MotionImage = motion(Image);

export const RegistrationComponent = ({ onOpen, isRegistered }: RegistrationComponentProps) => {
  return (
    <IconButton
      aria-label="Register"
      icon={
        <MotionImage
          src={isRegistered ? registerDoneIcon : registerIcon0}
          boxSize="80px"
          animate={
            !isRegistered
              ? {
                  scale: [1, 1.1, 1], // Пульсация
                }
              : {}
          }
          transition={
            !isRegistered
              ? {
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      }
      colorScheme="transparent"
      onClick={() => {
        if (!isRegistered) {
          onOpen();
        }
      }}
    />
  );
};
