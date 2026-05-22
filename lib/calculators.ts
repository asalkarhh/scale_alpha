export type CalculatorField = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
};

export type CalculatorResult = {
  highlights: { label: string; value: string }[];
  chartData: Array<Record<string, number | string>>;
  chartKey: string;
  chartLabel: string;
  footnote: string;
};

export type CalculatorDefinition = {
  key: string;
  title: string;
  summary: string;
  fields: CalculatorField[];
  defaultValues: Record<string, number>;
  compute: (values: Record<string, number>) => CalculatorResult;
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
  style: "currency",
  currency: "INR",
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 1,
  notation: "compact",
  compactDisplay: "short",
});

const numberFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 1,
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(Number.isFinite(value) ? value : 0);
}

export function formatCompactCurrency(value: number) {
  return `₹${compactCurrencyFormatter.format(
    Number.isFinite(value) ? value : 0,
  )}`;
}

function monthlyRate(annualRate: number) {
  return annualRate / 100 / 12;
}

function maybePoint(
  month: number,
  totalMonths: number,
  step: number,
  label: string,
  value: number,
  secondary?: number,
) {
  if (month === 1 || month === totalMonths || month % step === 0) {
    return {
      period: label,
      value: Math.max(0, Number(value.toFixed(0))),
      secondary: Math.max(0, Number((secondary ?? 0).toFixed(0))),
    };
  }

  return null;
}

function sipCalculator(values: Record<string, number>): CalculatorResult {
  const monthlyInvestment = values.monthlyInvestment;
  const annualReturn = values.annualReturn;
  const years = values.years;
  const rate = monthlyRate(annualReturn);
  const totalMonths = years * 12;
  const step = Math.max(12, Math.floor(totalMonths / 6));

  let balance = 0;
  const chartData: Array<Record<string, number | string>> = [];

  for (let month = 1; month <= totalMonths; month += 1) {
    balance = (balance + monthlyInvestment) * (1 + rate);
    const invested = monthlyInvestment * month;
    const point = maybePoint(
      month,
      totalMonths,
      step,
      `Month ${month}`,
      balance,
      invested,
    );

    if (point) {
      chartData.push({
        period: point.period,
        wealth: point.value,
        invested: point.secondary,
      });
    }
  }

  const totalInvested = monthlyInvestment * totalMonths;
  const returns = balance - totalInvested;

  return {
    highlights: [
      { label: "Total invested", value: formatCurrency(totalInvested) },
      { label: "Estimated returns", value: formatCurrency(returns) },
      { label: "Projected wealth", value: formatCurrency(balance) },
    ],
    chartData,
    chartKey: "wealth",
    chartLabel: "Projected wealth",
    footnote:
      "Projection assumes monthly investing with a steady annualized return and is meant for planning, not guaranteed performance.",
  };
}

function swpCalculator(values: Record<string, number>): CalculatorResult {
  const corpus = values.corpus;
  const monthlyWithdrawal = values.monthlyWithdrawal;
  const annualReturn = values.annualReturn;
  const years = values.years;
  const rate = monthlyRate(annualReturn);
  const totalMonths = years * 12;
  const step = Math.max(12, Math.floor(totalMonths / 6));

  let balance = corpus;
  let totalWithdrawals = 0;
  const chartData: Array<Record<string, number | string>> = [];

  for (let month = 1; month <= totalMonths; month += 1) {
    const growth = balance * rate;
    balance = Math.max(0, balance + growth - monthlyWithdrawal);
    totalWithdrawals += balance > 0 ? monthlyWithdrawal : monthlyWithdrawal + balance;
    const point = maybePoint(
      month,
      totalMonths,
      step,
      `Month ${month}`,
      balance,
      totalWithdrawals,
    );

    if (point) {
      chartData.push({
        period: point.period,
        balance: point.value,
        withdrawals: point.secondary,
      });
    }
  }

  return {
    highlights: [
      { label: "Starting corpus", value: formatCurrency(corpus) },
      { label: "Total withdrawals", value: formatCurrency(totalWithdrawals) },
      { label: "Remaining balance", value: formatCurrency(balance) },
    ],
    chartData,
    chartKey: "balance",
    chartLabel: "Remaining balance",
    footnote:
      "SWP projections assume regular withdrawals and a constant return rate. Real outcomes depend on sequence of returns and taxation.",
  };
}

