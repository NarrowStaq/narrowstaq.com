// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.narrowstaq.com',
  // Old WordPress URLs, kept alive so existing links and search results land somewhere useful
  redirects: {
    '/about': '/#about',
    '/services': '/#services',
    '/contact': '/#contact',
    '/custom-web-development': '/#services',
    '/performance-and-optimization': '/#services',
    '/automation-integrations': '/#services',
    '/ongoing-support-and-maintenance': '/#services',
  },
});
