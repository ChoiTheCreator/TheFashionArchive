/*eslint-disable */
import React from 'react';

import '../Style/CartPage.css'; // CSS 파일 임포트
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '../Store/store';

const CartPage = () => {
  const userData = useSelector((state) => state.stock);
  console.log(userData);

  let dispatch = useDispatch();
  const userCart = useSelector((globalState) => globalState.userCart);
  console.log(userCart);

  return (
    <div className="cart-container ">
      <Table striped bordered hover className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {userCart.map((item, idx) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={dispatch(increaseCount(item.id))}
                >
                  수량 추가
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
