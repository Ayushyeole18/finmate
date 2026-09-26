import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BalanceVisibilityProvider } from "./context/BalanceVisibilityContext";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Grow from "./pages/Grow";
import Learn from "./pages/Learn";
import Protect from "./pages/Protect";
import AICFO from "./pages/AICFO";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

function App() {
  return (
    <BalanceVisibilityProvider>
      <BrowserRouter>
        <Routes>
          {/* Public landing page — no app navbar */}
          <Route path="/" element={<Landing />} />

          {/* Authenticated app routes — wrapped in Navbar */}
          {/* NOTE: not yet auth-gated; /dashboard is temporary until real auth exists */}
          <Route path="/dashboard" element={<AppLayout><Home /></AppLayout>} />
          <Route path="/track" element={<AppLayout><Track /></AppLayout>} />
          <Route path="/grow" element={<AppLayout><Grow /></AppLayout>} />
          <Route path="/learn" element={<AppLayout><Learn /></AppLayout>} />
          <Route path="/protect" element={<AppLayout><Protect /></AppLayout>} />
          <Route path="/ai-cfo" element={<AppLayout><AICFO /></AppLayout>} />
        </Routes>
      </BrowserRouter>
    </BalanceVisibilityProvider>
  );
}

export default App;