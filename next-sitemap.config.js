/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cosmo-mix.ru',
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/manifest.json',
          '/service-worker.js',
          '/sw.js',
          '/*?utm*',
          '/*?etext*',
          '/*?ybaip*',
          '/*&utm*',
          '/*&etext*',
          '/*&ybaip*',
          '/casino',
          '/casinest',
          '/casinoet',
          '/virtuals',
          '/*%20',
          '/*?page=support',
        ],
      },
    ],
  },
};
