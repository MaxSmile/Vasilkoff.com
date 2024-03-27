/** @type {import('next-sitemap').IConfig} */
const { getBlogSlugs, getMemberSlugs, getPortfolioSlugs, getServiceSlugs } = require("./src/lib/fsGetter.js");

function realSlug(slug) {
  return slug.replace(/\.md$/, "");
}

module.exports = {
  siteUrl: 'https://vasilkoff.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  
  additionalPaths: async (config) => {
    const staticPages = [
      { url: '/', priority: 1.0 },
      { url: '/about-us', priority: 0.5 },
      { url: '/contact-us', priority: 0.9 },
      { url: '/about-us', priority: 0.9 },
      { url: '/faq', priority: 0.5 },
      { url: '/terms-conditions', priority: 0.9 },
      { url: '/privacy-policy', priority: 0.9 },
      { url: '/read-fast', priority: 0.5 },
      { url: '/html2md', priority: 0.9 },
      { url: '/md2html', priority: 0.9 },

    ].map(page => ({
      loc: page.url,
      changefreq: 'daily',
      priority: page.priority,
      lastmod: new Date().toISOString()
    }));

    const blogIds = getBlogSlugs().map((slug) => ({
      "loc": `/blog/${realSlug(slug)}`,
        changefreq: config.changefreq,
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }));


    const portfoliosIds = getPortfolioSlugs().map((slug) => ({
      "loc": `/portfolio/${realSlug(slug)}`,
        changefreq: config.changefreq,
        priority: 0.6,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }));


    const membersIds = getMemberSlugs().map(slug => {
      return {
        "loc": `/team/${realSlug(slug)}`,
        changefreq: config.changefreq,
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined
      }
    });


    const servicesIds = getServiceSlugs().map(slug => {
      return {
        "loc": `/services/${realSlug(slug)}`,
        changefreq: config.changefreq,
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined

      }
    });

    return [
      ...staticPages,
      ...servicesIds, 
      ...membersIds,
      ...blogIds,
      ...portfoliosIds
    ]; 
  },
}
