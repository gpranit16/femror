export interface ChatScenario {
  id: string;
  chipLabel: string;
  userPrompt: string;
  responseHeadline: string;
  responseBody: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  badge?: string;
  breakdown: { label: string; value: string; trend?: string }[];
  actionRecommendation: string;
}

export const chatScenarios: ChatScenario[] = [
  {
    id: 'investments-performance',
    chipLabel: 'How are my investments performing?',
    userPrompt: 'How are my investments performing?',
    responseHeadline: 'Your portfolio is up 8.4% over the last 6 months.',
    responseBody: 'Mutual funds are contributing most of the gain (+14.2%), while your direct equity holdings are relatively flat (+1.1%). Debt and liquid holdings provided stability during recent corrections.',
    keyMetricLabel: '6-MONTH GAIN',
    keyMetricValue: '+₹3,42,800',
    badge: '+8.4% Return',
    breakdown: [
      { label: 'Mutual Funds', value: '₹24.8L', trend: '+14.2%' },
      { label: 'Direct Stocks', value: '₹14.2L', trend: '+1.1%' },
      { label: 'Fixed Income & Gold', value: '₹2.8L', trend: '+3.9%' },
    ],
    actionRecommendation: 'Consider rebalancing your direct equity allocations before year-end tax harvest.',
  },
  {
    id: 'spending-breakdown',
    chipLabel: 'Where is my money going?',
    userPrompt: 'Where is my money going?',
    responseHeadline: 'Your total spending this month was ₹48,320 (12% lower than last month).',
    responseBody: 'Discretionary dining and online deliveries dropped by 18%, while fixed commitments (rent, utilities, insurance) remained strictly on budget.',
    keyMetricLabel: 'SAVINGS RATE',
    keyMetricValue: '59.7%',
    badge: '₹71,680 Saved',
    breakdown: [
      { label: 'Fixed Essentials', value: '₹28,500', trend: 'On Target' },
      { label: 'Food & Dining', value: '₹12,563', trend: '-18%' },
      { label: 'Shopping & Leisure', value: '₹7,257', trend: '-8%' },
    ],
    actionRecommendation: 'You have ₹23,360 unallocated surplus cash in your primary account this month.',
  },
  {
    id: 'save-more-sip',
    chipLabel: 'Can I save more each month?',
    userPrompt: 'Can I save more each month?',
    responseHeadline: 'Yes. You have consistent room for an additional ₹5,000 to ₹8,000 SIP.',
    responseBody: 'Based on your last 6 months of steady net cash flow (averaging ₹1.2L income vs ₹48.3K median expenses), raising your monthly SIP from ₹25,000 to ₹30,000 will not compromise your 6-month emergency reserve.',
    keyMetricLabel: 'PROJECTED 10Y IMPACT',
    keyMetricValue: '+₹11.6L',
    badge: 'Affordable +₹5K SIP',
    breakdown: [
      { label: 'Current Monthly SIP', value: '₹25,000', trend: 'Active' },
      { label: 'Suggested Step-Up', value: '₹30,000', trend: '+₹5,000' },
      { label: 'Buffer Reserve', value: '₹4.2L', trend: 'Intact' },
    ],
    actionRecommendation: 'Automate a ₹5,000 step-up on your next salary credit date (1st of month).',
  },
  {
    id: 'goal-progress',
    chipLabel: 'Am I on track for my goal?',
    userPrompt: 'Am I on track for my goal?',
    responseHeadline: 'You are 78% on track for your ₹18L Home Down Payment goal.',
    responseBody: 'At your current allocation velocity, you will reach your ₹18,00,000 target by December 2027 — approximately 4 months ahead of your original timeline.',
    keyMetricLabel: 'ACCUMULATED SO FAR',
    keyMetricValue: '₹14,04,000',
    badge: '4 Mo Ahead',
    breakdown: [
      { label: 'Target Corpus', value: '₹18,00,000', trend: 'Target' },
      { label: 'Current Balance', value: '₹14,04,000', trend: '78%' },
      { label: 'Remaining Gap', value: '₹3,96,000', trend: '11 Months' },
    ],
    actionRecommendation: 'Keep goal funds strictly in ultra-short duration or arbitrage to avoid capital volatility.',
  },
  {
    id: 'loan-prepayment-math',
    chipLabel: 'Should I prepay my home loan?',
    userPrompt: 'Should I prepay my home loan?',
    responseHeadline: 'Prepaying ₹2,00,000 now saves ₹5,84,000 in total interest.',
    responseBody: 'Since your home loan interest rate is 8.65% floating, every extra rupee prepaid yields an effective risk-free, post-tax return comparable to a 12.3% pre-tax fixed income instrument.',
    keyMetricLabel: 'TENURE REDUCTION',
    keyMetricValue: '-19 Months',
    badge: 'Save ₹5.84L',
    breakdown: [
      { label: 'Lump sum Prepayment', value: '₹2,00,000', trend: 'One-off' },
      { label: 'Interest Saved', value: '₹5,84,200', trend: 'Gross' },
      { label: 'New Loan Tenure', value: '185 Mo', trend: 'Down from 204' },
    ],
    actionRecommendation: 'Execute partial prepayment before next quarter interest reset.',
  },
];
