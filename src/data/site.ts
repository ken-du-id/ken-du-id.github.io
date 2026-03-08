export type LinkMap = {
  paper?: string;
  code?: string;
  project?: string;
  dataset?: string;
  scholar?: string;
  github?: string;
  cv?: string;
  email?: string;
  linkedin?: string;
  website?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: number;
  authors?: string;
  description?: string;
  status?: string;
  links?: LinkMap;
};

export type Project = {
  name: string;
  organization?: string;
  year: string;
  description: string;
  links?: LinkMap;
};

export type NewsItem = {
  date: string;
  text: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
};

export const site = {
  name: 'Kang Du',
  chineseName: '杜康',
  title: 'PhD Candidate · Researcher · Investor',
  subtitle: 'Building light-aware world models for real environments.',
  email: 'kdu800@connect.hkust-gz.edu.cn',
  secondaryEmail: '270382069@qq.com',
  location: 'Guangzhou · Shenzhen · Hong Kong',
  website: 'https://kangdu.top/',
  description:
    'I work across neural rendering, Gaussian Splatting, inverse rendering, and simulation systems for robotics and embodied AI. My goal is to turn real-world captures into editable world models for controllable relighting, scalable data generation, and robust policy learning.',

  longBio: [
    'I am a PhD candidate in Computer Science at HKUST (Guangzhou), advised by Prof. Zeyu Wang, and currently lead simulation platform work at Ant Group. My research sits at the intersection of computer graphics, vision, and robotics, with a focus on light-aware Gaussian Splatting, inverse rendering, and differentiable simulation.',
    'Before and alongside academia, I have lived several different careers: founder, big-tech builder, MBA, investor, and quantitative practitioner. These experiences shaped how I think about systems — not only how to make them work, but how to make them scalable, useful, and durable.',
    'I previously built and managed startup teams, worked across ByteDance, Meituan, Tencent, and now Ant Group, and later returned to campus to study both business and research. I completed an MBA at the University of Hong Kong and am now pursuing my PhD to study how the physical world can be reconstructed, edited, and simulated.',
    'Beyond research, I am interested in entrepreneurship, investing, Web3, and quantitative systems. Outside work, I train powerlifting and strength sports, currently working toward a 400kg total across the three lifts.'
  ],

  links: {
    website: 'https://kangdu.top/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=JAuiewQAAAAJ',
    github: 'https://github.com/dukang',
    cv: 'https://kangdu.top/static/doc/CV-WX-Kank-Du.pdf',
    email: 'mailto:kdu800@connect.hkust-gz.edu.cn',
    linkedin: 'https://www.linkedin.com/in/kang-du-473a9647/'
  },

  heroStats: [
    { label: 'Research', value: 'Light-aware world models' },
    { label: 'Core stack', value: '3DGS · inverse rendering · simulation' },
    { label: 'Identity', value: 'PhD Candidate · Researcher · Investor' }
  ],

  researchAreas: [
    'Neural Rendering',
    '3D Gaussian Splatting',
    'Inverse Rendering',
    'Differentiable Simulation',
    'Embodied AI',
    'World Models',
    'Simulation Systems'
  ],

  experience: [
    {
      period: '2025–Present',
      role: 'Lead of Simulation Platform',
      organization: 'Ant Group'
    },
    {
      period: '2024–Present',
      role: 'PhD Candidate in Computer Science',
      organization: 'HKUST (Guangzhou)'
    },
    {
      period: '2023–2025',
      role: 'MBA',
      organization: 'The University of Hong Kong'
    },
    {
      period: '2025',
      role: 'Technical Advisor, UAV/Robotics Simulation',
      organization: 'Meituan'
    },
    {
      period: '2022–2025',
      role: '3D Simulation & Rendering Expert',
      organization: 'Tencent'
    },
    {
      period: '2021–2022',
      role: 'Real-time Rendering Engine Lead',
      organization: 'Meituan'
    },
    {
      period: '2020–2021',
      role: 'Graphics Rendering Expert',
      organization: 'ByteDance'
    }
  ] as ExperienceItem[],

  publications: [
    {
      title:
        'UAVLight: A Multi-illumination UAV Dataset for Robust 3D Reconstruction',
      venue: 'CVPR',
      year: 2026,
      authors: 'Kang Du and collaborators',
      description:
        'A large-scale UAV dataset capturing outdoor scenes under multiple illumination conditions, designed for evaluating illumination-robust 3D reconstruction methods.',
      links: {
        paper: '#',
        code: '#',
        dataset: '#',
        project: '#'
      }
    },
    {
      title:
        'LA-GS: Light-Aware Gaussian Splatting for Scene Reconstruction under Various Lighting Conditions',
      venue: 'Under Review',
      year: 2026,
      authors: 'Kang Du and collaborators',
      description:
        'A light-aware Gaussian splatting framework that reconstructs outdoor scenes captured under varying illumination, enabling consistent geometry and relightable rendering.',
      links: {
        paper: '#',
        code: '#',
        project: '#'
      }
    },
    {
      title:
        'TIID: Transformer-based Intrinsic Image Decomposition for Multi-view Inverse Rendering',
      venue: 'Under Review',
      year: 2026,
      authors: 'Kang Du and collaborators',
      description:
        'A transformer-based multi-view intrinsic decomposition framework that predicts consistent reflectance and illumination for inverse rendering.',
      links: {
        paper: '#',
        code: '#',
        project: '#'
      }
    },
    {
      title:
        'GS-ID: Illumination Decomposition on Gaussian Splatting via Diffusion Prior and Parametric Light Source Optimization',
      venue: 'ICCV',
      year: 2025,
      authors: 'Kang Du and collaborators',
      description:
        'A Gaussian Splatting based intrinsic decomposition method that separates lighting, material, and geometry, enabling controllable relighting of real-world scenes.',
      links: {
        paper: '#',
        code: '#',
        project: '#'
      }
    }
  ] as Publication[],

  projects: [
    {
      name: 'Editable Real-World Simulation Engine',
      organization: 'Ant Group',
      year: '2025–Present',
      description:
        'A 3DGS + differentiable rendering pipeline that converts real captures into editable simulation assets, enabling scalable training data generation for embodied AI.',
      links: {}
    },
    {
      name: 'UAV World Model Simulation System',
      organization: 'Meituan',
      year: '2024–2025',
      description:
        'A UAV simulation platform with controllable lighting and weather for robustness evaluation in perception and control.',
      links: {}
    },
    {
      name: 'Cloud-Edge Collaborative Rendering System',
      organization: 'Tencent',
      year: '2022–2024',
      description:
        'A low-latency cloud-edge rendering architecture achieving sub-15 ms interaction latency with major cost reduction.',
      links: {}
    },
    {
      name: '3D Scene AIGC Generation Pipeline',
      organization: 'Tencent',
      year: '2023',
      description:
        'An LLM + PCG based pipeline for scalable generation of controllable 3D scenes and assets.',
      links: {}
    },
    {
      name: 'Quantitative Research & Web3 Exploration',
      organization: 'Independent',
      year: 'Ongoing',
      description:
        'Ongoing work on crypto quantitative systems, market structure, and Web3-native experimentation at the intersection of technology, capital, and systems thinking.',
      links: {}
    }
  ] as Project[],

  news: [
    {
      date: '2026',
      text: 'UAVLight was accepted to CVPR 2026.'
    },
    {
      date: '2025',
      text: 'GS-ID was accepted to ICCV 2025.'
    },
    {
      date: '2025',
      text: 'Joined Ant Group to lead embodied simulation platform work.'
    },
    {
      date: '2025',
      text: 'Submitted LA-GS and TIID as the next steps toward editable world models and multi-view inverse rendering.'
    },
    {
      date: '2024',
      text: 'Started PhD studies at HKUST (Guangzhou).'
    }
  ] as NewsItem[]
};

export const publicationsByYear = [...site.publications].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return a.title.localeCompare(b.title);
});