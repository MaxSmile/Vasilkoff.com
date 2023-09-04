
const { getBlogIds } = require('./data/blogs');
const { getPortfoliosIds } = require('./data/portfolios');
const { getServicesIds } = require('./data/services');

module.exports = {
  siteUrl: 'https://vasilkoff.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {

    const blogIds = getBlogIds().map(id => {
      return {
        "loc": `/blog/${id}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined

      }
    });
    const portfoliosIds = getPortfoliosIds().map(id => {
      return {
        "loc": `/portfolio/${id}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined

      }
    });
    const servicesIds = getServicesIds().map(id => {
      return {
        "loc": `/services/${id}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined

      }
    });

    return [...servicesIds, ...blogIds, ...portfoliosIds]; 
  },
}
