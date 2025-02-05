interface HexagonItem {
    title: string;
    icon: string;
    link: string;
}

export const hexagons: HexagonItem[] = [
    { title: "O NÁS", icon: "src/assets/icons/CatalogIcons/about-us.svg", link: "/about" },
    { title: "KONTAKTY", icon: "src/assets/icons/CatalogIcons/contacts.svg", link: "/contacts" },
    { title: "KDE NÁS NAJDETE", icon: "src/assets/icons/CatalogIcons/location.svg", link: "/location" },
    { title: "NAŠE SLUŽBY", icon: "src/assets/icons/CatalogIcons/services.svg", link: "/services" },
    { title: "SPOLUPRÁCE S FIRMAMI", icon: "src/assets/icons/CatalogIcons/firms.svg", link: "/partnerships" },
    { title: "ČIŠTĚNÍ DPF FILTRU", icon: "src/assets/icons/CatalogIcons/dpf.svg", link: "/dpf-cleaning" },
    { title: "ODTAHOVÁ SLUŽBA", icon: "src/assets/icons/CatalogIcons/towing.svg", link: "/towing-service" }
];