/*eslint-disable */
import React from 'react';

const ShoeObjects = ({ shoes, idx }) => {
  return (
    <div>
      <div className="col-md-4">
        <img
          //props idx라는 값으로 이미지 url 자체를 변수처럼 취급할수 있음
          src={'https://codingapple1.github.io/shop/shoes' + (idx + 1) + '.jpg'}
          alt="상품 1"
        />
        <h4>{shoes[idx].title}</h4>
        <p>{shoes[idx].content}</p>
      </div>
    </div>
  );
};

export default ShoeObjects;
