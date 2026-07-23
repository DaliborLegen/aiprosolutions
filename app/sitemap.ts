import type { MetadataRoute } from "next";
import { storitve } from "./data/storitve";
import { articles } from "./data/blog";

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
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...storitve.map((s) => ({
      url: `${baseUrl}/storitve/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
