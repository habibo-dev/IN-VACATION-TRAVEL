import type { MetadataRoute } from 'next';
import { services, destinations } from '@/lib/data';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://in-vacation-travel-habibo-devs-projects.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: `${base}/services`, lastModified: now },
    { url: `${base}/destinations`, lastModified: now },
    { url: `${base}/offres`, lastModified: now },
    { url: `${base}/demande`, lastModified: now },
    { url: `${base}/a-propos`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/ar`, lastModified: now },
    ...services.map((service) => ({ url: `${base}/services/${service.id}`, lastModified: now })),
    ...destinations.map((destination) => ({ url: `${base}/destinations/${destination.id}`, lastModified: now })),
  ];
}
