/*eslint-disable */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/ShoeDetail.css';

const ShoeDetail = ({ shoes }) => {
  const { id } = useParams();
  const shoe = shoes.find((item) => item.id === parseInt(id));

  // 상태 관리: 상세 설명 저장
  const [description, setDescription] = useState('');
  const [submittedDescription, setSubmittedDescription] = useState(''); // 제출된 설명

  if (!shoe) {
    return <p>신발 정보를 찾을 수 없습니다.</p>;
  }

  // 입력 값 업데이트 핸들러
  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  // Submit 버튼 클릭 핸들러
  const handleSubmit = () => {
    setSubmittedDescription(description); // 제출된 값을 저장
    setDescription(''); // 입력 초기화
  };

  return (
    <div className="shoe-detail-page">
      {/* 신발 정보 */}
      <div className="shoe-detail-card">
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            parseInt(id) + 1
          }.jpg`}
          alt={shoe.title}
        />
        <h1>{shoe.title}</h1>
        <p>{shoe.content}</p>
        <p>Price: {shoe.price.toLocaleString()}원</p>
      </div>

      {/* 상세 설명 입력 박스 */}
      <div className="shoe-description-box">
        <h2>Write a Description</h2>
        <textarea
          className="description-textarea"
          value={description}
          onChange={handleInputChange}
          placeholder="이 신발에 대한 상세 정보를 적어보세요."
        ></textarea>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        {/* 제출된 내용 표시 */}
        {submittedDescription && (
          <div className="submitted-description">
            <h3>Your Description:</h3>
            <p>{submittedDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoeDetail;
