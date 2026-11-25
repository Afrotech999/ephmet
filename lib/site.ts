export const site = {
  url: "https://www.ephmetdji.com",
  name: "Ephmet Red Sea FZCO",
  shortName: "EPHMET",
  phone: "+253 7750 6510",
  tel: "+25377506510",
  whatsapp: "25377506510",
  email: "ephmetdji@gmail.com",
  youtubeId: "086dMAnmI6g",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Djibouti+Free+Zone",
  /** The studio that built the site. Add its web address to `url` to make the credit a link. */
  builtBy: { name: "Loom Solutions", logo: "/img/loom-solutions.png", url: "" },
} as const;

export function whatsappLink(text?: string): string {
  return `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function mailLink(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
