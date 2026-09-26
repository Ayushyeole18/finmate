import { Link } from "react-router-dom";

export default function LandingHeader() {
  return (
    <header className="border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold text-primary">FinMate</span>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#product" className="hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#ai-cfo" className="hover:text-foreground transition-colors">
            AI CFO
          </a>
          <a href="#security" className="hover:text-foreground transition-colors">
            Security
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}