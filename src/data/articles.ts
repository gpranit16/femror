export interface Article {
  id: string;
  category: 'MARKETS' | 'TAX' | 'REGULATION' | 'HABIT';
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const articlesData: Article[] = [
  {
    id: 'sensex-nifty-seven-weeks',
    category: 'MARKETS',
    title: 'Sensex & Nifty: What seven weeks of losses actually mean for investors',
    excerpt: 'When index drawdowns make headlines, domestic institutional flows tell a very different story. Here is the math behind staying disciplined through corrections.',
    date: 'Sep 29, 2026',
    readTime: '13 min read',
    slug: 'sensex-nifty-market-correction-discipline',
    featured: true,
  },
  {
    id: 'income-tax-simple',
    category: 'TAX',
    title: 'Income tax changes explained in simple words',
    excerpt: 'The revised slab structures, new standard deduction caps, and how to evaluate your rebate eligibility without consulting a chartered accountant.',
    date: 'Oct 02, 2026',
    readTime: '6 min read',
    slug: 'income-tax-changes-simple-words',
    featured: false,
  },
  {
    id: 'upi-changes-regulation',
    category: 'REGULATION',
    title: 'What the latest UPI changes mean for daily transactions',
    excerpt: 'NPCI and RBI guidelines on interchange caps, recurring mandate limits up to ₹1,00,000, and enhanced biometric safeguards.',
    date: 'Oct 04, 2026',
    readTime: '5 min read',
    slug: 'what-upi-changes-mean',
    featured: false,
  },
  {
    id: 'sip-habit-compounding',
    category: 'HABIT',
    title: 'The ₹5,000 rule: how small automated SIPs beat market timing',
    excerpt: 'Over 15 years, rupee cost averaging consistently outperformed discretionary market timing across 94% of historical 5-year rolling windows.',
    date: 'Sep 24, 2026',
    readTime: '8 min read',
    slug: 'five-thousand-sip-habit-compounding',
    featured: false,
  },
];
