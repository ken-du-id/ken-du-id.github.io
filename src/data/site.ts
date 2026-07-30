export type LinkMap = {
  paper?: string;
  code?: string;
  project?: string;
  dataset?: string;
  video?: string;
  scholar?: string;
  github?: string;
  cv?: string;
  email?: string;
  linkedin?: string;
  website?: string;
};

export type WorkFact = {
  label: string;
  text: string;
};

export type WorkItem = {
  /** Short display name, e.g. "UAVLight" */
  title: string;
  /** Full paper/system title shown under the short name */
  fullTitle?: string;
  type: 'publication' | 'system';
  /** Sort/display period, newest first, e.g. "2026" or "2022–2024" */
  period: string;
  /** Prominent venue badge for publications, e.g. "CVPR 2026" */
  venue?: string;
  /** Collaborating or hosting organization, shown as a labeled tag */
  organization?: string;
  /** Relationship to the organization: "In collaboration with", "At", "Founder" ... */
  orgLabel?: string;
  /** Logo path under public/, e.g. "/logos/tencent.svg" */
  orgLogo?: string;
  /** Multiple logos when more than one organization is involved */
  orgLogos?: string[];
  /** Optional link on the organization name */
  orgUrl?: string;
  role?: string;
  authors?: string;
  /** Thumbnail path under public/, e.g. "/images/uavlight.svg" */
  image?: string;
  summary: string;
  facts?: WorkFact[];
  keywords?: string[];
  links?: LinkMap;
  /** Award or press recognition, shown as a short line with an optional source link */
  award?: { text: string; url?: string };
  /** Open items awaiting confirmed information; rendered as visible TODO notes */
  todos?: string[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  /** Optional link on the organization name */
  url?: string;
};

export const site = {
  name: 'Kang Du',
  chineseName: '杜康',
  title: 'Graphics Researcher & Simulation Systems Builder',
  affiliation: 'PhD candidate, HKUST (Guangzhou)',
  subtitle:
    'Building editable, light-aware world models — from research prototypes to production-scale simulation systems.',
  email: 'kdu800@connect.hkust-gz.edu.cn',
  secondaryEmail: '270382069@qq.com',
  location: 'Guangzhou · Shenzhen · Hong Kong',
  website: 'https://kangdu.top/',
  description:
    'I am a graphics researcher and systems builder working on inverse rendering, neural rendering, 3D Gaussian Splatting, relighting, and editable world models, with nearly a decade of experience building production-scale 3D systems.',

  /** Search-engine metadata. Keep the description under ~160 characters. */
  seo: {
    title: 'Kang Du 杜康 — Graphics Researcher & Simulation Systems Builder',
    description:
      'Kang Du (杜康) is a PhD candidate at HKUST (Guangzhou) working on inverse rendering, neural rendering, 3D Gaussian Splatting, relighting, and editable world models.',
    keywords: [
      'Kang Du',
      '杜康',
      'inverse rendering',
      'neural rendering',
      '3D Gaussian Splatting',
      'relighting',
      'editable world models',
      'intrinsic image decomposition',
      'simulation for robotics',
      'embodied AI',
      'computer graphics',
      'computer vision',
      'HKUST Guangzhou',
      '香港科技大学（广州）'
    ]
  },

  longBio: [
    'I am a PhD candidate at <a href="https://www.hkust-gz.edu.cn/">HKUST (Guangzhou)</a>, advised by <a href="https://cislab.hkust-gz.edu.cn/members/zeyu-wang/">Prof. Zeyu Wang</a> and co-advised by <a href="https://csse.szu.edu.cn/staff/ruizhenhu/">Prof. Ruizhen Hu</a>. My research is on <span class="hl">inverse rendering</span>, <span class="hl">neural rendering</span>, and <span class="hl">3D Gaussian Splatting</span>, with a focus on <span class="hl">light-aware and editable world models</span> — turning real-world captures into scenes that can be decomposed, edited, relit, and re-simulated for robotics and embodied AI.',
    'Before returning to academia, I spent nearly ten years building 3D systems in industry. Most recently I led the simulation platform at <span class="org"><img src="/logos/lingbot.svg" alt="" aria-hidden="true"><a href="https://technology.robbyant.com/">LingBot</a></span> (2025–2026), where I built the data simulation team from the ground up. Earlier I worked on device–cloud collaborative rendering at <span class="org"><img src="/logos/tencent.svg" alt="" aria-hidden="true">Tencent</span> (2022–2024), real-time rendering engines at <span class="org"><img src="/logos/meituan.svg" alt="" aria-hidden="true">Meituan</span> (2021–2022), and graphics rendering at <span class="org"><img src="/logos/bytedance.svg" alt="" aria-hidden="true">ByteDance</span> (2020–2021). Before that I founded <a href="https://www.sohu.com/a/249318960_100250580">云深间造</a> (2016–2020), a VR startup for virtual property viewing, which received the Technology Innovation Award at the 4th China Home Furnishings Innovation Summit.',
    'I obtained my MBA from the University of Hong Kong in 2024, and my bachelor’s degree from Texas A&amp;M University in 2014.'
  ],

  links: {
    website: 'https://kangdu.top/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=JAuiewQAAAAJ',
    github: 'https://github.com/dukang',
    cv: 'https://kangdu.top/static/doc/CV-WX-Kank-Du.pdf',
    email: 'mailto:kdu800@connect.hkust-gz.edu.cn',
    linkedin: 'https://www.linkedin.com/in/kang-du-473a9647/'
  },

  researchAreas: [
    'Computer Graphics',
    'Inverse Rendering',
    'Editable World Models',
    'Simulation for Robotics & Embodied AI'
  ],

  experience: [
    {
      period: '2025–Jun 2026',
      role: 'Simulation Platform Lead',
      organization: 'LingBot 蚂蚁灵波'
    },
    {
      period: '2024–Present',
      role: 'PhD Candidate',
      organization: 'HKUST (Guangzhou)'
    },
    {
      period: '2023–2024',
      role: 'MBA',
      organization: 'The University of Hong Kong'
    },
    {
      period: '2022–2024',
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
    },
    {
      period: '2016–2020',
      role: 'Founder',
      organization: '云深间造 (VR startup)',
      url: 'https://www.sohu.com/a/249318960_100250580'
    },
    {
      period: '2014',
      role: 'BSc',
      organization: 'Texas A&M University'
    }
  ] as ExperienceItem[],

  work: [
    {
      title: 'MVID',
      fullTitle: 'MVID: Feed-Forward Multi-View Intrinsic Image Decomposition',
      type: 'publication',
      period: '2026',
      venue: 'SIGGRAPH Asia 2026',
      organization: 'Tencent',
      orgLabel: 'In collaboration with',
      orgLogo: '/logos/tencent.svg',
      authors: 'Kang Du and collaborators',
      image: '/images/mvid.mp4',
      summary:
        'Feed-forward decomposition of multi-view images into consistent albedo, shading, and specular residual — no per-scene optimization.',
      links: {}
    },
    {
      title: 'UAVLight',
      fullTitle:
        'UAVLight: A Benchmark for Illumination-Robust 3D Reconstruction in Unmanned Aerial Vehicle (UAV) Scenes',
      type: 'publication',
      period: '2026',
      venue: 'CVPR 2026',
      organization: 'Meituan',
      orgLabel: 'In collaboration with',
      orgLogo: '/logos/meituan.svg',
      authors:
        'Kang Du, Xue Liao, Junpeng Xia, Chaozheng Guo, Yi Gu, Yirui Guan, Duotun Wang, Sheng Huang, Zeyu Wang',
      image: '/images/uavlight.png',
      summary:
        'A benchmark for illumination-robust reconstruction in real UAV scenes: large-scale outdoor captures across multiple time slots under changing sunlight and shadows.',
      links: {
        paper: 'https://arxiv.org/abs/2511.21565',
        code: 'https://github.com/uavlight/UAVLight',
        dataset: 'https://huggingface.co/datasets/dukang92/UAVLight',
        project: 'https://uavlight.github.io/',
        video: 'https://huggingface.co/datasets/dukang92/UAVLight/blob/main/assets/uavlight.mp4'
      }
    },
    {
      title: 'InstGS',
      fullTitle: 'InstGS: Shared-Template Gaussian Instancing for Object-Redundancy-Free Rendering',
      type: 'publication',
      period: '2026',
      venue: 'ECCV 2026',
      authors: "Zi'ang Lu, Zhang Qian, Kang Du, Dong Liang, John Li, Xinyao Wei, Zeyu Wang, Jinyuan Jia",
      image: '/images/instgs.svg',
      summary:
        'Shared-template Gaussian instancing that removes object redundancy, enabling compact and efficient rendering of repeated content.',
      links: {}
    },
    {
      title: 'Editable Real-World Simulation System',
      type: 'system',
      period: '2026',
      organization: 'LingBot 蚂蚁灵波',
      orgLabel: 'At',
      orgLogo: '/logos/lingbot.svg',
      orgUrl: 'https://technology.robbyant.com/',
      role: 'Simulation platform lead — built the data simulation team from the ground up and established the simulation platform.',
      image: '/images/ant-sim.png',
      summary:
        'Connects real-environment capture, reconstruction, scene editing, and simulation data production for robot data augmentation and teleoperation collection.',
      links: {}
    },
    {
      title: 'GS-ID',
      fullTitle:
        'GS-ID: Illumination Decomposition on Gaussian Splatting via Adaptive Light Aggregation and Diffusion-Guided Material Priors',
      type: 'publication',
      period: '2025',
      venue: 'ICCV 2025',
      organization: 'Tencent AI Lab',
      orgLabel: 'In collaboration with',
      orgLogo: '/logos/tencent.svg',
      authors: 'Kang Du, Zhihao Liang, Yulin Shen, Zeyu Wang',
      image: '/images/gs-id.mp4',
      summary:
        'Inverse rendering on 3D Gaussian Splatting: recovers geometry, material, and lighting from multi-view images for material editing and relighting.',
      links: {
        paper: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Du_GS-ID_Illumination_Decomposition_on_Gaussian_Splatting_via_Adaptive_Light_Aggregation_ICCV_2025_paper.pdf',
        code: 'https://github.com/dukang/GS-ID',
        project: 'https://kangdu.top/gsid/'
      }
    },
    {
      title: 'Device–Cloud Collaborative Rendering System',
      type: 'system',
      period: '2022–2024',
      organization: 'Tencent',
      orgLabel: 'At',
      orgLogo: '/logos/tencent.svg',
      role: '3D simulation & rendering expert',
      image: '/images/cloud-edge.png',
      summary:
        'Splits rendering between device and cloud for cloud rendering and cloud gaming: real-time rendering, low-latency streaming, and compute scheduling in production.',
      links: {}
    },
    {
      title: 'Web 3D Editor & Content Tools',
      type: 'system',
      period: '2020–2022',
      organization: 'ByteDance · Meituan',
      orgLabel: 'At',
      orgLogos: ['/logos/bytedance.svg', '/logos/meituan.svg'],
      role: 'Graphics rendering expert (ByteDance) · Real-time rendering engine lead (Meituan)',
      image: '/images/web3d-editor.png',
      summary:
        'Browser-based 3D editors letting non-expert teams build, edit, and publish 3D scenes — web real-time rendering, editor architecture, and asset pipelines.',
      links: {}
    },
    {
      title: 'Virtual Property Viewing VR System',
      type: 'system',
      period: '2016–2020',
      organization: '云深间造 (startup)',
      orgLabel: 'Founder at',
      orgLogo: '/logos/yunshen.svg',
      role: 'Founder',
      image: '/images/vr-viewing.mp4',
      summary:
        'A commercial VR product for virtual property viewing: real-time 3D spaces and interactive walkthroughs — the starting point of my path toward editable world models.',
      award: {
        text: 'Technology Innovation Award (company) and Innovation Elite Award (founder), 4th China Home Furnishings Innovation Summit, 2019',
        url: 'https://www.chinafloor.cn/news/detail_newsID-371345.htm'
      },
      links: {}
    }
  ] as WorkItem[]
};
