import React from 'react';
import '../Style/CartPage.css'; // CSS 파일 임포트
import { Table } from 'react-bootstrap';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: '상품 A', quantity: 2 },
    { id: 2, name: '상품 B', quantity: 1 },
    { id: 3, name: '상품 C', quantity: 3 },
  ];

  return (
    <div className="cart-container">
      <Table striped bordered hover className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="edit-btn">수정</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