function lumpsumCalculator(values: Record<string, number>): CalculatorResult {
  const principal = values.principal;
  const annualReturn = values.annualReturn;
  const years = values.years;
  const rate = monthlyRate(annualReturn);
  const totalMonths = years * 12;
  const step = Math.max(12, Math.floor(totalMonths / 6));

  let balance = principal;
  const chartData: Array<Record<string, number | string>> = [];

  for (let month = 1; month <= totalMonths; month += 1) {
    balance *= 1 + rate;
    const point = maybePoint(
      month,
      totalMonths,
      step,
      `Month ${month}`,
      balance,
      principal,
    );

    if (point) {
      chartData.push({
        period: point.period,
        value: point.value,
        invested: point.secondary,
      });
    }
  }

  const gains = balance - principal;

  return {
    highlights: [
      { label: "Initial investment", value: formatCurrency(principal) },
      { label: "Estimated gains", value: formatCurrency(gains) },
      { label: "Future value", value: formatCurrency(balance) },
    ],
    chartData,
    chartKey: "value",
    chartLabel: "Future value",
    footnote:
      "Use this to compare one-time deployment scenarios and review whether the asset mix matches your goal horizon.",
  };
}

function emiCalculator(values: Record<string, number>): CalculatorResult {
  const principal = values.principal;
  const annualRate = values.annualRate;
  const years = values.years;
  const rate = monthlyRate(annualRate);
  const totalMonths = years * 12;
  const emi =
    rate === 0
      ? principal / totalMonths
      : (principal * rate * (1 + rate) ** totalMonths) /
        ((1 + rate) ** totalMonths - 1);

  let balance = principal;
  const step = Math.max(12, Math.floor(totalMonths / 6));
  const chartData: Array<Record<string, number | string>> = [];

  for (let month = 1; month <= totalMonths; month += 1) {
    const interest = balance * rate;
    const principalPaid = emi - interest;
    balance = Math.max(0, balance - principalPaid);
    const point = maybePoint(
      month,
      totalMonths,
      step,
      `Month ${month}`,
      balance,
      emi * month,
    );

    if (point) {
      chartData.push({
        period: point.period,
        outstanding: point.value,
        totalPaid: point.secondary,
      });
    }
  }

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  return {
    highlights: [
      { label: "Monthly EMI", value: formatCurrency(emi) },
      { label: "Total interest", value: formatCurrency(totalInterest) },
      { label: "Total payment", value: formatCurrency(totalPayment) },
    ],
    chartData,
    chartKey: "outstanding",
    chartLabel: "Outstanding balance",
    footnote:
      "EMI output helps visualize repayment burden and how interest cost changes with tenure and rate assumptions.",
  };
}

function retirementCalculator(values: Record<string, number>): CalculatorResult {
  const currentAge = values.currentAge;
  const retirementAge = values.retirementAge;
  const monthlyExpense = values.monthlyExpense;
  const inflation = values.inflation;
  const returnRate = values.returnRate;
  const currentSavings = values.currentSavings;
  const yearsToRetire = Math.max(1, retirementAge - currentAge);
  const futureMonthlyExpense =
    monthlyExpense * (1 + inflation / 100) ** yearsToRetire;
  const futureAnnualExpense = futureMonthlyExpense * 12;
  const corpusNeeded = futureAnnualExpense * 25;
  const currentSavingsFuture =
    currentSavings * (1 + returnRate / 100) ** yearsToRetire;
  const gap = Math.max(0, corpusNeeded - currentSavingsFuture);
  const r = monthlyRate(returnRate);
  const months = yearsToRetire * 12;
  const sipNeeded =
    r === 0 ? gap / months : gap / ((((1 + r) ** months - 1) / r) * (1 + r));

  let corpus = currentSavings;
  const step = Math.max(12, Math.floor(months / 6));
  const chartData: Array<Record<string, number | string>> = [];

  for (let month = 1; month <= months; month += 1) {
    corpus = (corpus + sipNeeded) * (1 + r);
    const point = maybePoint(
      month,
      months,
      step,
      `Age ${currentAge + Math.floor(month / 12)}`,
      corpus,
      corpusNeeded,
    );

    if (point) {
      chartData.push({
        period: point.period,
        corpus: point.value,
        target: point.secondary,
      });
    }
  }

  return {
    highlights: [
      { label: "Retirement corpus need", value: formatCurrency(corpusNeeded) },
      { label: "Projected future monthly expense", value: formatCurrency(futureMonthlyExpense) },
      { label: "Suggested monthly investment", value: formatCurrency(sipNeeded) },
    ],
    chartData,
    chartKey: "corpus",
    chartLabel: "Projected retirement corpus",
    footnote:
      "This planning model uses an inflation-adjusted expense estimate and a simplified withdrawal multiple to size the target corpus.",
  };
}

