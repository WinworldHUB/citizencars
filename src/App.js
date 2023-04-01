import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import CarCollection from "./pages/CarCollection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<CarCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
