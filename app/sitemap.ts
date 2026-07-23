import type { MetadataRoute } from "next";
import { storitve } from "./data/storitve";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aiprosolutions.si";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...storitve.map((s) => ({
      url: `${baseUrl}/storitve/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