function childEducationCalculator(
  values: Record<string, number>,
): CalculatorResult {
  const childAge = values.childAge;
  const targetAge = values.targetAge;
  const currentCost = values.currentCost;
  const inflation = values.inflation;
  const returnRate = values.returnRate;
  const currentSavings = values.currentSavings;
  const years = Math.max(1, targetAge - childAge);
  const futureCost = currentCost * (1 + inflation / 100) ** years;
  const futureSavings =
    currentSavings * (1 + returnRate / 100) ** years;
  const gap = Math.max(0, futureCost - futureSavings);
  const months = years * 12;
  const r = monthlyRate(returnRate);
  const sipNeeded =
    r === 0 ? gap / months : gap / ((((1 + r) ** months - 1) / r) * (1 + r));
  const step = Math.max(12, Math.floor(months / 6));

  let corpus = currentSavings;
  const chartData: Array<Record<string, number | string>> = [];

  for (let month = 1; month <= months; month += 1) {
    corpus = (corpus + sipNeeded) * (1 + r);
    const point = maybePoint(
      month,
      months,
      step,
      `Year ${Math.ceil(month / 12)}`,
      corpus,
      futureCost,
    );

    if (point) {
      chartData.push({
        period: point.period,
        corpus: point.value,
        target: point.secondary,
      });
    }
  }

  return {
    highlights: [
      { label: "Future education cost", value: formatCurrency(futureCost) },
      { label: "Current savings at goal", value: formatCurrency(futureSavings) },
      { label: "Suggested monthly SIP", value: formatCurrency(sipNeeded) },
    ],
    chartData,
    chartKey: "corpus",
    chartLabel: "Projected education corpus",
    footnote:
      "Education planning becomes more reliable when inflation assumptions are realistic and current savings are included in the model.",
  };
}

function inflationCalculator(values: Record<string, number>): CalculatorResult {
  const currentCost = values.currentCost;
  const inflation = values.inflation;
  const years = values.years;
  const futureCost = currentCost * (1 + inflation / 100) ** years;
  const chartData = Array.from({ length: years + 1 }, (_, year) => ({
    period: `Year ${year}`,
    value: Number((currentCost * (1 + inflation / 100) ** year).toFixed(0)),
  }));

  return {
    highlights: [
      { label: "Current cost", value: formatCurrency(currentCost) },
      { label: "Future cost", value: formatCurrency(futureCost) },
      {
        label: "Inflation impact",
        value: formatCurrency(futureCost - currentCost),
      },
    ],
    chartData,
    chartKey: "value",
    chartLabel: "Inflation-adjusted cost",
    footnote:
      "A simple inflation view is useful for education, retirement, lifestyle, and insurance planning conversations.",
  };
}

