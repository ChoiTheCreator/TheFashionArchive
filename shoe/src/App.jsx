import Shoedata from './data/Shoedata';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShoeList from './Components/ShoeList';
import ContactPage from './Pages/ContactPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import AboutPage from './Pages/AboutPage';
import ShoeDetail from './Components/ShoeDetail';
import CartPage from './Pages/CartPage';
import ErrorMessage from './Style/Components/ErrorMessage';
import axios from 'axios';

function App() {
  const [shoes, setShoes] = useState(Shoedata);
  const [clickCnt, setClickCnt] = useState(2);
  const [noMoreItem, setNoMoreItem] = useState(false);

  const url = `https://codingapple1.github.io/shop/data${clickCnt}.json`;

  const fetchData = () => {
    setClickCnt((prevClickCnt) => {
      const nextClickCnt = prevClickCnt + 1;

      if (nextClickCnt > 4) {
        console.log('더이상 아이템 없음 ㅅㄱ');
        setNoMoreItem(true);
        setTimeout(() => setNoMoreItem(false), 2000);
        return prevClickCnt;
      }

      axios
        .get(url)
        .then((result) => {
          const copy = [...shoes, ...result.data];
          setShoes(copy);
        })
        .catch((error) => console.log(error));

      return nextClickCnt;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Hero />
              <ShoeList shoes={shoes} />
              {noMoreItem && (
                <ErrorMessage>더 이상 가져올 신발이 없습니다!</ErrorMessage>
              )}
              <button
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={fetchData}
              >
                가져오기
              </button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<ShoeDetail shoes={shoes} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
