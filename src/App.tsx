import { Box, useTheme, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Head } from "./components/Head";
import { Header } from "./components/Header";
import { Catalog } from "./components/Catalog";
import { InfoComponent } from "./components/InfoComponent";
import { RegistrationModal } from "./components/RegistrationModal"; // Импортируем компонент

function App() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const handleSelectComponent = (component: string) => {
    console.log("Вибраний компонент:", component);
    setSelectedComponent(component);
  };

  return (
    <Box bgGradient={theme.colors.gradients.gray1} pb={5}>
      <Header onOpen={() => setIsOpen(true)} />
        
      <Head />

      <VStack spacing={6}>
        <Catalog onSelectComponent={handleSelectComponent} />
        <InfoComponent selectedComponent={selectedComponent} />
      </VStack>

      <RegistrationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
}

export default App;
