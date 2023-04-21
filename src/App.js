import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import CarCollection from './pages/CarCollection';
import CarDetail from './pages/CarDetail';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { createContext, useState } from 'react';
import MyWishList from './pages/MyWishList';
import Signout from './pages/Signout';
import Admin from './pages/Admin';

export const LocalDataContext = createContext();

function App() {
  const [userId, setUserId] = useState();

  return (
    <BrowserRouter>
      <LocalDataContext.Provider value={{ userId, setUserId }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cars" element={<CarCollection />} />
          <Route path="/carDetails/:index" element={<CarDetail />} />
          <Route path="/carDetails" element={<CarDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/mywish" element={<MyWishList />} />
        </Routes>
      </LocalDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
