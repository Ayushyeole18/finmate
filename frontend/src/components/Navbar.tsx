import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
    isActive
      ? "text-emerald-400 bg-slate-800"
      : "text-slate-300 hover:text-white hover:bg-slate-800"
  }`;

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-emerald-400">FinMate</span>
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/track" className={navLinkClass}>
              Track
            </NavLink>
            <NavLink to="/grow" className={navLinkClass}>
              Grow
            </NavLink>
            <NavLink to="/learn" className={navLinkClass}>
              Learn
            </NavLink>
            <NavLink to="/protect" className={navLinkClass}>
              Protect
            </NavLink>
            <NavLink to="/ai-cfo" className={navLinkClass}>
              AI CFO
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}