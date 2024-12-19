/*eslint-disable */
import Shoedata from './data/Shoedata';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShoeList from './Components/ShoeList';
import ContactPage from './Pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import AboutPage from './Pages/AboutPage';
import ShoeDetail from './Components/ShoeDetail';

function App() {
  const [shoes, setShoes] = useState(Shoedata);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <div className="container">
              <Hero />
              <ShoeList shoes={shoes} />
            </div>
          }
        />

        <Route
          path="/detail"
          element={<ShoeList shoes={shoes}></ShoeList>}
        ></Route>
        {/* 상세 페이지 */}
        <Route path="/detail/:id" element={<ShoeDetail shoes={shoes} />} />

        {/* About 및 Contact 페이지 */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
