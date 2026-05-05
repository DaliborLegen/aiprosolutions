import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aiprosolutions.si/sitemap.xml",
    host: "https://aiprosolutions.si",
  };
}
