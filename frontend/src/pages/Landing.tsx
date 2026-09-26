import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LandingHeader from "@/components/LandingHeader";
import { MetricCard, InsightCard } from "@/components/ui/finmate-cards";

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
    </div>
  );
}
