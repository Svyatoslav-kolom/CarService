import { Text } from "@chakra-ui/react";

export const headerLinks = [
    {
        icon: "icons/HeaderIcons/Phone.svg",
        label: "Телефон",
        content: (
            <>
                <Text>SVI AUTOSERVIS</Text>
                <Text>+420 739 696 649</Text>
            </>
        ),
    },
    {
        icon: "icons/HeaderIcons/Mail.svg",
        label: "Email",
        content: (
            <>
                <Text>sviautoservis@email.cz</Text>
                <Text>Fakturační adresa</Text>
                <Text>fakturacesviservis@seznam.cz</Text>
            </>
        ),
    },
    {
        icon: "icons/HeaderIcons/Time.svg",
        label: "Время работы",
        content: (
            <>
                <Text fontWeight="bold">Otevírací doba</Text>
                <Text fontSize="12px">Po-Pá  08.00-18.00</Text>
                <Text fontSize="12px" >So  09.00-16.00</Text>
            </>
        ),
    },
];