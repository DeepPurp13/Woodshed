/** Route + label for `CommonScrollAnimatedLink` (`to` prop). */
export type FooterRouteLink = {
  to: string;
  label: string;
};

export const footer2DiscoverLinks: FooterRouteLink[] = [
  { to: "/index-creative-agency", label: "Home" },
  { to: "/about-us", label: "About us" },
  { to: "/works-default", label: "Case studies" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Our team" },
  { to: "/blog-standard", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export const footer4DiscoverLinks: FooterRouteLink[] = [
  { to: "/index-personal-portfolio", label: "Home" },
  { to: "/about-me", label: "About me" },
  { to: "/works-default", label: "Case studies" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/blog-standard", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export const footer3PrimaryLinks: FooterRouteLink[] = [
  { to: "/index-branding-studio", label: "Home" },
  { to: "/works-default", label: "Works" },
  { to: "/about-us", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const footerNavInfoLinks: FooterRouteLink[] = [
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
];

export type FooterContactEntry = {
  href: string;
  label: string;
};

export const footerStaticContactEntries: FooterContactEntry[] = [
  {
    href: "mailto:example@example.com?subject=Message%20from%20your%20site",
    label: "hello@azurio.com",
  },
  { href: "tel:+12127089400", label: "+1 212-708-9400" },
];
