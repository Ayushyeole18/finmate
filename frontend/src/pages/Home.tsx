import { H1 } from "@/components/ui/typography";
import {
  MetricCard,
  AnalyticalCard,
  InsightCard,
  ProgressCard,
} from "@/components/ui/finmate-cards";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cashFlowData = [
  { month: "Apr", income: 62000, expenses: 41000 },
  { month: "May", income: 64000, expenses: 45000 },
  { month: "Jun", income: 61000, expenses: 39000 },
  { month: "Jul", income: 68000, expenses: 47000 },
  { month: "Aug", income: 70000, expenses: 44000 },
  { month: "Sep", income: 72000, expenses: 48000 },
];

const recentTransactions = [
  { name: "Amazon", category: "Shopping", amount: "Rs 2,340" },
  { name: "Zomato", category: "Food", amount: "Rs 680" },
  { name: "Salary Credit", category: "Income", amount: "+Rs 72,000" },
  { name: "Electricity Bill", category: "Bills", amount: "Rs 1,850" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <H1>Dashboard</H1>
        <p className="text-sm text-muted-foreground mt-1">
          Sample data shown below. Connect your accounts to see real numbers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          label="Net Worth"
          value="Rs 8,42,560"
          change={{ value: "8.4% this month", direction: "up" }}
        />
        <MetricCard
          label="Income"
          value="Rs 72,000"
          change={{ value: "3.2% this month", direction: "up" }}
        />
        <MetricCard
          label="Expenses"
          value="Rs 48,000"
          change={{ value: "5.1% vs last month", direction: "down" }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AnalyticalCard title="Cash Flow" className="lg:col-span-2">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line type="monotone" dataKey="income" stroke="var(--primary)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="expenses" stroke="var(--destructive)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AnalyticalCard>

        <ProgressCard label="FIRE Progress" current="Rs 64L" target="Rs 1.8Cr" percent={35} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <InsightCard className="lg:col-span-2">
          Your dining spending is 14% above your normal trend this month.
          Consider reviewing recent food delivery transactions.
        </InsightCard>

        <AnalyticalCard title="Recent Transactions">
          <div className="space-y-3">
            {recentTransactions.map((txn) => (
              <div key={txn.name} className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-foreground font-medium">{txn.name}</p>
                  <p className="text-muted-foreground text-xs">{txn.category}</p>
                </div>
                <span
                  className={
                    txn.amount.startsWith("+") ? "text-success font-medium" : "text-foreground"
                  }
                >
                  {txn.amount}
                </span>
              </div>
            ))}
          </div>
        </AnalyticalCard>
      </div>
    </div>
  );
}
