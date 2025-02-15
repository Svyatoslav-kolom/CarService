import { Box, HStack, Image, Text, VStack, useTheme } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const MotionBox = motion.create(Box);

export const Card: FC<Props> = ({ icon, title, description, isOpen, onClick }) => {
  const theme = useTheme();

  return (
    <VStack
      bg="primary.black"
      transition="all 0.3s ease-in-out"
      w="100%"
      minH="150px"
      position="relative"
      pt="20px"
      pb={5}
      gap={0}
      borderRadius="md"
      onClick={onClick}
      cursor="pointer"
      overflow="visible"
      _active={{ border: "none" }}
    >
      <Image src={icon} boxSize={73} />

      <HStack
        mt="10px"
        bgGradient={theme.colors.gradients.red}
        h={50}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="primary.white" textAlign="center" fontSize="16px">
          {title}
        </Text>
      </HStack>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, transform: "translateY(-10px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: "translateY(-10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            overflow="hidden"
            position="absolute"
            top="100%"
            left={0}
            w="100%"
            zIndex={10}
          >
            <Box
              p={4}
              bg="primary.gray"
              color="primary.black"
              borderBottomRadius="md"
              textAlign="center"
              boxShadow="lg"
            >
              <Text textAlign="left">{description}</Text>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </VStack>
  );
};
