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
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-title">My Blog</h1>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Blog</h1>
          <p className="hero-subtitle">당신만의 멋진 이야기를 공유하세요.</p>
        </div>
      </section>

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
