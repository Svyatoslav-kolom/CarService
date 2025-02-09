interface HexagonItem {
    title: string;
    icon: string;
    link: string;
}

export const hexagons: HexagonItem[] = [
    { title: "O NÁS", icon: "../../../public/icons/CatalogIcons/about-us.svg", link: "/about" },
    { title: "KONTAKTY", icon: "../../../public/icons/CatalogIcons/contacts.svg", link: "/contacts" },
    { title: "KDE NÁS NAJDETE", icon: "../../../public/icons/CatalogIcons/location.svg", link: "/location" },
    { title: "NAŠE SLUŽBY", icon: "../../../public/icons/CatalogIcons/services.svg", link: "/services" },
    { title: "SPOLUPRÁCE S FIRMAMI", icon: "../../../public/icons/CatalogIcons/firms.svg", link: "/partnerships" },
    { title: "ČIŠTĚNÍ DPF FILTRU", icon: "../../../public/icons/CatalogIcons/dpf.svg", link: "/dpf-cleaning" },
    { title: "ODTAHOVÁ SLUŽBA", icon: "../../../public/icons/CatalogIcons/towing.svg", link: "/towing-service" }
];