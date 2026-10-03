import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BalanceVisibilityProvider } from "./context/BalanceVisibilityContext";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Grow from "./pages/Grow";
import Learn from "./pages/Learn";
import Protect from "./pages/Protect";
import AICFO from "./pages/AICFO";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </div>
    </RequireAuth>
  );
}

function App() {
  return (
    <AuthProvider>
      <BalanceVisibilityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/dashboard" element={<AppLayout><Home /></AppLayout>} />
            <Route path="/track" element={<AppLayout><Track /></AppLayout>} />
            <Route path="/grow" element={<AppLayout><Grow /></AppLayout>} />
            <Route path="/learn" element={<AppLayout><Learn /></AppLayout>} />
            <Route path="/protect" element={<AppLayout><Protect /></AppLayout>} />
            <Route path="/ai-cfo" element={<AppLayout><AICFO /></AppLayout>} />
          </Routes>
        </BrowserRouter>
      </BalanceVisibilityProvider>
    </AuthProvider>
  );
}

export default App;