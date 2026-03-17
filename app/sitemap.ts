import type { MetadataRoute } from "next";

const BASE = "https://systempos.gruponava.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/legal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
