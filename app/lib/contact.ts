export const CONTACT_INFO = {
  brand: "Growth Rocket",
  company: "Parashift Technologies B.V.",
  kvkno: "KvK Number: 42002389",
  addressLines: [
    "World Trade Center",
    "Prinses Margrietplantsoen 33",
    "2595 AM 's-Gravenhage, Netherlands",
  ],
  addressLinesNl: [
    "World Trade Center",
    "Prinses Margrietplantsoen 33",
    "2595 AM 's-Gravenhage, Nederland",
  ],
  emails: ["sales@getgrowthrocket.com", "support@getgrowthrocket.com"],
  phone: "+31 85 744 4176",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/getgrowthrocket/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/getgrowthrocket/about/?viewAsMember=true",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@getgrowthrocket",
    },
    {
      label: "X / Twitter",
      href: "https://x.com/getgrowthrocket",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/31857444176",
    },
  ],
} as const;

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
