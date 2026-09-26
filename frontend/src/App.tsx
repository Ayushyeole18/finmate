import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Grow from "./pages/Grow";
import Learn from "./pages/Learn";
import Protect from "./pages/Protect";
import AICFO from "./pages/AICFO";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/grow" element={<Grow />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/protect" element={<Protect />} />
          <Route path="/ai-cfo" element={<AICFO />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;