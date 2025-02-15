import { Text, Link } from "@chakra-ui/react";

export const headerLinks = [
    {
        icon: "icons/HeaderIcons/Phone.svg",
        label: "Телефон",
        content: (
            <>
                <Text>SVI AUTOSERVIS</Text>
                <Link href="tel:+420739696649">+420 739 696 649</Link>
            </>
        ),
    },
    {
        icon: "icons/HeaderIcons/Mail.svg",
        label: "Email",
        content: (
            <>
                <Link href="mailto:sviautoservis@email.cz" >sviautoservis@email.cz</Link>
                <Text>Fakturační adresa</Text>
                <Link href="mailto:fakturacesviservis@seznam.cz">fakturacesviservis@seznam.cz</Link>
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
