/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Kang DU (Ken)',
  author: 'Kang DU (Ken)',
  headerTitle: 'Kang DU Website',
  description:
    "Kang Du (杜康) is a Ph.D. candidate in Computer Science at HKUST (GZ), advised by Prof. Zeyu Wang, and the Head of the Simulation Platform at Ant Lingbo (Ant Group). My research focuses on differentiable and inverse rendering for photorealistic simulation and light-aware world models, bridging computer graphics, vision, and robotics.",
  language: 'en-us',
  theme: 'system', // system, dark or light

  // Use HTTPS for canonical/OG correctness
  siteUrl: 'https://kangdu.top',

  siteRepo: 'https://github.com/dukang/dukang.github.io',
  siteLogo: '/static/images/logo.png',
  // 1200x630 recommended for social previews
  socialBanner: '/static/images/twitter-card.png',

  // Socials
  email: 'dukang92@gmail.com',
  github: 'https://github.com/dukang',
  linkedin: 'https://www.linkedin.com/in/kang-du-473a9647/',
  // For twitter meta creator (@handle). Used by your SEO helper.
  twitterHandle: '@kangdu_lab',

  // Locale for OG
  locale: 'en-US',

  // 🔑 NEW: keywords to boost SEO topical relevance
  keywords: [
    'GS-ID',
    '3D Gaussian Splatting',
    'Gaussian Splatting',
    'Inverse Rendering',
    'Illumination Decomposition',
    'Computer Vision',
    'Computer Graphics',
    '3D Reconstruction',
    'Simulation',
    'PBR',
    'VPL',
    'SG',
  ],

  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
      // src: 'https://us.umami.is/script.js'
    },
    // plausibleAnalytics: { plausibleDataDomain: '' },
    // simpleAnalytics: {},
    // posthogAnalytics: { posthogProjectApiKey: '' },
    // googleAnalytics: { googleAnalyticsId: '' },
  },

  newsletter: {
    provider: 'buttondown',
  },

  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },

  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
    // provider: 'algolia',
    // algoliaConfig: { appId: '', apiKey: '', indexName: '' },
  },
}

module.exports = siteMetadata
