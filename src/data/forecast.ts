export interface ForecastScenario {
  period: '2Y' | '5Y' | '10Y' | '15Y';
  years: number;
  label: string;
  currentWealth: number; // ₹53,00,000
  projectedWealth: number;
  totalInvested: number;
  wealthGain: number;
  percentageGain: number;
  monthlyContribution: number;
  assumedRate: number; // 12%
  milestoneTitle: string;
  milestoneDescription: string;
  chartPoints: { label: string; yearNum: number; wealth: number; invested: number }[];
}

export const forecastScenarios: Record<'2Y' | '5Y' | '10Y' | '15Y', ForecastScenario> = {
  '2Y': {
    period: '2Y',
    years: 2,
    label: '2 Years',
    currentWealth: 5300000,
    projectedWealth: 7320480,
    totalInvested: 5900000, // 53L + (25K * 24 = 6L)
    wealthGain: 1420480,
    percentageGain: 26.8,
    monthlyContribution: 25000,
    assumedRate: 12,
    milestoneTitle: 'Liquid Emergency & Short Buffer',
    milestoneDescription: 'Compounding begins to cover regular living expenses while maintaining disciplined liquidity.',
    chartPoints: [
      { label: 'Now', yearNum: 0, wealth: 5300000, invested: 5300000 },
      { label: '6M', yearNum: 0.5, wealth: 5745000, invested: 5450000 },
      { label: '1Y', yearNum: 1, wealth: 6224000, invested: 5600000 },
      { label: '18M', yearNum: 1.5, wealth: 6742000, invested: 5750000 },
      { label: '2Y', yearNum: 2, wealth: 7320480, invested: 5900000 },
    ],
  },
  '5Y': {
    period: '5Y',
    years: 5,
    label: '5 Years',
    currentWealth: 5300000,
    projectedWealth: 11462340,
    totalInvested: 6800000, // 53L + (25K * 60 = 15L)
    wealthGain: 4662340,
    percentageGain: 87.9,
    monthlyContribution: 25000,
    assumedRate: 12,
    milestoneTitle: 'First Milestone Corpus (>₹1 Crore)',
    milestoneDescription: 'Returns on existing capital now exceed the fresh cash contributions injected each month.',
    chartPoints: [
      { label: 'Now', yearNum: 0, wealth: 5300000, invested: 5300000 },
      { label: '1Y', yearNum: 1, wealth: 6224000, invested: 5600000 },
      { label: '2Y', yearNum: 2, wealth: 7320480, invested: 5900000 },
      { label: '3Y', yearNum: 3, wealth: 8529000, invested: 6200000 },
      { label: '4Y', yearNum: 4, wealth: 9898000, invested: 6500000 },
      { label: '5Y', yearNum: 5, wealth: 11462340, invested: 6800000 },
    ],
  },
  '10Y': {
    period: '10Y',
    years: 10,
    label: '10 Years',
    currentWealth: 5300000,
    projectedWealth: 16460996,
    totalInvested: 8300000, // 53L + (25K * 120 = 30L)
    wealthGain: 11160996,
    percentageGain: 211,
    monthlyContribution: 25000,
    assumedRate: 12,
    milestoneTitle: 'Financial Autonomy & Goal Readiness',
    milestoneDescription: 'Wealth growth outpaces active salary income, creating self-sustaining compounding.',
    chartPoints: [
      { label: 'Now', yearNum: 0, wealth: 5300000, invested: 5300000 },
      { label: '2Y', yearNum: 2, wealth: 7320480, invested: 5900000 },
      { label: '4Y', yearNum: 4, wealth: 9898000, invested: 6500000 },
      { label: '6Y', yearNum: 6, wealth: 13210000, invested: 7100000 },
      { label: '8Y', yearNum: 8, wealth: 17450000, invested: 7700000 },
      { label: '10Y', yearNum: 10, wealth: 16460996, invested: 8300000 },
    ],
  },
  '15Y': {
    period: '15Y',
    years: 15,
    label: '15 Years',
    currentWealth: 5300000,
    projectedWealth: 34289450,
    totalInvested: 9800000, // 53L + (25K * 180 = 45L)
    wealthGain: 24489450,
    percentageGain: 462,
    monthlyContribution: 25000,
    assumedRate: 12,
    milestoneTitle: 'Multi-Generational & Early FIRE Freedom',
    milestoneDescription: 'Substantial multi-crore corpus capable of generating sustainable inflation-proof withdrawal.',
    chartPoints: [
      { label: 'Now', yearNum: 0, wealth: 5300000, invested: 5300000 },
      { label: '3Y', yearNum: 3, wealth: 8529000, invested: 6200000 },
      { label: '6Y', yearNum: 6, wealth: 13210000, invested: 7100000 },
      { label: '9Y', yearNum: 9, wealth: 19850000, invested: 8000000 },
      { label: '12Y', yearNum: 12, wealth: 28400000, invested: 8900000 },
      { label: '15Y', yearNum: 15, wealth: 34289450, invested: 9800000 },
    ],
  },
};
