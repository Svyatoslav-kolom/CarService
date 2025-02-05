import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        primary: {
            white: "#FFF",
            black: "#0A0B14",
            gray: "#D9D9D9",
            cardGray: "#2B2F35",
            red: "#E30613",
        },
        gradients: {  // Исправление (plural form)
            red: "linear-gradient(180deg, #E30613 21.5%, #B0050F 63.5%, #7D030A 100%)",
            gray1: "linear-gradient(360deg, #535B65 0%, #292D32 55%, #767B83 100%)",
            gray2: "linear-gradient(360deg, #0A0B14 0%, #91929B 100%)",
        },
    },
    fonts: {
        heading: "'Poppins', sans-serif",
        body: "'Inter', sans-serif",
    },
});

export default customTheme;
