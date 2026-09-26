import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Caption, Metric, Small, Body } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, AlertTriangle, Sparkles } from "lucide-react";

/* ---------- 1. Primary Metric Card ---------- */
/* e.g. Net Worth, Income, Expenses */

type MetricCardProps = {
  label: string;
  value: string;
  change?: { value: string; direction: "up" | "down" };
  className?: string;
};

export function MetricCard({ label, value, change, className }: MetricCardProps) {
  return (
    <Card className={cn("ring-1 ring-border", className)}>
      <CardContent>
        <Caption>{label}</Caption>
        <Metric className="mt-1 block">{value}</Metric>
        {change && (
          <div
            className={cn(
              "mt-2 flex items-center gap-1 text-sm font-medium",
              change.direction === "up" ? "text-success" : "text-destructive"
            )}
          >
            {change.direction === "up" ? (
              <TrendingUp className="size-4" />
            ) : (
              <TrendingDown className="size-4" />
            )}
            {change.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------- 2. Analytical Card ---------- */
/* Wraps a chart or data visualization with a title */

type AnalyticalCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function AnalyticalCard({ title, children, className }: AnalyticalCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

/* ---------- 3. AI Insight Card ---------- */
/* Emerald/Mint accent, used for AI CFO insights */

type InsightCardProps = {
  children: ReactNode;
  className?: string;
};

export function InsightCard({ children, className }: InsightCardProps) {
  return (
    <Card className={cn("ring-1 ring-primary/30 bg-accent/40", className)}>
      <CardContent className="flex gap-3">
        <Sparkles className="size-5 shrink-0 text-primary" />
        <div>
          <Caption className="text-primary">AI Insight</Caption>
          <Body className="mt-1">{children}</Body>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------- 4. Alert Card ---------- */
/* Used for anomalies, unusual spending, warnings */

type AlertCardProps = {
  title: string;
  children: ReactNode;
  severity?: "warning" | "error";
  className?: string;
};

export function AlertCard({ title, children, severity = "warning", className }: AlertCardProps) {
  const color = severity === "error" ? "text-destructive" : "text-warning";
  const ring = severity === "error" ? "ring-destructive/30" : "ring-warning/30";

  return (
    <Card className={cn("ring-1", ring, className)}>
      <CardContent className="flex gap-3">
        <AlertTriangle className={cn("size-5 shrink-0", color)} />
        <div>
          <Caption className={color}>{title}</Caption>
          <Body className="mt-1">{children}</Body>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------- 5. Progress Card ---------- */
/* Used for FIRE progress, goals, guardrail targets */

type ProgressCardProps = {
  label: string;
  current: string;
  target: string;
  percent: number;
  className?: string;
};

export function ProgressCard({ label, current, target, percent, className }: ProgressCardProps) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <Card className={className}>
      <CardContent>
        <Caption>{label}</Caption>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-heading text-2xl font-bold text-foreground">{current}</span>
          <span className="text-sm text-muted-foreground">/ {target}</span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary transition-all"
            style={{ width: `${clamped}%` }}
          />
        </div>
        <Small className="mt-1 block">{clamped}% complete</Small>
      </CardContent>
    </Card>
  );
}

/* ---------- 6. Action Card ---------- */
/* Used for budget alerts, nudges requiring user action */

type ActionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function ActionCard({ title, children, className }: ActionCardProps) {
  return (
    <Card className={cn("ring-1 ring-border bg-secondary", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Body className="text-muted-foreground">{children}</Body>
      </CardContent>
    </Card>
  );
}