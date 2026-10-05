export interface CanvasNode {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  rawValue: number;
  type: 'hub' | 'asset' | 'flow' | 'liability' | 'milestone';
  description: string;
  connectionType: 'inflow' | 'outflow' | 'store' | 'reserve' | 'liability';
  details: string[];
  trend?: string;
  positionHint: string;
}

export const financialCanvasHub = {
  id: 'net-worth',
  title: 'NET WORTH',
  amount: '₹53,00,000',
  description: 'Total assets minus liabilities across liquid accounts, equities, fixed income, real estate equity, and retirement funds.',
  growthYOY: '+16.8% YoY',
};

export const canvasNodes: CanvasNode[] = [
  {
    id: 'assets',
    title: 'TOTAL ASSETS',
    subtitle: 'Tangible + Financial',
    amount: '₹57.4L',
    rawValue: 5740000,
    type: 'asset',
    connectionType: 'store',
    description: 'Liquid cash, equity portfolios, EPF, PPF, gold and emergency reserves.',
    details: ['Equity: ₹41.8L', 'Fixed/Debt: ₹8.4L', 'Liquid/Cash: ₹4.2L', 'Gold: ₹3.0L'],
    trend: '+18.2% YoY',
    positionHint: 'top-left',
  },
  {
    id: 'investments',
    title: 'INVESTMENTS',
    subtitle: 'Compounding Portfolio',
    amount: '₹41.8L',
    rawValue: 4180000,
    type: 'asset',
    connectionType: 'store',
    description: 'Direct equity holdings, index ETFs, and actively managed flexi-cap mutual funds.',
    details: ['Mutual Funds: 60%', 'Direct Stocks: 30%', 'ETFs: 10%'],
    trend: '+21.4% 1Y',
    positionHint: 'top-right',
  },
  {
    id: 'income',
    title: 'MONTHLY CASHFLOW',
    subtitle: 'Net Take-Home',
    amount: '₹1.2L / mo',
    rawValue: 120000,
    type: 'flow',
    connectionType: 'inflow',
    description: 'Post-tax salary credits, dividend yields, and passive interest credits.',
    details: ['Primary Salary: ₹1,12,000', 'Dividends: ₹4,800', 'Interest: ₹3,200'],
    trend: 'Steady',
    positionHint: 'left',
  },
  {
    id: 'expenses',
    title: 'MONTHLY EXPENSES',
    subtitle: 'Median Living Burn',
    amount: '₹48.3K / mo',
    rawValue: 48320,
    type: 'flow',
    connectionType: 'outflow',
    description: 'Household living essentials, rent/EMI, insurance premiums, and discretionary leisure.',
    details: ['Essentials: 58%', 'Discretionary: 26%', 'Buffer: 16%'],
    trend: '↓ 12% MoM',
    positionHint: 'right',
  },
  {
    id: 'goals',
    title: 'LOCKED GOALS',
    subtitle: 'Earmarked Capital',
    amount: '₹18L',
    rawValue: 1800000,
    type: 'milestone',
    connectionType: 'reserve',
    description: 'Capital ring-fenced for home down payment and children higher education corpus.',
    details: ['Home Down Payment: ₹14.0L', 'Emergency Fund: ₹4.0L'],
    trend: '78% Funded',
    positionHint: 'bottom-left',
  },
  {
    id: 'debt',
    title: 'TOTAL LIABILITIES',
    subtitle: 'Mortgage & Cards',
    amount: '₹6.5L',
    rawValue: 650000,
    type: 'liability',
    connectionType: 'liability',
    description: 'Remaining home loan principal balance and zero revolving credit card dues.',
    details: ['Home Loan: ₹6.5L (8.65%)', 'Revolving Debt: ₹0 (Nil)'],
    trend: '-₹1.8L Paid Off',
    positionHint: 'bottom-right',
  },
];
