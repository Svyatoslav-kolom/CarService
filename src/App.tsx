import { Box, useTheme, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "./components/Header";
import { Catalog } from "./components/Catalog";
import { InfoComponent } from "./components/InfoComponent";
import { RegistrationModal } from "./components/RegistrationModal";
import { RegistrationComponent } from "./components/RegistrationComponent";

function App() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const handleSelectComponent = (component: string) => {
    console.log("Выбранный компонент:", component);
    setSelectedComponent(component);
  };

  // Функция вызывается при успешной регистрации
  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
    setIsOpen(false); // Закрываем модальное окно
  };

  return (
    <Box bgGradient={theme.colors.gradients.gray1} pb={5}>
      <Header />

      <VStack spacing={3}>
        <Box mt={6}>
          <Catalog onSelectComponent={handleSelectComponent} />
        </Box>
        <InfoComponent selectedComponent={selectedComponent} />
      </VStack>

      <Box position="fixed" bottom="50px" right="20px">
        <RegistrationComponent onOpen={() => setIsOpen(true)} isRegistered={isRegistered} />
      </Box>


      {/* Модальное окно с передачей onSuccess */}
      <RegistrationModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSuccess={handleRegistrationSuccess} />
    </Box>
  );
}

export default App;
