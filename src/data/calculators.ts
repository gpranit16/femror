export interface CalculatorItem {
  id: string;
  name: string;
  category: 'investing' | 'borrowing' | 'tax' | 'retirement' | 'tools';
  categoryLabel: string;
  description: string;
  badge?: string;
  searchTerms: string[];
  metricsPreview?: string;
  href: string;
}

export const calculatorCategories = [
  { id: 'all', label: 'All Tools' },
  { id: 'investing', label: 'Investing' },
  { id: 'borrowing', label: 'Borrowing & Loans' },
  { id: 'tax', label: 'Tax & Compliance' },
  { id: 'retirement', label: 'Retirement' },
  { id: 'tools', label: 'Planning Tools' },
] as const;

export const calculatorsList: CalculatorItem[] = [
  // Investing
  {
    id: 'sip-calculator',
    name: 'SIP Calculator',
    category: 'investing',
    categoryLabel: 'INVESTING',
    description: 'Calculate maturity value of systematic monthly investments with inflation & step-up adjustments.',
    badge: 'Popular',
    searchTerms: ['sip', 'systematic', 'monthly', 'mutual fund', 'invest', 'compounding', 'growth'],
    metricsPreview: '₹5,000/mo → ₹41.2L (15 yrs @ 12%)',
    href: '#sip',
  },
  {
    id: 'lumpsum-calculator',
    name: 'Lumpsum Investment',
    category: 'investing',
    categoryLabel: 'INVESTING',
    description: 'Forecast the future value of a one-time lump sum corpus across different asset classes.',
    searchTerms: ['lumpsum', 'one time', 'mutual fund', 'corpus', 'future value'],
    metricsPreview: '₹5.0L → ₹15.5L (10 yrs @ 12%)',
    href: '#calculators',
  },
  {
    id: 'step-up-sip',
    name: 'Step-up SIP Calculator',
    category: 'investing',
    categoryLabel: 'INVESTING',
    description: 'See the exponential compounding difference when increasing your SIP by 5% or 10% annually.',
    badge: 'High Impact',
    searchTerms: ['step up', 'annual increase', 'increment', 'sip growth', 'compounding'],
    metricsPreview: '+₹32.4L extra corpus with 10% step-up',
    href: '#calculators',
  },
  {
    id: 'fd-calculator',
    name: 'Fixed Deposit (FD) & RD',
    category: 'investing',
    categoryLabel: 'INVESTING',
    description: 'Compare quarterly compounding bank FD interest rates vs post-tax debt yields.',
    searchTerms: ['fd', 'fixed deposit', 'rd', 'recurring', 'bank', 'interest', 'safe'],
    metricsPreview: '7.10% p.a. quarterly compounded',
    href: '#calculators',
  },
  {
    id: 'ppf-calculator',
    name: 'Public Provident Fund (PPF)',
    category: 'investing',
    categoryLabel: 'INVESTING',
    description: 'Track sovereign guaranteed 7.1% tax-free EEE status wealth building over 15 to 25 years.',
    searchTerms: ['ppf', 'provident fund', 'tax free', '80c', 'eee', '15 years'],
    metricsPreview: '₹1.5L/yr → ₹40.7L Tax-Free',
    href: '#calculators',
  },

  // Borrowing
  {
    id: 'home-loan-emi',
    name: 'Home Loan EMI & Affordability',
    category: 'borrowing',
    categoryLabel: 'BORROWING',
    description: 'Determine exact monthly EMI, total interest burden, and salary eligibility for buying property.',
    badge: 'Essential',
    searchTerms: ['home loan', 'house', 'emi', 'affordability', 'interest', 'property', 'mortgage'],
    metricsPreview: '₹50L @ 8.50% = ₹43,391/mo EMI',
    href: '#calculators',
  },
  {
    id: 'loan-prepayment',
    name: 'Loan Prepayment & Foreclosure',
    category: 'borrowing',
    categoryLabel: 'BORROWING',
    description: 'Model how paying 1 extra EMI per year slashes 4.5 years off your 20-year home loan.',
    badge: 'Cost Saver',
    searchTerms: ['prepay', 'prepayment', 'foreclose', 'save interest', 'tenure reduction', 'part payment'],
    metricsPreview: 'Save ₹14.8L interest + 52 months tenure',
    href: '#calculators',
  },
  {
    id: 'personal-loan-emi',
    name: 'Personal & Car Loan EMI',
    category: 'borrowing',
    categoryLabel: 'BORROWING',
    description: 'Evaluate reducing balance vs flat interest rates to unmask actual annualized APR.',
    searchTerms: ['personal loan', 'car loan', 'auto loan', 'reducing balance', 'apr', 'processing fee'],
    metricsPreview: 'Compare reducing 11.5% vs flat 7%',
    href: '#calculators',
  },

  // Tax
  {
    id: 'new-vs-old-regime',
    name: 'Old vs New Tax Regime FY 2025-26',
    category: 'tax',
    categoryLabel: 'TAX',
    description: 'Direct comparison accounting for HRA, 80C, NPS 80CCD(2), and the latest standard deduction slabs.',
    badge: 'FY 25-26 Updated',
    searchTerms: ['income tax', 'old vs new', 'tax regime', '80c', 'hra', 'slabs', 'standard deduction'],
    metricsPreview: 'Breakeven deduction: ₹3.75L/year',
    href: '#calculators',
  },
  {
    id: 'capital-gains-tax',
    name: 'LTCG / STCG Capital Gains',
    category: 'tax',
    categoryLabel: 'TAX',
    description: 'Calculate post-budget tax on Equity (12.5% LTCG after ₹1.25L exemption) and Real Estate.',
    searchTerms: ['capital gains', 'ltcg', 'stcg', 'equity tax', 'mutual fund tax', '12.5%', 'exemption'],
    metricsPreview: '₹1.25L annual exemption accounted',
    href: '#calculators',
  },

  // Retirement
  {
    id: 'fire-calculator',
    name: 'FIRE (Financial Independence) Calculator',
    category: 'retirement',
    categoryLabel: 'RETIREMENT',
    description: 'Determine your LeanFIRE, FatFIRE, and CoastFIRE corpus target based on monthly burn rate.',
    badge: 'Strategy',
    searchTerms: ['fire', 'retire early', 'financial independence', 'corpus', 'safe withdrawal', 'swr', '4% rule'],
    metricsPreview: 'Corpus: 30x Annual Expenses',
    href: '#calculators',
  },
  {
    id: 'swp-calculator',
    name: 'Systematic Withdrawal Plan (SWP)',
    category: 'retirement',
    categoryLabel: 'RETIREMENT',
    description: 'Plan predictable monthly income streams in retirement with minimal tax friction.',
    searchTerms: ['swp', 'monthly income', 'pension', 'withdrawal', 'mutual fund swp', 'retirement cashflow'],
    metricsPreview: 'Sustainable 6% annual withdrawal',
    href: '#calculators',
  },
  {
    id: 'epf-nps-calculator',
    name: 'EPF & National Pension System (NPS)',
    category: 'retirement',
    categoryLabel: 'RETIREMENT',
    description: 'Simulate employer contribution match, 8.25% EPF interest, and Tier-1 pension annuity.',
    searchTerms: ['epf', 'nps', 'provident fund', 'pension', 'gratuity', 'annuity', 'tier 1'],
    metricsPreview: 'Employer match 80CCD(2) benefits',
    href: '#calculators',
  },

  // Tools
  {
    id: 'inflation-compound-tool',
    name: 'Purchasing Power & Real Returns',
    category: 'tools',
    categoryLabel: 'TOOLS',
    description: 'See what ₹1,00,000 today will feel like in 10, 20, or 30 years at 6.0% historical Indian inflation.',
    searchTerms: ['inflation', 'real returns', 'purchasing power', 'cpi', 'cost of living', 'future expense'],
    metricsPreview: '₹50,000 expenses → ₹1,19,600 in 15 yrs',
    href: '#calculators',
  },
  {
    id: 'goal-planner-child',
    name: 'Goal Planner: Higher Education & Marriage',
    category: 'tools',
    categoryLabel: 'TOOLS',
    description: 'Back-calculate the monthly required investment to achieve targeted life milestone funds.',
    searchTerms: ['goal planning', 'education', 'college', 'marriage', 'corpus', 'timeline'],
    metricsPreview: 'Education inflation estimated @ 10% p.a.',
    href: '#calculators',
  }
];
