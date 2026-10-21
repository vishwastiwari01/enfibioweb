import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'PROJ-THANDAI',
    slug: 'thandai',
    cat: 'coldchain',
    code: 'THANDAI',
    title: 'THAND.AI',
    subtitle: 'Smart Portable Freezer',
    domain: 'AGRITECH · COLD CHAIN',
    category: 'Cold Chain',
    badge: 'FLAGSHIP',
    desc: 'AI-enabled, thermoelectric portable refrigeration prototype engineered for agricultural produce, dairy preservation, and medical cold chains.',
    image: '/thandai.png',
    video: '/thandaiexplode.mp4',
    simulationUrl: '/simulations/thandai-3d-anatomy.html',
    overview: 'THAND.AI is a prototype-stage portable refrigeration system developed by Enfibio Technologies. Engineered using solid-state Peltier thermoelectric cooling modules, it delivers reliable low-temperature holding without dangerous chemical refrigerants or fragile compressors.',
    problem: 'Over 30% of perishable agricultural yield and temperature-sensitive biologicals are lost in transit due to broken first-mile cold chains. Conventional compressor refrigerators are bulky, vulnerable to vibration on rural roads, and demand heavy grid power.',
    solution: 'By pairing solid-state thermoelectric elements with closed-loop predictive thermal control, THAND.AI maintains steady cooling in a rugged, portable form factor that can operate on multi-source DC, battery packs, or solar inputs.',
    features: [
      'Solid-state Peltier thermoelectric cooling without moving compressor parts',
      'Intelligent PID temperature maintenance with adaptive ambient sensing',
      'Tested to achieve ~3°C cooling under controlled research test conditions',
      'Compact ~5-liter internal chamber volume tailored for field transport',
      'Ruggedized weather-resistant casing designed for farm and rural transport'
    ],
    specs: {
      'Observed Temp': '~3°C',
      'Capacity': '~5 Liters',
      'Cooling Engine': 'Solid-State Peltier',
      'Control': 'AI Thermal PID',
      'Stage': 'Active Prototype (R&D)'
    },
    tags: ['Cold Chain', 'AgriTech', 'Thermoelectric', 'Embedded Systems', 'IoT'],
    gallery: ['/thandai.png', '/thandaiback.png', '/thandaifinal.jpeg']
  },
  {
    id: 'PROJ-V2X',
    slug: 'enfibio-v2x',
    cat: 'mobility',
    code: 'ENFIBIO-V2X',
    title: 'Enfibio V2X',
    subtitle: 'Cooperative Road-Safety Intelligence Platform',
    domain: 'INTELLIGENT MOBILITY',
    category: 'Mobility',
    badge: 'FEATURED',
    desc: 'Cooperative Road-Safety Intelligence Platform with completed model training and autonomous simulations for real-time hazard prevention beyond line of sight.',
    image: '/assets/v2x_platform.jpg',
    simulationUrl: '/simulations/v2x-3d-anatomy.html',
    overview: 'Enfibio V2X AI is a cooperative road-safety intelligence platform engineered for real-time vehicle-to-vehicle (V2V), vehicle-to-infrastructure (V2I), vehicle-to-pedestrian (V2P), and vehicle-to-cloud (V2N) communication. We have completed extensive model training and high-fidelity autonomous simulations, proving sub-10ms non-line-of-sight hazard mitigation across complex urban and highway scenarios.',
    problem: 'Onboard visual cameras and lidars suffer from severe blind spots caused by large cargo trucks, curves, dense fog, and adverse weather, leaving drivers and autonomous systems incapable of detecting multi-vehicle pileups until it is too late.',
    solution: 'Enfibio V2X establishes an ad-hoc vehicle mesh network that shares location, velocity, and deceleration vectors with sub-10ms packet delivery, providing non-line-of-sight collision alerts well before human or camera detection.',
    features: [
      'Completed AI Model Training & High-Fidelity Autonomous Simulations',
      'Unified V2V, V2I, V2P (Pedestrian) & V2N (Cloud/Network) cooperative telemetry',
      'Sub-10ms low-latency vehicular telemetry broadcast for emergency braking',
      'Non-line-of-sight (NLOS) intersection, roadwork, and blind-corner hazard prediction',
      'Automotive standards compliance: AIS-230, AIS-189, AIS-190, and TRAI 2026 (5.875–5.905 GHz)'
    ],
    specs: {
      'Stage': 'Model Trained & Autonomous Simulation Validated',
      'Latency': '< 10 ms',
      'Spectrum': '5.875–5.905 GHz (TRAI 2026)',
      'Standards': 'AIS-230 / AIS-189 / AIS-190',
      'Protocols': 'V2V, V2I, V2P, V2N'
    },
    tags: ['V2X', 'Mobility', 'Connected Vehicles', 'Road Safety', 'Edge AI', 'Autonomous Sim'],
    gallery: ['/assets/v2x_platform.jpg']
  },
  {
    id: 'PROJ-BHARATMAPS',
    slug: 'bharatmaps',
    cat: 'defense',
    code: 'BHARATMAPS',
    title: 'BharatMaps Citation',
    subtitle: 'DRDO Dare to Dream Winner',
    domain: 'DEFENSE INTELLIGENCE',
    category: 'Defense',
    badge: 'DRDO WINNER',
    desc: 'An offline-first emergency communication and navigation platform that enables secure messaging, verified alerts, and safe routing even during internet blackouts.',
    image: '/assets/bharatmapspreview.jpeg',
    video: '/assets/bharatmaps.mp4',
    overview: 'BharatMaps is an award-winning navigation and emergency communication platform recognized by DRDO in the Dare to Dream challenge. It guarantees operational continuity during communications blackouts and disaster scenarios.',
    problem: 'Natural disasters, defense operations, and infrastructure blackouts routinely sever cellular and internet access, stranding emergency response teams and civilian populations without navigation or verified situational updates.',
    solution: 'BharatMaps operates entirely offline by utilizing local peer-to-peer mesh broadcasts and pre-cached geospatial vector tiles, enabling secure message delivery and hazard routing without external network dependencies.',
    features: [
      'Completely offline peer-to-peer ad-hoc communication mesh',
      'Cryptographically verified alert relaying during cellular blackouts',
      'Geospatial route planning optimized for emergency vehicle access',
      'Awarded DRDO Dare to Dream Innovation Citation'
    ],
    specs: {
      'Award': 'DRDO Dare to Dream Winner',
      'Routing': 'Offline Vector Mesh',
      'Operation': 'Zero Cellular Dependency',
      'Stage': 'Production Validation'
    },
    tags: ['DRDO', 'Offline Navigation', 'Emergency Comms', 'Defense', 'Mesh'],
    gallery: ['/assets/bharatmapspreview.jpeg', '/assets/bharatmapsworking.jpeg']
  },
  {
    id: 'PROJ-AGRISWARM',
    slug: 'agriswarm',
    cat: 'systems',
    code: 'AGRISWARM',
    title: 'Agri Swarm System',
    subtitle: 'Rover and Swarm Drones Simulation',
    domain: 'AGRITECH · ROBOTICS',
    category: 'AgriTech',
    badge: 'SIMULATION',
    desc: 'Advanced simulation of an agricultural swarm system featuring coordinated operations between ground rovers and aerial swarm drones for precision agriculture.',
    image: '/assets/agriswarm_sim.mp4',
    video: '/assets/agriswarm_sim.mp4',
    overview: 'Agri Swarm coordinates autonomous ground vehicles (UGVs) and aerial scouting drones (UAVs) to conduct high-resolution soil inspection, targeted nutrient delivery, and crop health surveys across expansive farm holdings.',
    problem: 'Manual agricultural scouting is labor-intensive and lacks the temporal resolution required to arrest pest infestations or water deficits before widespread crop damage occurs.',
    solution: 'By leveraging Multi-Agent Reinforcement Learning (MARL), aerial drones rapidly map large parcels and dispatch ground rovers directly to anomaly zones for localized remediation.',
    features: [
      'Heterogeneous autonomous coordination between rovers and UAVs',
      'Multispectral crop stress indexing and soil telemetry integration',
      'Physics-accurate simulation and swarm path planning',
      'Autonomous recharging and field waypoint sequencing'
    ],
    specs: {
      'Agents': 'UGV Ground Rover + UAV Swarm',
      'Algorithm': 'Cooperative MARL',
      'Application': 'Precision Agriculture',
      'Stage': 'Physics Simulation & Testing'
    },
    tags: ['Swarm AI', 'Agriculture', 'Simulation', 'Robotics', 'UAV'],
    gallery: []
  },
  {
    id: 'PROJ-MEDGPT',
    slug: 'medgpt',
    cat: 'intel',
    code: 'MEDGPT',
    title: 'MedGPT',
    subtitle: 'Clinical Decision Intelligence System',
    domain: 'AI INTELLIGENCE · HEALTHTECH',
    category: 'HealthTech',
    badge: 'RAG AI',
    desc: 'Specialized medical intelligence built on fine-tuned LLMs with RAG over peer-reviewed clinical databases, delivering decision-grade diagnostic guidance.',
    image: '/assets/medgpt.png',
    overview: 'MedGPT delivers transparent, source-attributed clinical assistance for healthcare providers, cross-referencing patient records against current medical literature to suggest differential diagnoses and flag drug interactions.',
    problem: 'Physicians face overwhelming administrative volume and rapidly evolving pharmacological evidence, creating diagnostic burnout and potential prescription oversight in high-velocity clinical settings.',
    solution: 'MedGPT indexes verified clinical literature using hybrid dense-sparse vector retrieval, outputting structured clinical summaries with inline citation keys to validated peer-reviewed studies.',
    features: [
      'Strict source attribution with traceable medical journal references',
      'HIPAA-conscious localized inference capabilities',
      'Specialized prompt scaffolding tailored to clinical review workflows',
      'Reduced hallucination index via deterministic retrieval boundaries'
    ],
    specs: {
      'Engine': 'Fine-Tuned LLM + RAG',
      'Attribution': 'Peer-Reviewed Indexing',
      'Domain': 'Clinical Decision Support',
      'Stage': 'Active Research & Prototype'
    },
    tags: ['Medical AI', 'RAG', 'LLM', 'Clinical', 'HealthTech'],
    gallery: ['/assets/medgpt.png']
  },
  {
    id: 'PROJ-MINAR',
    slug: 'minar',
    cat: 'systems',
    code: 'MINAR',
    title: 'Minar E-commerce',
    subtitle: 'Live E-commerce Deployment',
    domain: 'SYSTEMS PLATFORM',
    category: 'Systems',
    badge: 'LIVE DEMO',
    desc: 'Fully deployed e-commerce platform demonstrating our team’s capability to ship production-ready, highly scalable web applications and resilient systems.',
    image: '/assets/minar.png',
    liveUrl: 'https://minar.store',
    overview: 'Minar is a live, production-scale digital storefront showcasing Enfibio’s full-stack software engineering depth, featuring high-speed catalog browsing, edge caching, and fault-tolerant checkout workflows.',
    problem: 'Modern commerce platforms frequently suffer from brittle infrastructure, sluggish load times, and abandoned checkouts under surging customer traffic.',
    solution: 'Engineered with Next.js App Router, optimized edge middleware, and distributed database clustering, Minar maintains sub-second page transitions and seamless transaction flows.',
    features: [
      'Sub-second page load speeds via Next.js edge-rendered caching',
      'End-to-end cart state management and checkout integration',
      'Responsive design across mobile, tablet, and ultra-wide displays',
      'Production deployment handling live customer interactions'
    ],
    specs: {
      'Status': 'Live in Production',
      'Stack': 'Next.js + TypeScript + Vercel',
      'Architecture': 'Serverless Edge Microservices',
      'Stage': 'Deployed'
    },
    tags: ['E-commerce', 'Fullstack', 'Web Architecture', 'Live'],
    gallery: ['/assets/minar.png']
  },
  {
    id: 'PROJ-SAM',
    slug: 'sam',
    cat: 'intel',
    code: 'SAM',
    title: 'SAM AI Assistant',
    subtitle: 'Decentralized Edge Inference Ecosystem',
    domain: 'AI INTELLIGENCE',
    category: 'AI & IoT',
    badge: 'EDGE AI',
    desc: 'A bespoke 40MB edge inference ecosystem. Fully decentralized with zero baseline cloud dependency, coupling SLM throughput with SSH-tunneled infrastructure.',
    image: '/assets/SAM.jpeg',
    overview: 'SAM is an edge-first AI assistant designed for offline compute nodes, executing autonomous code reviews, telemetry diagnosis, and workflow automation with minimal compute footprints.',
    problem: 'Cloud-hosted AI models expose proprietary organizational code and telemetry to third-party endpoints and become completely inoperable in remote or air-gapped environments.',
    solution: 'By distilling specialized reasoning models into a 40MB runtime, SAM operates locally on developer workstations and IoT micro-servers with instant response times.',
    features: [
      'Lightweight 40MB local model footprint requiring zero GPU acceleration',
      'Private air-gapped code analysis and syntax auditing',
      'Dynamic escalation to private cloud clusters for heavy matrix workloads',
      'SSH-tunneled secure remote administrative access'
    ],
    specs: {
      'Footprint': '40MB Small Language Model',
      'Execution': 'Local Edge Inference',
      'Privacy': '100% On-Device Air-Gapped',
      'Stage': 'Operational Internal Tool'
    },
    tags: ['AI Assistant', 'Edge AI', 'SLM', 'Autonomy', 'Privacy'],
    gallery: ['/assets/SAM.jpeg']
  },
  {
    id: 'PROJ-ASTRA',
    slug: 'astra',
    cat: 'defense',
    code: 'ASTRA',
    title: 'Project ASTRA',
    subtitle: 'Heterogeneous Swarm UAV System',
    domain: 'DEFENSE INTELLIGENCE',
    category: 'Defense',
    badge: 'ACTIVE R&D',
    desc: 'A heterogeneous drone swarm system utilizing MARL for coordinated autonomous operations via encrypted mesh with emergent tactical behavior.',
    image: '/assets/astra_drone.png',
    overview: 'Project ASTRA focuses on the autonomous coordination of diverse aerial nodes, executing real-time reconnaissance and swarm defense strategies without central mission controllers.',
    problem: 'Centralized UAV command links are single points of failure that can be jammed or spoofed by electronic countermeasures in modern electronic warfare arenas.',
    solution: 'ASTRA nodes implement decentralized Multi-Agent Reinforcement Learning where individual drones infer localized positions and adapt collective flight formations organically.',
    features: [
      'Decentralized swarm consensus via encrypted frequency-hopping mesh',
      'Multi-Agent Reinforcement Learning for obstacle and threat avoidance',
      'Dynamic formation reassignment upon loss of individual nodes',
      'Real-time deterministic scheduling on embedded RTOS microkernels'
    ],
    specs: {
      'Swarm Size': '12–48 Coordinated Nodes',
      'Mesh Protocol': 'Encrypted P2P Protocol',
      'Control': 'MARL Decentralized Policy',
      'Stage': 'Simulation & Hardware Integration'
    },
    tags: ['MARL', 'Swarm AI', 'UAV', 'Defense', 'Edge AI', 'RTOS'],
    gallery: ['/assets/astra_drone.png', '/astra_carrier.png']
  },
  {
    id: 'PROJ-AWAAS',
    slug: 'awaas',
    cat: 'systems',
    code: 'AWAAS',
    title: 'Awaas Direct',
    subtitle: 'Real Estate Platform',
    domain: 'SYSTEMS PLATFORM',
    category: 'Systems',
    badge: 'LIVE',
    desc: 'Live deployment of Awaas Direct, showcasing robust data handling, user authentication, and seamless UI/UX in a production property discovery environment.',
    image: '/assets/awasdirect.png',
    overview: 'Awaas Direct is a deployed real estate platform illustrating Enfibio’s execution capacity in building verified property portals, secure transaction workflows, and multi-tenant systems.',
    problem: 'Fragmented property listing platforms suffer from stale inventory data, unverified sellers, and opaque transaction documentation.',
    solution: 'Built with rigorous backend validation, role-based access controls, and performant search filtering, Awaas Direct delivers verified real-estate discovery.',
    features: [
      'Comprehensive property discovery and multi-parameter filtering',
      'Secure user onboarding and identity-verified property postings',
      'Automated location indexing with interactive mapping'
    ],
    specs: {
      'Platform': 'Production Web Application',
      'Scalability': 'Auto-Scaling Cloud Infrastructure',
      'Status': 'Live Deployed'
    },
    tags: ['Real Estate', 'Platform', 'Web', 'Live', 'Systems'],
    gallery: ['/assets/awasdirect.png']
  },
  {
    id: 'PROJ-SMART-SEWAGE',
    slug: 'smart-sewage',
    cat: 'systems',
    code: 'SMART-SEWAGE',
    title: 'Smart Sewage System',
    subtitle: 'IoT Dashboard Interface',
    domain: 'SYSTEMS PLATFORM · IOT',
    category: 'AI & IoT',
    badge: 'IOT TELEMETRY',
    desc: 'Live dashboard and management interface for the Smart Sewage System, processing real-time telemetry and state data for infrastructure monitoring.',
    image: '/assets/Smartflow.png',
    overview: 'Smart Sewage Telemetry provides municipal engineers with continuous insight into pipeline flow rates, toxic gas accumulation, and overflow alerts across urban wastewater networks.',
    problem: 'Undetected municipal pipeline blockages and toxic methane accumulation cause catastrophic urban flooding and create hazardous working environments for sanitation personnel.',
    solution: 'Deployed ultrasonic and electrochemical sensors transmit real-time telemetry over LPWAN to a centralized dashboard that generates predictive blockage notifications.',
    features: [
      'Real-time flow velocity and water level monitoring',
      'Multi-gas detection alerts for hazardous vapor buildup',
      'Interactive GIS map overlay identifying anomaly sectors',
      'Historical trend analytics for municipal maintenance planning'
    ],
    specs: {
      'Connectivity': 'LPWAN Sensor Telemetry',
      'Visualization': 'Real-Time React Dashboard',
      'Alert Latency': '< 2 Seconds',
      'Stage': 'Operational Dashboard'
    },
    tags: ['IoT', 'Dashboard', 'Telemetry', 'Infrastructure', 'Live'],
    gallery: ['/assets/Smartflow.png']
  },
  {
    id: 'PROJ-SIGINT',
    slug: 'sigint',
    cat: 'defense',
    code: 'SIGINT',
    title: 'UAV SIGINT Platform',
    subtitle: 'Signals Intelligence from Aerial Systems',
    domain: 'DEFENSE INTELLIGENCE',
    category: 'Defense',
    badge: 'ISR PLATFORM',
    desc: 'Airborne signals intelligence gathering platform integrating passive RF collection, spectrum analysis, and real-time signal classification for persistent ISR missions.',
    image: '/assets/signit.png',
    overview: 'The UAV SIGINT Platform carries miniaturized software-defined radios aboard unmanned platforms to detect, intercept, and localize hostile electromagnetic emissions.',
    problem: 'Ground-based electronic intercept stations are obstructed by natural terrain and cannot detect low-power emitter sources in deep ravines or behind urban obstacles.',
    solution: 'Elevating passive RF sensing payloads aboard long-endurance UAVs delivers unprecedented line-of-sight signal collection and instantaneous angle-of-arrival triangulation.',
    features: [
      'Wideband RF interception across VHF/UHF tactical communication bands',
      'Real-time edge signal classification and modulation classification',
      'Passive angle-of-arrival emitter localization',
      'Low power consumption payload design optimized for UAV loiter time'
    ],
    specs: {
      'Payload Type': 'Passive RF Collection SDR',
      'Analysis': 'Real-Time Onboard DSP',
      'Operation': 'Extended Loiter ISR',
      'Stage': 'Active Research'
    },
    tags: ['SIGINT', 'RF', 'ISR', 'Spectrum', 'Passive Collection'],
    gallery: ['/assets/signit.png']
  },
  {
    id: 'PROJ-FUNDRADAR',
    slug: 'fundradar',
    cat: 'intel',
    code: 'FUNDRADAR',
    title: 'FundRadar',
    subtitle: 'Financial Intelligence Tool',
    domain: 'AI INTELLIGENCE · FINTECH',
    category: 'AI & IoT',
    badge: 'FINTECH',
    desc: 'A deployed intelligence tool for tracking and analyzing funding data, demonstrating our capability in building data-heavy fintech dashboards.',
    image: '/assets/fundradar.png',
    overview: 'FundRadar aggregates venture investment data, institutional grant allocations, and startup round dynamics into an intuitive analytical terminal for investors and founders.',
    problem: 'Early-stage venture intelligence is fragmented across multiple paywalled aggregators and opaque regulatory filings.',
    solution: 'FundRadar parses public and syndicate funding announcements into normalized relational schemas, surfacing emerging tech sector trends with interactive charts.',
    features: [
      'Automated transaction parsing and stage classification',
      'Sectoral allocation breakdowns and valuation multiples',
      'Interactive cohort filtering and dynamic graph representations'
    ],
    specs: {
      'Focus': 'Fintech Analytics',
      'Data Freshness': 'Continuous Real-Time Feeds',
      'Stage': 'Production Dashboard'
    },
    tags: ['Fintech', 'Analytics', 'Dashboard', 'Live'],
    gallery: ['/assets/fundradar.png']
  },
  {
    id: 'PROJ-LEARNMATE',
    slug: 'learnmate',
    cat: 'intel',
    code: 'LEARNMATE',
    title: 'Learnmate',
    subtitle: 'Educational Platform',
    domain: 'AI INTELLIGENCE · EDTECH',
    category: 'Systems',
    badge: 'EDTECH',
    desc: 'A next-generation learning platform deployment integrating interactive user flows and robust backend capabilities for educational content delivery.',
    image: '/assets/learnmate.png',
    overview: 'Learnmate provides personalized modular curricula and interactive learning exercises, monitoring student retention through adaptive quiz progression.',
    problem: 'Static online course video libraries produce steep drop-off rates due to the absence of personalized interactive feedback.',
    solution: 'Learnmate organizes curriculum trees into interactive milestones that adapt question difficulty dynamically to each learner’s conceptual mastery.',
    features: [
      'Adaptive milestone assessment pathways',
      'Interactive code execution and exercise validation',
      'Clean student engagement analytics dashboard'
    ],
    specs: {
      'Domain': 'Interactive EdTech',
      'Architecture': 'Cloud Microservices',
      'Stage': 'Deployed Platform'
    },
    tags: ['EdTech', 'Platform', 'Education', 'Live'],
    gallery: ['/assets/learnmate.png']
  }
];

export const CATEGORIES = [
  'All Projects',
  'AgriTech',
  'Mobility',
  'HealthTech',
  'Cold Chain',
  'AI & IoT',
  'Defense',
  'Systems'
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug || p.code.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.badge === 'FLAGSHIP' || p.badge === 'FEATURED');
}
