import { HStack, Image, Text, VStack, useTheme, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const MotionBox = motion(Box);

export const Card: FC<Props> = ({ icon, title, description }) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack
      bg="primary.black"
      transition="all 0.3s ease-in-out"
      w="100%"
      pt="20px"
      pb={isOpen ? 0 : 5}
      gap={0}
      borderRadius="md"
      onClick={() => setIsOpen(prev => !prev)}
      cursor="pointer"
      overflow="hidden"
      _active={{
        border: "none"
      }}
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
        <Text color="primary.white" textAlign="center">
          {title}
        </Text>
      </HStack>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            overflow="hidden"
            w="100%"
          >
            <Box
              p={4}
              bg="primary.gray"
              color="primary.black"
              borderBottomRadius="md"
              textAlign="center"
              transition="all 0.3s ease-in-out"
            >
              <Text>
                {description}
              </Text>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </VStack>
  );
};
