import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
    isActive
      ? "text-primary bg-accent"
      : "text-muted-foreground hover:text-foreground hover:bg-accent"
  }`;

const dropdownTriggerClass =
  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors outline-none";

type NavDropdownProps = {
  label: string;
  items: string[];
};

function NavDropdown({ label, items }: NavDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={dropdownTriggerClass}>
        {label}
        <ChevronDown className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item) => (
          <DropdownMenuItem key={item} asChild>
            <a href="#">{item}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-primary">FinMate</span>
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavDropdown
              label="Track"
              items={["Transactions", "Budgeting", "Anomaly Detection", "Ghost Spend"]}
            />
            <NavDropdown
              label="Grow"
              items={["Portfolio", "FIRE Planner", "Tax Planner", "Trust Engine", "Calculators"]}
            />
            <NavDropdown
              label="Learn"
              items={["Lessons", "Quizzes", "My Progress"]}
            />
            <NavDropdown
              label="Protect"
              items={["Insurance", "Guardrail Goals", "Family & Legacy", "Web3 Vault"]}
            />
            <NavLink to="/ai-cfo" className={navLinkClass}>
              AI CFO
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}