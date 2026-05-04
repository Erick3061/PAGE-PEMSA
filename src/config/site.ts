// import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "PEMSA",
  nameLarge: "Protección Electrónica Monterrey S.A. de C.V.",
  description:
    "Protección Electrónica Monterrey es una empresa mexicana fundada en 1985 que se especializa en el ciclo completo (suministro, instalación, mantenimiento y monitoreo) de sistemas de seguridad electrónica con alcance en todo el país.",
  url: "https://www.pem-sa.com/",
  lang: "es",
  locale: "es_MX",
  author: "Erick Andrade",
  twitter: "@Erick-A",
  // ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Inicio", href: "/" },
    {
      text: "Nosotros", href: "/about", navs: [
        { text: "Historia", href: "/about/history" },
        { text: "Certificados", href: "/about/certs" },
        { text: "Permisos", href: "/about/permits" },
      ]
    },
    { text: "Servicios", href: "/services" },
    { text: "Contacto", href: "/contact" },
    { text: "legal", href: "/legal", isShow: false },
  ],
};
