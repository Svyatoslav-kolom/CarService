interface HexagonItem {
    title: string;
    icon: string;
    link: string;
}

export const hexagons: HexagonItem[] = [
    { title: "O NÁS", icon: "icons/CatalogIcons/about-us.svg", link: "/about" },
    { title: "KONTAKTY", icon: "icons/CatalogIcons/contacts.svg", link: "/contacts" },
    { title: "KDE NÁS NAJDETE", icon: "icons/CatalogIcons/location.svg", link: "/location" },
    { title: "NAŠE SLUŽBY", icon: "icons/CatalogIcons/services.svg", link: "/services" },
    { title: "SPOLUPRÁCE S FIRMAMI", icon: "icons/CatalogIcons/firms.svg", link: "/partnerships" },
    { title: "ČIŠTĚNÍ DPF FILTRU", icon: "icons/CatalogIcons/dpf.svg", link: "/dpf-cleaning" },
    { title: "ODTAHOVÁ SLUŽBA", icon: "icons/CatalogIcons/towing.svg", link: "/towing-service" }
];