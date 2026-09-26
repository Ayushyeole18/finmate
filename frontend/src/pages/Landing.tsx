import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import LandingHeader from "@/components/LandingHeader";
import { MetricCard, InsightCard } from "@/components/ui/finmate-cards";

const pillars = [
  { name: "TRACK", description: "Know where every rupee goes." },
  { name: "GROW", description: "Turn financial data into long-term plans." },
  { name: "LEARN", description: "Build financial intelligence." },
  { name: "PROTECT", description: "Prepare for what can go wrong." },
  { name: "AI CFO", description: "Ask your money anything." },
];

const pipeline = ["TRACK", "UNDERSTAND", "DETECT", "PREDICT", "EXPLAIN", "ACT"];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl">
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
            <span className="text-foreground">YOUR MONEY.</span>
            <br />
            <span className="text-primary">UNDERSTOOD.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Track every rupee. Understand your financial behavior. Plan your future.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link to="/dashboard" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              GET STARTED
              <ArrowUpRight className="size-4" />
            </Link>
            <a href="#ai-cfo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-3">EXPLORE AI CFO</a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
          <MetricCard
            label="Net Worth"
            value="Rs 8,42,560"
            change={{ value: "8.4% this month", direction: "up" }}
          />
          <MetricCard
            label="Savings Rate"
            value="34%"
            change={{ value: "2.1% this month", direction: "up" }}
          />
          <InsightCard>
            Dining spending is 14% above your normal trend this month.
          </InsightCard>
        </div>
      </section>

      <section id="product" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Five Pillars</p>
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="py-8 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                  {pillar.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">How FinMate Thinks</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
            From data to decisions.
          </h2>

          <div className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-6">
            {pipeline.map((stage, index) => (
              <div key={stage} className="flex items-center gap-2">
                <div className="px-5 py-3 rounded-md border border-border bg-card">
                  <span className="font-heading text-sm md:text-base font-semibold tracking-wide text-foreground">
                    {stage}
                  </span>
                </div>
                {index < pipeline.length - 1 && (
                  <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
