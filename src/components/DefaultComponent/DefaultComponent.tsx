import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const DefaultComponent: FC = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bgImage="url('/background/default.webp')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
        zIndex: 0, // Помещаем затемнение ниже контента
      }}
    >
      {/* Часы работы в правом верхнем углу */}
      <Box
        position="absolute"
        top={4}
        right={4}
        p={2}
        color="white"
        fontSize="0.9em"
        textAlign="right"
        border="1px solid white"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        borderRadius="md"
        display="flex"
        flexDirection="column"
        minW="120px"
        zIndex={1} // Убираем затемнение с этого элемента
      >
        <Text>Po-Pá &nbsp;08.00-18.00</Text>
        <Text>So &nbsp;09.00-16.00</Text>
        <Text>Ne - <b>ZAVŘENO</b></Text>
      </Box>

      <Heading
        fontSize="24px"
        fontWeight="bold"
        textAlign="center"
        color="primary.white"
        mt="auto"
        textTransform="uppercase"
        zIndex={1} // Текст не будет затемняться
      >
        ● Servisujeme vozidla všech značek
      </Heading>
    </Box>
  );
};
