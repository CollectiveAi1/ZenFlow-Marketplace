import { Product, ProductType } from './types';

export const products: Product[] = [
  {
    id: 'pkg-1',
    name: 'Quick-Win Automation',
    type: ProductType.WORKFLOW,
    description: 'AI Chatbot, Social Media Scheduler, and Core CRM Integration for immediate efficiency gains.',
    longDescription: `Stop juggling repetitive tasks and start focusing on growth. This package is your first-class ticket to immediate efficiency, automating the essential front-of-house operations of your business.

Key Features:
• AI-Powered 24/7 Concierge: An intelligent chatbot for your website and social media that handles FAQs, qualifies leads, and books consultations while you sleep.
• Automated Social Presence: We'll set up and strategize your social media scheduling to ensure a consistent, engaging online presence without the daily effort.
• Seamless Lead Capture: Integrate core CRM functionalities to automatically capture and organize every new lead, ensuring no opportunity falls through the cracks.`,
    price: 2500.00,
    author: 'ZenFlow Solutions',
    tags: ['automation', 'chatbot', 'crm', 'social-media'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    systemInstruction: 'You are an AI setup specialist. Outline the key steps and benefits of integrating an AI chatbot, a social media scheduler, and a CRM for a small business.',
    testPrompt: 'Create a test plan for the Quick-Win Automation Package.',
  },
  {
    id: 'pkg-2',
    name: 'Lead Generation Engine',
    type: ProductType.WORKFLOW,
    description: 'Build a powerful lead funnel with AI-powered content, email nurturing, and SEO.',
    longDescription: `Transform your online presence from a simple brochure into a powerful, automated engine that attracts, engages, and converts your ideal customers. This package builds a sophisticated lead funnel that works for you around the clock.

Key Features:
• Everything in Quick-Win: All the foundational automations are included.
• Irresistible Lead Magnets: We use AI to create a compelling, high-value PDF guide that visitors will eagerly exchange their email for.
• Automated Relationship Building: A 5-part email sequence automatically nurtures new leads, building trust and guiding them towards a purchase.
• SEO Powerhouse Post: Kickstart your organic reach with a long-form, AI-generated blog post, fully optimized to rank on search engines.`,
    price: 4800.00,
    author: 'ZenFlow Solutions',
    tags: ['lead-generation', 'seo', 'email-marketing', 'content-creation'],
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
    systemInstruction: 'You are a digital marketing strategist. Explain how to combine a lead magnet, an email nurturing sequence, and an SEO blog post to create an effective lead generation engine.',
    testPrompt: 'Generate a title and a 3-point outline for a lead magnet PDF about "Using AI in Real Estate".',
  },
  {
    id: 'pkg-3',
    name: 'Full Operations Transformation',
    type: ProductType.WORKFLOW,
    description: 'A comprehensive, custom workflow for seamless new client onboarding and management.',
    longDescription: `Ready to achieve operational excellence? This comprehensive package delivers a bespoke automation backbone for your entire client lifecycle, eliminating manual bottlenecks and delivering a flawless, professional experience from the moment a client says 'yes'.

Key Features:
• All-Inclusive Engine: Contains everything from the Lead Generation Engine package.
• Custom Onboarding Workflow: A tailor-made n8n workflow that automates the entire new client process: creating folders, sending welcome emails, managing e-signatures, and assigning team tasks.
• Error-Proof Processes: Drastically reduce human error and ensure every client receives the same high-standard, red-carpet welcome.
• Scalable by Design: Built to handle your growth, allowing you to onboard more clients without hiring more administrative staff.`,
    price: 7500.00,
    author: 'ZenFlow Solutions',
    tags: ['operations', 'onboarding', 'custom-workflow', 'n8n'],
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    systemInstruction: 'You are an operations automation expert specializing in n8n. Detail a custom workflow for onboarding a new client, from signing the contract to assigning the first project task to the team.',
    testPrompt: 'List the key integration points for a new client onboarding workflow involving Google Drive, DocuSign, and Asana.',
  },
  {
    id: 'ret-1',
    name: 'AI Growth Essentials Retainer',
    type: ProductType.AGENT,
    description: 'Ongoing AI management including content creation, chatbot optimization, and system monitoring.',
    longDescription: `Put your growth on autopilot. This retainer is the perfect solution for businesses that want to consistently leverage AI for content and customer engagement, without the in-house expertise. We become your dedicated AI growth partner.

Key Features:
• Proactive Chatbot Management: We don't just set it and forget it. Your AI chatbot is continuously optimized for better conversations and higher conversion rates.
• Consistent Content Fuel: Receive two high-quality, SEO-optimized blog posts every month, plus a complete social media calendar with 3 engaging posts per week.
• Peace of Mind Monitoring: Your automated systems are monitored 24/7 to ensure they are running smoothly.
• Strategic Partnership: A monthly 30-minute strategy call and detailed report to review progress and plan the month ahead.`,
    price: 1500.00,
    author: 'ZenFlow Solutions',
    tags: ['retainer', 'content-creation', 'seo', 'management'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
    systemInstruction: 'You are an AI account manager. Provide a sample monthly report for the "AI Growth Essentials" retainer, highlighting key achievements in blog post performance and social media engagement.',
    testPrompt: 'Generate 3 social media post ideas for a company that sells eco-friendly coffee beans.',
  },
  {
    id: 'ret-2',
    name: 'AI Accelerator Retainer',
    type: ProductType.AGENT,
    description: 'Advanced AI services including video marketing, paid ad campaigns, and workflow development.',
    longDescription: `Move from growth to market leadership. The Accelerator Retainer is for ambitious businesses ready to dominate their niche with advanced AI strategies, from viral video content to data-driven ad campaigns and continuous process improvement.

Key Features:
• All Essentials Included: You get everything from the AI Growth Essentials tier.
• Viral Video Marketing: We create 4 compelling, short-form 'hype videos' each month, perfectly tailored for platforms like TikTok and Instagram Reels.
• AI-Optimized Ad Campaigns: We manage your Facebook & Instagram ad campaigns using AI-generated creatives to maximize ROI (ad spend is separate).
• Continuous Improvement: Receive one new workflow enhancement or minor automation build each month to constantly refine your operations.
• High-Touch Strategy: Two 30-minute strategy calls per month ensure we are fully aligned and aggressively pursuing your growth targets.`,
    price: 3200.00,
    author: 'ZenFlow Solutions',
    tags: ['retainer', 'video-marketing', 'paid-ads', 'workflow-development'],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    systemInstruction: 'You are a senior AI growth strategist. Outline a 3-month plan for a new client on the "AI Accelerator" retainer, focusing on integrating video marketing and a paid ad campaign.',
    testPrompt: 'Create a concept for a 15-second TikTok/Reel video promoting a new AI-powered scheduling app.',
  },
];