/*eslint-disable */
import Shoedata from './data/Shoedata';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShoeList from './Components/ShoeList';
import ContactPage from './Pages/ContactPage';
import { useNavigate, Outlet, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import AboutPage from './Pages/AboutPage';
import ShoeObjects from './Components/ShoeObjects';
import ShoeDetail from './Pages/ShowDetail';
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

        {/* 상세페이지  + 중첩라우팅으로 이상하게 /about/detail 쓰는것보단 이게 훨씬 낫다
        그러나, 중첩 라우팅의 자식 라우팅은 path 작성시 /빼고 해야함 -> contact
        그러나 난 굳이 쓰고싶지 않아서 안썼다. 뭔가 중첩라우팅으로 한정되서 기분이 안좋아짐*/}
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>

        {/* 신발 디테일 페이지 : use URL 파라미터 
        하나의 컴포넌트로 각각 다른 상황에서 다른 내용보여주게
        props를 쓰던가 라우터적으로도 해결가능*/}
        <Route path="/detail" element={<ShoeList shoes={shoes}></ShoeList>}>
          {/* 여기서 url 파라미터로 중첩라우팅을 섞는다 */}
          <Route
            path=":id"
            element={<ShoeDetail shoes={shoes}></ShoeDetail>}
          ></Route>
        </Route>
        {/* 404 페이지 */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