function insuranceNeedCalculator(
  values: Record<string, number>,
): CalculatorResult {
  const annualIncome = values.annualIncome;
  const age = values.age;
  const liabilities = values.liabilities;
  const savings = values.savings;
  const existingCover = values.existingCover;
  const multiplier = age < 35 ? 20 : age < 45 ? 15 : age < 55 ? 12 : 8;
  const incomeCover = annualIncome * multiplier;
  const grossNeed = incomeCover + liabilities;
  const netNeed = Math.max(0, grossNeed - savings - existingCover);
  const chartData = [
    { period: "Income replacement", value: incomeCover },
    { period: "Liabilities", value: liabilities },
    { period: "Existing assets", value: Math.max(0, savings) },
    { period: "Existing cover", value: Math.max(0, existingCover) },
    { period: "Suggested gap cover", value: netNeed },
  ];

  return {
    highlights: [
      { label: "Gross protection need", value: formatCurrency(grossNeed) },
      { label: "Available offsets", value: formatCurrency(savings + existingCover) },
      { label: "Suggested additional cover", value: formatCurrency(netNeed) },
    ],
    chartData,
    chartKey: "value",
    chartLabel: "Insurance need analysis",
    footnote:
      "This is a directional planning output. Final cover should account for family dependency, liabilities, and claim-suitable policy design.",
  };
}

