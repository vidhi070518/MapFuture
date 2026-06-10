import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://map-future.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://map-future.vercel.app/careers/data-analyst',
      lastModified: new Date(),
    },
    {
      url: 'https://map-future.vercel.app/careers/ai-engineer',
      lastModified: new Date(),
    },
    {
      url: 'https://map-future.vercel.app/careers/cybersecurity-analyst',
      lastModified: new Date(),
    },
  ]
}
