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
import axios from 'axios';
function App() {
  const url = 'https://codingapple1.github.io/shop/data2.json';
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
              <button
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  axios.get(url).then((result) => {
                    const copy = [...shoes, ...result.data];
                    setShoes(copy);
                  });
                }}
              >
                버튼아아아아아아임
              </button>
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
