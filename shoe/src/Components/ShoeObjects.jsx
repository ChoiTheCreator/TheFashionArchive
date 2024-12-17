/*eslint-disable */
import React from 'react';

const ShoeObjects = ({ shoes, idx }) => {
  return (
    <div>
      <div className="col-md-4">
        <img
          src={'https://codingapple1.github.io/shop/shoes' + idx + '.jpg'}
          alt="상품 1"
        />
        <h4>{shoes[idx].title}</h4>
        <p>{shoes[idx].content}</p>
      </div>
    </div>
  );
};

export default ShoeObjects;
