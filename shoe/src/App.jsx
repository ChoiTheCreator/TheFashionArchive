import Shoedata from './data/Shoedata';
import './App.css';
import { useEffect, useState } from 'react';
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
  const [pressedShoes, setPressesdShoes] = useState([]);

  const url = `https://codingapple1.github.io/shop/data${clickCnt}.json`;
  //처음 접근시, 로컬 스토리지에 array 자료 하나 생성 (app.jsx에서는 로컬스토리지 세팅만 담당하여 책임을 분리한다.)
  //그러나 , 이건 리렌더링 할 시 []가 초기화 되기에, 데이터가 저장이 안될 가능성이 있다.
  useEffect(() => {
    //pressed라는 key를 이용해, 로컬스트로지에 데이터를 저장한다. 먼저 fetching 하고 없을때만
    //빈 배열을 주게 코드를 다시 짠다면 (반영구적 로컬스토리지 복원을 위하여)
    const saveShoes = JSON.parse(localStorage.getItem('pressed')) || [];
    setPressesdShoes(saveShoes);
  }, []);

  //사용자가 신발을 클릭하면, 해당 shoe.id가 로컬스토로지에 저장되는 로직
  const postClickedShoe = (shoe) => {
    localStorage.setItem(shoe.id);
  };
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
              <ShoeList shoes={shoes} postClikedShoe={postClickedShoe} />
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
