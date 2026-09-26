import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BalanceVisibilityProvider } from "./context/BalanceVisibilityContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Grow from "./pages/Grow";
import Learn from "./pages/Learn";
import Protect from "./pages/Protect";
import AICFO from "./pages/AICFO";

function App() {
  return (
    <BalanceVisibilityProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/track" element={<Track />} />
              <Route path="/grow" element={<Grow />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/protect" element={<Protect />} />
              <Route path="/ai-cfo" element={<AICFO />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </BalanceVisibilityProvider>
  );
}

export default App;