export const calculatorDefinitions: CalculatorDefinition[] = [
  {
    key: "sip",
    title: "SIP Calculator",
    summary: "Understand how monthly investing compounds toward your target corpus.",
    fields: [
      {
        key: "monthlyInvestment",
        label: "Monthly investment",
        min: 1000,
        max: 200000,
        step: 1000,
        prefix: "₹",
      },
      {
        key: "annualReturn",
        label: "Expected return",
        min: 4,
        max: 20,
        step: 0.5,
        suffix: "%",
      },
      { key: "years", label: "Time period", min: 1, max: 40, step: 1, suffix: " yrs" },
    ],
    defaultValues: {
      monthlyInvestment: 15000,
      annualReturn: 12,
      years: 15,
    },
    compute: sipCalculator,
  },
  {
    key: "swp",
    title: "SWP Calculator",
    summary: "Model withdrawals against an invested corpus and expected portfolio return.",
    fields: [
      { key: "corpus", label: "Investment corpus", min: 500000, max: 50000000, step: 100000, prefix: "₹" },
      { key: "monthlyWithdrawal", label: "Monthly withdrawal", min: 5000, max: 300000, step: 5000, prefix: "₹" },
      { key: "annualReturn", label: "Expected return", min: 4, max: 16, step: 0.5, suffix: "%" },
      { key: "years", label: "Duration", min: 1, max: 30, step: 1, suffix: " yrs" },
    ],
    defaultValues: {
      corpus: 5000000,
      monthlyWithdrawal: 40000,
      annualReturn: 8,
      years: 15,
    },
    compute: swpCalculator,
  },
  {
    key: "lumpsum",
    title: "Lumpsum Calculator",
    summary: "Evaluate how a one-time investment can grow over a selected horizon.",
    fields: [
      { key: "principal", label: "One-time investment", min: 100000, max: 50000000, step: 50000, prefix: "₹" },
      { key: "annualReturn", label: "Expected return", min: 4, max: 20, step: 0.5, suffix: "%" },
      { key: "years", label: "Time period", min: 1, max: 30, step: 1, suffix: " yrs" },
    ],
    defaultValues: {
      principal: 1000000,
      annualReturn: 11,
      years: 10,
    },
    compute: lumpsumCalculator,
  },
  {
    key: "emi",
    title: "EMI Calculator",
    summary: "See monthly repayment burden, interest cost, and outstanding balance.",
    fields: [
      { key: "principal", label: "Loan amount", min: 500000, max: 50000000, step: 100000, prefix: "₹" },
      { key: "annualRate", label: "Interest rate", min: 5, max: 18, step: 0.25, suffix: "%" },
      { key: "years", label: "Loan tenure", min: 1, max: 30, step: 1, suffix: " yrs" },
    ],
    defaultValues: {
      principal: 4500000,
      annualRate: 8.5,
      years: 20,
    },
    compute: emiCalculator,
  },
  {
    key: "retirement",
    title: "Retirement Calculator",
    summary: "Estimate a retirement corpus and the monthly contribution needed to close the gap.",
    fields: [
      { key: "currentAge", label: "Current age", min: 25, max: 55, step: 1, suffix: " yrs" },
      { key: "retirementAge", label: "Retirement age", min: 45, max: 70, step: 1, suffix: " yrs" },
      { key: "monthlyExpense", label: "Current monthly expense", min: 30000, max: 500000, step: 5000, prefix: "₹" },
      { key: "inflation", label: "Inflation", min: 3, max: 10, step: 0.5, suffix: "%" },
      { key: "returnRate", label: "Expected return", min: 5, max: 14, step: 0.5, suffix: "%" },
      { key: "currentSavings", label: "Current retirement corpus", min: 0, max: 20000000, step: 100000, prefix: "₹" },
    ],
    defaultValues: {
      currentAge: 32,
      retirementAge: 60,
      monthlyExpense: 90000,
      inflation: 6,
      returnRate: 10,
      currentSavings: 1200000,
    },
    compute: retirementCalculator,
  },
  {
    key: "child",
    title: "Child Education Planner",
    summary: "Project future education cost and the SIP required to fund the milestone with confidence.",
    fields: [
      { key: "childAge", label: "Child age", min: 0, max: 18, step: 1, suffix: " yrs" },
      { key: "targetAge", label: "Target age", min: 15, max: 25, step: 1, suffix: " yrs" },
      { key: "currentCost", label: "Current education cost", min: 500000, max: 50000000, step: 100000, prefix: "₹" },
      { key: "inflation", label: "Education inflation", min: 4, max: 12, step: 0.5, suffix: "%" },
      { key: "returnRate", label: "Expected return", min: 5, max: 14, step: 0.5, suffix: "%" },
      { key: "currentSavings", label: "Current goal corpus", min: 0, max: 10000000, step: 100000, prefix: "₹" },
    ],
    defaultValues: {
      childAge: 5,
      targetAge: 18,
      currentCost: 2500000,
      inflation: 8,
      returnRate: 10,
      currentSavings: 200000,
    },
    compute: childEducationCalculator,
  },
  {
    key: "inflation",
    title: "Inflation Calculator",
    summary: "Visualize how inflation compounds the future cost of any financial goal.",
    fields: [
      { key: "currentCost", label: "Current cost", min: 50000, max: 50000000, step: 50000, prefix: "₹" },
      { key: "inflation", label: "Inflation rate", min: 3, max: 12, step: 0.5, suffix: "%" },
      { key: "years", label: "Years ahead", min: 1, max: 30, step: 1, suffix: " yrs" },
    ],
    defaultValues: {
      currentCost: 1000000,
      inflation: 6,
      years: 12,
    },
    compute: inflationCalculator,
  },
  {
    key: "insurance",
    title: "Insurance Need Calculator",
    summary: "Estimate a directional life cover requirement based on income, liabilities, and current assets.",
    fields: [
      { key: "annualIncome", label: "Annual income", min: 500000, max: 10000000, step: 100000, prefix: "₹" },
      { key: "age", label: "Age", min: 25, max: 60, step: 1, suffix: " yrs" },
      { key: "liabilities", label: "Outstanding liabilities", min: 0, max: 50000000, step: 100000, prefix: "₹" },
      { key: "savings", label: "Liquid savings & investments", min: 0, max: 50000000, step: 100000, prefix: "₹" },
      { key: "existingCover", label: "Existing insurance cover", min: 0, max: 50000000, step: 100000, prefix: "₹" },
    ],
    defaultValues: {
      annualIncome: 1800000,
      age: 34,
      liabilities: 4500000,
      savings: 1200000,
      existingCover: 5000000,
    },
    compute: insuranceNeedCalculator,
  },
];

export const calculatorQuickFacts = [
  "Real-time outputs with chart visualization",
  "Mobile-friendly sliders and premium summary cards",
  "Built for investor education and first-level planning",
];

export function formatFieldValue(
  value: number,
  prefix?: string,
  suffix?: string,
) {
  if (prefix === "₹") {
    if (value >= 1000000) {
      return `${prefix}${numberFormatter.format(value / 100000)} L`;
    }

    return `${prefix}${numberFormatter.format(value)}`;
  }

  return `${prefix ?? ""}${numberFormatter.format(value)}${suffix ?? ""}`;
}
