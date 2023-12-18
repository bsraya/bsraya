import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bsraya.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://bsraya.com/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'https://bsraya.com/experience',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.9
    },
    {
      url: 'https://bsraya.com/posts',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://bsraya.com/works',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]
}