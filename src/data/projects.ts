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
  };
}

export const projects: Record<string, Project> = {
  'uni-info-sa': {
    slug: 'uni-info-sa',
    name: 'Uni Info SA',
    tagline: 'Your gateway to South African university programs',
    brandColor: '#5AB5E1',

    hero: {
      image: '/UNIINFOSA1.jpg',
      background: 'linear-gradient(135deg, #5AB5E1 0%, #4A9FCC 100%)',
    },

    problem: {
      title: 'The Problem',
      description: 'South African students face significant challenges when choosing university programs, leading to confusion and poor decisions about their academic future.',
      points: [
        'Limited access to comprehensive program information across universities',
        'Complex and varying admission requirements difficult to understand',
        'Lack of personalized guidance and recommendations',
        'Time-consuming research process with scattered information sources',
      ],
      image: '/info1.jpg',
    },

    solution: {
      title: 'The Solution',
      description: 'Uni Info SA provides an intelligent, centralized platform that simplifies university program discovery with personalized recommendations and comprehensive information.',
      highlights: [
        'Smart program matching based on student preferences and qualifications',
        'Unified database of South African university programs',
        'Clear, organized admission requirements for each program',
        'Personalized recommendations powered by machine learning',
        'Save and compare favorite programs side-by-side',
      ],
    },

    features: [
      {
        title: 'Smart Program Search',
        description: 'Find your perfect university program with intelligent filtering and matching algorithms.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'University Comparison',
        description: 'Compare programs side-by-side to make informed decisions about your academic future.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Requirements Calculator',
        description: 'Calculate your eligibility for programs based on your current academic performance.',
        video: '/videos/placeholder/sample.mp4',
      },
    ],

    additionalFeatures: [
      'Offline access to saved programs',
      'Push notifications for application deadlines',
      'Integrated bursary and scholarship information',
      'Career path insights for each program',
      'Student reviews and ratings',
      'Campus virtual tours',
      'Application checklist and tracking',
    ],

    techStack: [
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'Expo', icon: 'SiExpo', category: 'Frontend' },
      { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend' },
      { name: 'Express', icon: 'SiExpress', category: 'Backend' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Backend' },
      { name: 'AWS EC2', icon: 'SiAmazonaws', category: 'Infrastructure' },
      { name: 'TensorFlow', icon: 'SiTensorflow', category: 'Tools' },
      { name: 'Figma', icon: 'SiFigma', category: 'Tools' },
    ],

    impact: [
      { value: 10000, label: 'Downloads' },
      { value: 8500, label: 'Active Users' },
      { value: 95, label: '% Satisfaction' },
      { value: 50, label: 'Universities' },
    ],

    screenshots: [
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
      '/UNIINFOSA1.jpg',
    ],

    links: {
      appStore: 'https://apps.apple.com/za/app/uni-info-sa/id6739985450',
      github: 'https://github.com/yourusername/uni-info-sa',
    },
  },

  'biki': {
    slug: 'biki',
    name: 'Biki',
    tagline: 'Smart bike sharing for sustainable urban mobility',
    brandColor: '#4CAF50',

    hero: {
      image: '/placeholder-biki-hero.jpg',
      background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    },

    problem: {
      title: 'The Problem',
      description: 'Urban commuters struggle with traffic congestion, parking challenges, and lack of affordable, eco-friendly transportation options for short distances.',
      points: [
        'Limited access to convenient short-distance transportation',
        'High costs associated with car ownership and maintenance',
        'Traffic congestion in urban areas',
        'Environmental concerns with traditional transportation',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'The Solution',
      description: 'Biki offers a seamless bike-sharing platform with smart docking stations, real-time availability tracking, and eco-friendly transportation solutions.',
      highlights: [
        'GPS-enabled bike tracking and navigation',
        'Flexible rental plans for casual and regular riders',
        'Smart docking stations throughout the city',
        'Integrated payment system',
        'Carbon footprint tracking and rewards',
      ],
    },

    features: [
      {
        title: 'Find Nearby Bikes',
        description: 'Locate available bikes instantly with real-time GPS tracking and availability updates.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Quick Unlock',
        description: 'Unlock bikes with a simple QR code scan and start your journey within seconds.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Eco Rewards',
        description: 'Earn rewards for every ride and track your positive environmental impact.',
        video: '/videos/placeholder/sample.mp4',
      },
    ],

    additionalFeatures: [
      'Multi-language support',
      'Route planning and navigation',
      'Safety tips and cycling etiquette',
      'Group ride coordination',
      'Bike health monitoring',
    ],

    techStack: [
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend' },
      { name: 'MongoDB', icon: 'SiMongodb', category: 'Backend' },
      { name: 'Google Maps API', icon: 'SiGoogle', category: 'Tools' },
      { name: 'Firebase', icon: 'SiFirebase', category: 'Infrastructure' },
    ],

    impact: [
      { value: 5000, label: 'Active Riders' },
      { value: 25, label: 'Bike Stations' },
      { value: 100, label: 'Bikes Available' },
      { value: 30, label: 'Tons CO₂ Saved' },
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
    name: 'SafePay',
    tagline: 'Secure digital payments made simple',
    brandColor: '#6A63F6',

    hero: {
      image: '/placeholder-safepay-hero.jpg',
      background: 'linear-gradient(135deg, #6A63F6 0%, #5246E0 100%)',
    },

    problem: {
      title: 'The Problem',
      description: 'Traditional payment methods are slow, insecure, and lack transparency, creating friction in digital transactions and concerns about financial security.',
      points: [
        'Security vulnerabilities in existing payment systems',
        'Complex and slow transaction processes',
        'Limited transparency in transaction fees and status',
        'Lack of user-friendly payment interfaces',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'The Solution',
      description: 'SafePay delivers a cutting-edge payment platform with military-grade encryption, instant transactions, and an intuitive interface for seamless digital payments.',
      highlights: [
        'End-to-end encryption for all transactions',
        'Instant payment processing and confirmation',
        'Multi-currency support',
        'Transparent fee structure',
        'Biometric authentication',
      ],
    },

    features: [
      {
        title: 'Quick Send',
        description: 'Send money instantly to anyone using just their phone number or email address.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Split Bills',
        description: 'Easily split expenses with friends and request payments with automatic calculations.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Transaction History',
        description: 'Track all your transactions with detailed history and spending analytics.',
        video: '/videos/placeholder/sample.mp4',
      },
    ],

    additionalFeatures: [
      'Recurring payment scheduling',
      'Budget tracking and insights',
      'QR code payments',
      'Merchant integration',
      'Fraud detection and prevention',
      'Customer support chat',
    ],

    techStack: [
      { name: 'React Native', icon: 'SiReact', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Backend' },
      { name: 'Redis', icon: 'SiRedis', category: 'Backend' },
      { name: 'AWS', icon: 'SiAmazonaws', category: 'Infrastructure' },
      { name: 'Stripe', icon: 'SiStripe', category: 'Tools' },
    ],

    impact: [
      { value: 15000, label: 'Users' },
      { value: 50000, label: 'Transactions' },
      { value: 99, label: '% Uptime' },
      { value: 2, label: 'Avg. Transaction Time (s)' },
    ],

    screenshots: [
      '/placeholder-safepay-1.jpg',
      '/placeholder-safepay-2.jpg',
      '/placeholder-safepay-3.jpg',
      '/placeholder-safepay-4.jpg',
      '/placeholder-safepay-5.jpg',
    ],

    links: {
      github: 'https://github.com/yourusername/safepay',
      demo: 'https://safepay-demo.com',
    },
  },

  'seaclear': {
    slug: 'seaclear',
    name: 'SeaClear',
    tagline: 'AI-powered ocean cleanup monitoring',
    brandColor: '#5B9BD5',

    hero: {
      image: '/placeholder-seaclear-hero.jpg',
      background: 'linear-gradient(135deg, #5B9BD5 0%, #4178BE 100%)',
    },

    problem: {
      title: 'The Problem',
      description: 'Ocean pollution is a critical global challenge, but cleanup efforts lack real-time monitoring, data-driven insights, and efficient coordination.',
      points: [
        'Inefficient tracking of ocean cleanup operations',
        'Limited visibility into pollution hotspots',
        'Poor coordination between cleanup organizations',
        'Lack of data-driven decision making',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'The Solution',
      description: 'SeaClear uses AI and satellite imagery to monitor ocean cleanup efforts, identify pollution hotspots, and coordinate cleanup operations effectively.',
      highlights: [
        'Real-time satellite imagery analysis',
        'AI-powered pollution detection',
        'Interactive cleanup mission planning',
        'Impact tracking and reporting',
        'Collaboration tools for organizations',
      ],
    },

    features: [
      {
        title: 'Pollution Heatmap',
        description: 'Visualize ocean pollution levels in real-time using AI-analyzed satellite data.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Mission Planning',
        description: 'Plan and coordinate cleanup missions with optimal route planning and resource allocation.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Impact Dashboard',
        description: 'Track cleanup progress and environmental impact with comprehensive analytics.',
        video: '/videos/placeholder/sample.mp4',
      },
    ],

    additionalFeatures: [
      'Community volunteer coordination',
      'Pollution prediction modeling',
      'Integration with cleanup equipment',
      'Educational resources',
      'Partnerships with NGOs',
    ],

    techStack: [
      { name: 'React', icon: 'SiReact', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'Python', icon: 'SiPython', category: 'Backend' },
      { name: 'TensorFlow', icon: 'SiTensorflow', category: 'Backend' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Backend' },
      { name: 'Google Cloud', icon: 'SiGooglecloud', category: 'Infrastructure' },
      { name: 'Mapbox', icon: 'SiMapbox', category: 'Tools' },
    ],

    impact: [
      { value: 500, label: 'Cleanup Missions' },
      { value: 100, label: 'Tons Collected' },
      { value: 25, label: 'Partner Organizations' },
      { value: 1000, label: 'Volunteers' },
    ],

    screenshots: [
      '/placeholder-seaclear-1.jpg',
      '/placeholder-seaclear-2.jpg',
      '/placeholder-seaclear-3.jpg',
      '/placeholder-seaclear-4.jpg',
      '/placeholder-seaclear-5.jpg',
    ],

    links: {
      github: 'https://github.com/yourusername/seaclear',
      demo: 'https://seaclear-demo.com',
    },
  },

  'gridsmart': {
    slug: 'gridsmart',
    name: 'GridSmart',
    tagline: 'Intelligent energy management for smart homes',
    brandColor: '#1F3A52',

    hero: {
      image: '/placeholder-gridsmart-hero.jpg',
      background: 'linear-gradient(135deg, #1F3A52 0%, #152838 100%)',
    },

    problem: {
      title: 'The Problem',
      description: 'Homeowners struggle with high energy costs, lack of visibility into consumption patterns, and difficulty optimizing energy usage for sustainability.',
      points: [
        'High and unpredictable energy bills',
        'No real-time visibility into energy consumption',
        'Difficulty identifying energy waste',
        'Limited integration with renewable energy sources',
      ],
      image: '/placeholder-problem.jpg',
    },

    solution: {
      title: 'The Solution',
      description: 'GridSmart provides intelligent energy monitoring and optimization using IoT sensors, machine learning, and automated controls for maximum efficiency.',
      highlights: [
        'Real-time energy consumption monitoring',
        'AI-powered optimization recommendations',
        'Automated device control and scheduling',
        'Solar panel integration and optimization',
        'Predictive maintenance alerts',
      ],
    },

    features: [
      {
        title: 'Energy Dashboard',
        description: 'Monitor your home energy consumption in real-time with detailed breakdowns by device.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Smart Scheduling',
        description: 'Automatically schedule high-energy appliances during off-peak hours to save money.',
        video: '/videos/placeholder/sample.mp4',
      },
      {
        title: 'Solar Integration',
        description: 'Optimize solar panel usage and track energy generation vs. consumption.',
        video: '/videos/placeholder/sample.mp4',
      },
    ],

    additionalFeatures: [
      'Voice assistant integration',
      'Weather-based optimization',
      'Energy usage predictions',
      'Cost savings calculator',
      'Carbon footprint tracking',
    ],

    techStack: [
      { name: 'React', icon: 'SiReact', category: 'Frontend' },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
      { name: 'Python', icon: 'SiPython', category: 'Backend' },
      { name: 'MQTT', icon: 'SiMqtt', category: 'Backend' },
      { name: 'InfluxDB', icon: 'SiInfluxdb', category: 'Backend' },
      { name: 'Arduino', icon: 'SiArduino', category: 'Tools' },
      { name: 'Raspberry Pi', icon: 'SiRaspberrypi', category: 'Tools' },
    ],

    impact: [
      { value: 2000, label: 'Homes Connected' },
      { value: 35, label: '% Avg. Energy Savings' },
      { value: 500, label: 'Tons CO₂ Reduced' },
      { value: 1200, label: 'Avg. Savings ($/year)' },
    ],

    screenshots: [
      '/placeholder-gridsmart-1.jpg',
      '/placeholder-gridsmart-2.jpg',
      '/placeholder-gridsmart-3.jpg',
      '/placeholder-gridsmart-4.jpg',
      '/placeholder-gridsmart-5.jpg',
    ],

    links: {
      github: 'https://github.com/yourusername/gridsmart',
      demo: 'https://gridsmart-demo.com',
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
