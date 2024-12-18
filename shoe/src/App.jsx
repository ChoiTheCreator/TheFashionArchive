/*eslint-disable */
import Shoedata from './data/Shoedata';
import './App.css';
import { useState } from 'react';
import ShoeObjects from './Components/ShoeObjects';

function App() {
  //따로 만든 Shoedata.jsx에서 가져온 객체배열임! (export + import 해서 state로 담음,) [{obj1, obj2 ,, 이 형태임}]
  const [shoes, setShoes] = useState(Shoedata);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Hero></Hero>
      {/* 기존 상품 레이아웃 */}
      <div className="container">
        <div className="row">
          <ShoeObjects shoes={shoes} idx={1}></ShoeObjects>
          <ShoeObjects shoes={shoes} idx={2}></ShoeObjects>
        </div>
      </div>
    </div>
  );
}

export default App;
