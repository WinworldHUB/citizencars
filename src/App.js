import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import CarCollection from "./pages/CarCollection";
import CarDetail from "./pages/CarDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarCollection />} />
        <Route path="/carDetails/:index" element={<CarDetail />} />
        <Route path="/carDetails" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
