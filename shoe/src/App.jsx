import Shoedata from './data/Shoedata';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShoeList from './Components/ShoeList';
import ContactPage from './Pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import AboutPage from './Pages/AboutPage';
import ShoeDetail from './Components/ShoeDetail';
import CartPage from './Pages/CartPage';
import RecentlyShownPage from './Pages/RecentlyShownPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 추가
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchShoesData = async (clickCnt) => {
  const response = await axios.get(
    `https://codingapple1.github.io/shop/data${clickCnt}.json`
  );
  return response.data;
};

// QueryClient 생성
const queryClient = new QueryClient(); // 추가

function App() {
  const [clickCnt, setClickCnt] = useState(3);
  const [pressedShoes, setPressedShoes] = useState([]);

  const {
    data: shoes = Shoedata,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['shoes'],
    queryFn: () => fetchShoesData(clickCnt),
  });

  useEffect(() => {
    const savedShoes = JSON.parse(localStorage.getItem('pressed')) || [];
    setPressedShoes(savedShoes);
  }, []);

  const postClickedShoe = (shoe) => {
    const updatedPressedShoes = [...pressedShoes, shoe.id];
    setPressedShoes(updatedPressedShoes);
    localStorage.setItem('pressed', JSON.stringify(updatedPressedShoes));
  };

  const handleRefetch = () => {
    refetch();
  };

  if (isLoading) {
    return <p>로딩 중입니다...</p>;
  }

  if (isError) {
    return <p>데이터를 불러오는 중 오류가 발생했습니다!</p>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Hero />
              <ShoeList shoes={shoes} postClickedShoe={postClickedShoe} />
              <button
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => setClickCnt((prev) => prev + 1)}
              >
                더 가져오기
              </button>
              <button
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={handleRefetch}
              >
                새로고침
              </button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<ShoeDetail shoes={shoes} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/recently" element={<RecentlyShownPage shoes={shoes} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default MainApp;
