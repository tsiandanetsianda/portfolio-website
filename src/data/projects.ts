export interface Project {
  slug: string;
  name: string;
  tagline: string;
  brandColor: string;

  hero: {
    image: string;
    background?: string;
  };

  problem: {
    title: string;
    description: string;
    points: string[];
    image: string;
  };

  solution: {
    title: string;
    description: string;
    highlights: string[];
  };

  features: {
    title: string;
    description: string;
    video: string;
  }[];

  additionalFeatures: string[];

  techStack: {
    name: string;
    icon: string;
    category: 'Frontend' | 'Backend' | 'Infrastructure' | 'Tools';
  }[];

  impact: {
    value: number;
    label: string;
  }[];

  screenshots: string[];

  links: {
    appStore?: string;
    playStore?: string;
    github?: string;
    demo?: string;
    pdf?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export const projects: Record<string, Project> = {
  'uni-info-sa': {
    slug: 'uni-info-sa',
    name: 'Uni Info SA',
    tagline: 'Your AI-powered South African university advisor',
    brandColor: '#68CFFF',

    hero: {
      image: '/info1.JPG',
      background: 'linear-gradient(135deg, #68CFFF 0%, #3E7C99 100%)',
    },

    problem: {
      title: 'Navigating South Africa\'s Complex University Landscape',
      description: 'South African students struggle to find suitable university degrees, track application deadlines across 18+ institutions, and secure funding opportunities—all while managing complex admission requirements and career planning.',
      points: [
        'Information Overload - Students must manually search through 18+ South African universities, each with different degree programs, requirements, and application processes',
        'Missed Deadlines - University application windows vary by institution and faculty, causing students to miss critical deadlines for their dream programs',
        'Funding Accessibility - Bursary and funding opportunities are scattered across multiple platforms, making it difficult for students to discover financial aid options',
        'Career Uncertainty - Students lack personalized guidance on matching their interests and academic strengths to viable career paths and degree programs',
      ],
      image: '/info1.jpg',
    },

    solution: {
      title: 'AI-Powered Career Guidance with Thuso',
      description: 'Uni Info SA combines conversational AI with comprehensive university data to provide personalized degree recommendations, automated deadline tracking, and integrated funding discovery—all through an intuitive mobile experience.',
      highlights: [
        'Intelligent Degree Matching - "Thuso" AI chatbot analyzes student passions, subjects, and academic performance to recommend suitable degrees from 18 South African universities',
        'Automated Calendar Integration - Google Calendar sync creates automatic reminders for application deadlines, ensuring students never miss critical dates',
        'Centralized Funding Discovery - Searchable bursary database with filtering by career path and degree program',
        'Multi-University Database - Real-time degree information from 18+ South African institutions including admission requirements, career prospects, and program duration',
        'Personalized Career Resources - Access to university news, events, and student resources in one mobile app',
      ],
    },

    features: [
      {
        title: 'Smart Program Search',
        description: 'Find your perfect university program with intelligent filtering and matching algorithms.',
        video: '/videos/uni-info-sa/feature1.mp4',
      },
      {
        title: 'University Comparison',
        description: 'Compare programs side-by-side to make informed decisions about your academic future.',
        video: '/videos/uni-info-sa/feature2.mp4',
      },
      {
        title: 'Requirements Calculator',
        description: 'Calculate your eligibility for programs based on your current academic performance.',
        video: '/videos/uni-info-sa/feature3.mp4',
      },
    ],

    additionalFeatures: [
      '/uni-info-sa/HOME.png',
      '/uni-info-sa/COMMUNITIES.png',
      '/uni-info-sa/Q&A Community.png',
      '/uni-info-sa/Events.png',
      '/uni-info-sa/News.png',
      '/uni-info-sa/CALENDAR.png',
      '/uni-info-sa/fav.png',
      '/uni-info-sa/s1.png',
    ],

    techStack: [
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'Expo', icon: 'SiExpo', category: 'Frontend' },
      { name: 'React Navigation', icon: 'SiReact', category: 'Frontend' },
      { name: 'Rasa', icon: 'SiRasa', category: 'Backend' },
      { name: 'Flask', icon: 'SiFlask', category: 'Backend' },
      { name: 'Python', icon: 'SiPython', category: 'Backend' },
      { name: 'TensorFlow', icon: 'SiTensorflow', category: 'Backend' },
      { name: 'MySQL', icon: 'SiMysql', category: 'Backend' },
      { name: 'Redis', icon: 'SiRedis', category: 'Backend' },
      { name: 'Docker', icon: 'SiDocker', category: 'Infrastructure' },
      { name: 'Nginx', icon: 'SiNginx', category: 'Infrastructure' },
      { name: 'AWS', icon: 'SiAmazonaws', category: 'Infrastructure' },
      { name: 'Google Cloud', icon: 'SiGooglecloud', category: 'Tools' },
    ],

    impact: [
      { value: 4000, label: 'Downloads' },
      { value: 5, label: 'Stars (Apple App Store)' },
      { value: 4.4, label: 'Stars (Google Play)' },
    ],

    screenshots: [
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
    ],

    links: {
      appStore: 'https://apps.apple.com/za/app/uni-info-sa/id6744922229',
      playStore: 'https://play.google.com/store/apps/details?id=com.fazlerabbistat.snackf8ddf1fd70a4430bb0cb3a513b517c94&hl=en',
      youtube: 'https://youtu.be/P_uMqbWoCyI?si=4tMUCR0vIvdyc5yo',
      tiktok: 'https://vt.tiktok.com/ZSyJbpHPb/',
    },
  },

  'biki': {
    slug: 'biki',
    name: 'Biki',
    tagline: 'AI-powered nutrition tracking with barcode scanning',
    brandColor: '#43A047',

    hero: {
      image: '/Biki Logo.PNG',
      background: 'linear-gradient(135deg, #66BB6A 0%, #1B5E20 100%)',
    },

    problem: {
      title: 'Managing Nutrition in a Fast-Paced World is Overwhelming',
      description: 'People struggle to track their food intake accurately and make informed nutritional decisions. Manual logging is tedious, product labels are confusing, and understanding how food choices align with health goals requires expertise most don\'t have.',
      points: [
        'Manual nutrition tracking is time-consuming - Writing down every meal and looking up nutritional values takes 10-15 minutes per entry, making consistent tracking nearly impossible',
        'Food labels lack context - Seeing "25g protein" means nothing without understanding if it fits your daily goals, dietary restrictions, or health objectives',
        'Food waste from poor inventory management - Without tracking what\'s in your pantry and expiry dates, households waste 30-40% of purchased food',
        'Generic diet advice doesn\'t work - One-size-fits-all recommendations ignore individual activity levels, allergies, preferences, and specific health goals',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'Instant Nutrition Intelligence Through Your Phone Camera',
      description: 'Biki uses barcode scanning, computer vision, and AI to instantly capture nutritional data, track your food inventory, and generate personalized recommendations based on your health goals, dietary preferences, and what\'s already in your kitchen.',
      highlights: [
        'Instant barcode scanning - Point your camera at any product to automatically fetch complete nutritional information from OpenFoodFacts database',
        'Smart inventory management - Track food items with expiry dates and consumption patterns; receive notifications before items expire',
        'AI-powered personalized recommendations - AI system running on Raspberry Pi generates meal suggestions, recipe ideas, and nutrition tips tailored to your goals and available ingredients',
        'Comprehensive nutrition tracking - Monitor daily calories, protein, carbohydrates, and fats with visual progress indicators and weekly trend analysis',
        'Recipe discovery from your inventory - Get recipe suggestions based on what\'s actually in your kitchen, reducing food waste and meal planning effort',
      ],
    },

    features: [
      {
        title: 'Instant Barcode Scanning',
        description: 'Point your camera at any product barcode to instantly fetch complete nutritional information and add items to your inventory.',
        video: '/videos/biki/feature1.mp4',
      },
      {
        title: 'Smart Inventory Tracking',
        description: 'Manage your food inventory with expiry date tracking and automatic notifications to reduce waste.',
        video: '/videos/biki/feature2.mp4',
      },
      {
        title: 'AI Nutrition Assistant',
        description: 'Get personalized meal suggestions and recipe recommendations powered by AI running on Raspberry Pi.',
        video: '/videos/biki/feature3.mp4',
      },
    ],

    additionalFeatures: [
      '/biki/HOME.png',
      '/biki/INVENTORY.png',
      '/biki/ANALYSIS.png',
      '/biki/MEAL.png',
      '/biki/CHAT.png',
      '/biki/NOTIFICATIONS.png',
      '/biki/TIPS.png',
    ],

    techStack: [
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'Expo', icon: 'SiExpo', category: 'Frontend' },
      { name: 'React Navigation', icon: 'SiReact', category: 'Frontend' },
      { name: 'Axios', icon: 'SiAxios', category: 'Frontend' },
      { name: 'FastAPI', icon: 'SiFastapi', category: 'Backend' },
      { name: 'Python', icon: 'SiPython', category: 'Backend' },
      { name: 'SQLAlchemy', icon: 'SiSqlalchemy', category: 'Backend' },
      { name: 'SQLite', icon: 'SiSqlite', category: 'Backend' },
      { name: 'TensorFlow', icon: 'SiTensorflow', category: 'Backend' },
      { name: 'TinyLlama', icon: 'SiHuggingface', category: 'Backend' },
      { name: 'Scikit-learn', icon: 'SiScikitlearn', category: 'Backend' },
      { name: 'YOLO', icon: 'SiYolo', category: 'Backend' },
      { name: 'Raspberry Pi', icon: 'SiRaspberrypi', category: 'Infrastructure' },
      { name: 'Docker', icon: 'SiDocker', category: 'Infrastructure' },
      { name: 'Git', icon: 'SiGit', category: 'Tools' },
      { name: 'Pytest', icon: 'SiPytest', category: 'Tools' },
    ],

    impact: [
      { value: 100, label: 'Nutrition items contributed to OpenFoodFacts' },
    ],

    screenshots: [
      '/placeholder-biki-1.jpg',
      '/placeholder-biki-2.jpg',
      '/placeholder-biki-3.jpg',
      '/placeholder-biki-4.jpg',
      '/placeholder-biki-5.jpg',
    ],

    links: {
      github: 'https://github.com/yourusername/biki',
      demo: 'https://biki-demo.com',
    },
  },

  'safepay': {
    slug: 'safepay',
    name: 'SafePay Connect',
    tagline: 'AI-powered protection against scams and fraud',
    brandColor: '#6B5CFF',

    hero: {
      image: '/SAFEPAY CONNECT LOGO 2.png',
      background: 'linear-gradient(135deg, #8B7EFF 0%, #3730A3 100%)',
    },

    problem: {
      title: 'Financial Fraud is Costing South Africans Millions',
      description: 'South African users face an epidemic of sophisticated financial scams through WhatsApp, SMS, and online platforms, with many losing money to fraud due to lack of real-time detection, education, and secure transaction verification systems.',
      points: [
        'Undetected Scam Messages - Users receive convincing phishing messages, fake job offers, and government impersonation scams through WhatsApp/SMS without any warning system',
        'Unsafe Payment Requests - No verification layer exists between receiving a payment request and losing money to fraudulent transfers',
        'Language Barriers - Financial security tools only work in English, excluding millions of South Africans who speak isiZulu, isiXhosa, Afrikaans, Sesotho, or Setswana',
        'Dangerous ATM Locations - Users withdraw cash at unsafe locations without knowing which ATMs/banks have security features like CCTV, 24/7 security, or proper lighting',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'Multi-Layered AI Security for Every Transaction',
      description: 'SafePay Connect combines AI-powered scam detection, secure payment verification, and multilingual voice support to protect users before, during, and after financial transactions while educating them about trending scams.',
      highlights: [
        'AI Scam Detector - Real-time analysis of messages using pattern matching to detect 8 scam types (phishing, prize scams, credential theft, investment fraud, etc.) with risk scores and recommendations',
        'Payment Verification System - Two-step payment confirmation with detailed review screens, QR code verification, and transaction history tracking before money leaves accounts',
        'Multilingual Voice Support - Voice commands and transaction alerts in 6 South African languages (English, isiZulu, isiXhosa, Afrikaans, Sesotho, Setswana) with auto-translation',
        'SafeRoute Finder - Location-based ATM/bank finder with safety scoring (0-100%) tracking security features like CCTV, lighting, and 24/7 security',
        'Trending Scams Education - Real-time alerts about 8 common scams (WhatsApp jobs, fake SARS refunds, romance scams, crypto Ponzis) with prevention tips and dashboard notifications',
      ],
    },

    features: [
      {
        title: 'Quick Send',
        description: 'Send money instantly to anyone using just their phone number or email address.',
        video: '/videos/safepay/feature1.mp4',
      },
      {
        title: 'Split Bills',
        description: 'Easily split expenses with friends and request payments with automatic calculations.',
        video: '/videos/safepay/feature2.mp4',
      },
      {
        title: 'Transaction History',
        description: 'Track all your transactions with detailed history and spending analytics.',
        video: '/videos/safepay/feature3.mp4',
      },
    ],

    additionalFeatures: [
      '/safepay/home.png',
      '/safepay/wallet.png',
      '/safepay/accept-decline.png',
    ],

    techStack: [
      { name: 'React', icon: 'SiReact', category: 'Frontend' },
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'Expo', icon: 'SiExpo', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'JavaScript', icon: 'SiJavascript', category: 'Frontend' },
      { name: 'React Navigation', icon: 'SiReact', category: 'Frontend' },
      { name: 'Java', icon: 'SiJava', category: 'Backend' },
      { name: 'Docker', icon: 'SiDocker', category: 'Infrastructure' },
      { name: 'Babel', icon: 'SiBabel', category: 'Infrastructure' },
      { name: 'Git', icon: 'SiGit', category: 'Infrastructure' },
    ],

    impact: [
      { value: 1, label: '🏆 InterVarsity Hackathon 2025 - FinTech Winner' },
    ],

    screenshots: [
      '/placeholder-safepay-1.jpg',
      '/placeholder-safepay-2.jpg',
      '/placeholder-safepay-3.jpg',
      '/placeholder-safepay-4.jpg',
      '/placeholder-safepay-5.jpg',
    ],

    links: {
      github: 'https://github.com/ilewlum/SafePay_Connect',
    },
  },

  'seaclear': {
    slug: 'seaclear',
    name: 'SeaClear',
    tagline: 'Real-time beach water quality for Cape Town',
    brandColor: '#3b82f6',

    hero: {
      image: '/SeaClear Logo.png',
      background: 'linear-gradient(135deg, #60a5fa 0%, #1e40af 100%)',
    },

    problem: {
      title: 'Beachgoers Risk Health Without Water Quality Data',
      description: 'Cape Town beachgoers lack real-time access to water quality information, putting them at risk of swimming in contaminated water and exposure to harmful bacteria like E. coli.',
      points: [
        'No centralized platform - Beach water quality data scattered across multiple sources or unavailable to the public',
        'Health risks - Swimmers unknowingly expose themselves to unsafe E. coli levels and contaminated water',
        'Outdated information - No way to check the most recent water testing results before visiting a beach',
        'Limited transparency - Water quality managers lack tools to efficiently share data and engage with the community',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'Real-Time Water Quality Monitoring Platform',
      description: 'SeaClear provides a centralized platform where beachgoers can instantly check water quality status for Cape Town beaches, view historical data, and stay informed through community engagement and educational resources.',
      highlights: [
        'Live water quality status - Color-coded safety indicators (Safe/Not Safe) with last sampled dates for all Cape Town beaches using real City of Cape Town data',
        'Historical tracking - View 5+ historical readings per beach including E. coli levels, pH, and temperature data',
        'Real-time weather integration - Live weather conditions displayed for each beach including temperature, conditions, and forecasts',
        'Admin dashboard - Water quality managers can upload PDF reports, moderate community posts, and track beachgoer reports',
        'Community engagement - User comments system and educational content about water quality, safety, and conservation',
      ],
    },

    features: [
      {
        title: 'Real-Time Water Quality Dashboard',
        description: 'Access live water quality data for all Cape Town beaches with color-coded safety indicators, historical tracking, and smart search functionality.',
        video: '/videos/seaclear/seaclear-search.mp4',
      },
    ],

    additionalFeatures: [],

    techStack: [
      { name: 'React', icon: 'SiReact', category: 'Frontend' },
      { name: 'React Router', icon: 'SiReactrouter', category: 'Frontend' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'Frontend' },
      { name: 'Axios', icon: 'SiAxios', category: 'Frontend' },
      { name: 'Lodash', icon: 'SiLodash', category: 'Frontend' },
      { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend' },
      { name: 'Python', icon: 'SiPython', category: 'Backend' },
      { name: 'RESTful API', icon: 'SiOpenapiinitiative', category: 'Backend' },
      { name: 'PostCSS', icon: 'SiPostcss', category: 'Tools' },
      { name: 'Docker', icon: 'SiDocker', category: 'Infrastructure' },
    ],

    impact: [
      { value: 87, label: '% University of Cape Town Final Year Project' },
    ],

    screenshots: [
      '/placeholder-seaclear-1.jpg',
      '/placeholder-seaclear-2.jpg',
      '/placeholder-seaclear-3.jpg',
      '/placeholder-seaclear-4.jpg',
      '/placeholder-seaclear-5.jpg',
    ],

    links: {
      github: 'https://github.com/tsiandanetsianda/SeaClear',
    },
  },

  'gridsmart': {
    slug: 'gridsmart',
    name: 'GridSmart Energy',
    tagline: 'Decentralized Energy Trading & Smart Grid Management',
    brandColor: '#1F3A52',

    hero: {
      image: '/GridSmartEnergy Logo Design.png',
      background: 'linear-gradient(135deg, #2C5F7C 0%, #0F1419 100%)',
    },

    problem: {
      title: 'Grid Overload & Inefficient Energy Distribution',
      description: 'Traditional power grids face critical transformer overload during peak hours, leading to blackouts and energy waste. Consumers lack visibility into grid status and have no mechanisms to participate in load balancing or trade excess energy with neighbors.',
      points: [
        'Transformer Overload Risk - Power transformers frequently exceed 85% capacity during peak hours (6-9 AM, 6-9 PM), risking blackouts and infrastructure damage',
        'Wasted Renewable Energy - Households with solar panels cannot easily sell excess energy generation to neighbors, leading to wasted clean energy',
        'No Consumer Incentives - Users have no financial motivation to reduce consumption during critical grid stress periods',
        'Lack of Predictive Intelligence - Grid operators and consumers lack AI-powered forecasting to anticipate and prevent overload events',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'BlockDAG-Powered Smart Grid Ecosystem',
      description: 'GridSmartEnergy combines real-time blockchain grid monitoring, P2P energy marketplace, and AI predictions to create a transparent, incentivized ecosystem where consumers actively participate in grid stability while earning BDAG tokens.',
      highlights: [
        'Real-Time Transformer Monitoring - Live grid load tracking connected directly to BlockDAG blockchain, displaying current capacity (0-100%) with critical/warning/normal status indicators',
        'Transparent Outage Tracking - Immutable blockchain records of every power outage by location, creating accountability and preventing discriminatory load shedding practices through verifiable data',
        'P2P Energy Trading Marketplace - Decentralized marketplace enabling neighbors to trade energy within their transformer zone, with dynamic pricing (R10-15/kWh) and location-based matching. Enabled by Raspberry Pi-based energy monitors (~R6,700 per unit) installed at each household',
        'Blockchain Incentive Rewards - Users commit to energy reduction during peak hours and earn BDAG tokens (2.5 BDAG/kWh base rate, 1.5x multiplier during peaks) recorded immutably on-chain',
        'AI Predictive Intelligence - XGBoost machine learning forecasts grid overload events 1-48 hours in advance with 99.2% accuracy, enabling proactive load balancing and alerting users to upcoming incentive opportunities',
        'Integrated BDAG Wallet - Built-in cryptocurrency wallet for managing earnings, viewing transaction history, tracking energy savings (kWh), and monitoring blockchain connection status',
      ],
    },

    features: [
      {
        title: 'Energy Dashboard',
        description: 'Monitor your home energy consumption in real-time with detailed breakdowns by device.',
        video: '/videos/gridsmart/feature1.mp4',
      },
      {
        title: 'Smart Scheduling',
        description: 'Automatically schedule high-energy appliances during off-peak hours to save money.',
        video: '/videos/gridsmart/feature2.mp4',
      },
      {
        title: 'Solar Integration',
        description: 'Optimize solar panel usage and track energy generation vs. consumption.',
        video: '/videos/gridsmart/feature3.mp4',
      },
    ],

    additionalFeatures: [
      '/gridsmart/average.png',
      '/gridsmart/History.png',
      '/gridsmart/power-outage.png',
      '/gridsmart/rewards.png',
      '/gridsmart/Transformer.png',
    ],

    techStack: [
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'React', icon: 'SiReact', category: 'Frontend' },
      { name: 'Expo', icon: 'SiExpo', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'React Navigation', icon: 'SiReact', category: 'Frontend' },
      { name: 'Reanimated', icon: 'SiReact', category: 'Frontend' },
      { name: 'BlockDAG', icon: 'SiBlockchaindotcom', category: 'Backend' },
      { name: 'Ethers.js', icon: 'SiEthereum', category: 'Backend' },
      { name: 'Smart Contracts', icon: 'SiSolidity', category: 'Backend' },
      { name: 'XGBoost', icon: 'SiPython', category: 'Backend' },
      { name: 'Python', icon: 'SiPython', category: 'Backend' },
      { name: 'Raspberry Pi', icon: 'SiRaspberrypi', category: 'Infrastructure' },
      { name: 'Babel', icon: 'SiBabel', category: 'Tools' },
      { name: 'Expo CLI', icon: 'SiExpo', category: 'Tools' },
    ],

    impact: [
      { value: 4, label: '2025 BlockDAG Hackathon' },
    ],

    screenshots: [
      '/placeholder-gridsmart-1.jpg',
      '/placeholder-gridsmart-2.jpg',
      '/placeholder-gridsmart-3.jpg',
      '/placeholder-gridsmart-4.jpg',
      '/placeholder-gridsmart-5.jpg',
    ],

    links: {
      github: 'https://github.com/qsm-beg/BlockDag',
    },
  },
};

export const projectsList = Object.values(projects);

export const getProject = (slug: string): Project | undefined => {
  return projects[slug];
};

export const getAllProjectSlugs = (): string[] => {
  return Object.keys(projects);
};
