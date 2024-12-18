/*eslint-disable */
import React from 'react';
import ShoeObjects from './ShoeObjects';
const ShoeList = ({ shoes }) => {
  return (
    <div>
      <div className="row">
        {shoes.map((item, idx) => {
          return <ShoeObjects key={idx} shoes={shoes} idx={idx}></ShoeObjects>;
        })}
      </div>
    </div>
  );
};

export default ShoeList;
