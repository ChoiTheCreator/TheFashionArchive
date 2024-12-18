/*eslint-disable */
import Shoedata from './data/Shoedata';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShoeList from './Components/ShoeList';

import { useNavigate, Outlet, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
function App() {
  //따로 만든 Shoedata.jsx에서 가져온 객체배열임! (export + import 해서 state로 담음,) [{obj1, obj2 ,, 이 형태임}]
  const [shoes, setShoes] = useState(Shoedata);

  return (
    <div className="App">
      <Routes>
        {/* 메인페이지 라우트 */}
        <Route
          path="/"
          element={
            <div className="container">
              <Navbar></Navbar>
              <Hero></Hero>
              <ShoeList shoes={shoes}></ShoeList>
            </div>
          }
        ></Route>

        {/* 상세페이지  + 중첩라우팅으로 이상하게 /about/detail 쓰는것보단 이게 훨씬 나음*/}
        <Route path="/about" element={<div>상세피이지</div>}>
          <Route path="detail"></Route>
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
