import { Box, Stack, useTheme } from "@chakra-ui/react";
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

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
    setIsOpen(false);
  };

  const elementsMargin = { base: 6, md: 12 };
  const pageBottomPadding = { base: 5, md: 12, xl: 40 };
  const marginX = { base: 4, md: "45px" };

  return (
    <Box bgGradient={{base: theme.colors.gradients.gray1, xl: theme.colors.gradients.desktopBackground}} pb={pageBottomPadding}>
      <Header />

      <Stack
        direction={{ base: "column", xl: "row" }}
        mx={marginX}
        spacing={{ base: 3, md: 12, xl: 0 }}
        justify={{ xl: "space-between" }}
        mt={elementsMargin}
      >
        <Box>
          <Catalog onSelectComponent={handleSelectComponent} />
        </Box>
        <Stack alignItems="stretch">
          <InfoComponent selectedComponent={selectedComponent} />
        </Stack>

      </Stack>

      <Box position="fixed" bottom="50px" right="20px" zIndex={10}>
        <RegistrationComponent onOpen={() => setIsOpen(true)} isRegistered={isRegistered} />
      </Box>

      <RegistrationModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSuccess={handleRegistrationSuccess} />
    </Box>
  );
}

export default App;
