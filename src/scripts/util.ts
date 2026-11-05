export function readingTime(body = ''): string {
  const words = body.replace(/<[^>]+>|[#>*_`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
export function fmtDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
import { defaultImages } from '../data/site';
/** A post's own image, or its category's default artwork. */
export const postImage = (d: { image?: string; category: string }) => d.image || defaultImages.insight[d.category];

export const byDate = <T extends { data: { date: Date } }>(a: T, b: T) => b.data.date.valueOf() - a.data.date.valueOf();
