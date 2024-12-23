/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/ShoeDetail.css';

const ShoeDetail = ({ shoes }) => {
  const { id } = useParams();
  const shoe = shoes.find((item) => item.id === parseInt(id));

  // 상태 관리: 상세 설명 및 발 사이즈 저장
  const [description, setDescription] = useState('');
  const [submittedDescription, setSubmittedDescription] = useState('');
  const [size, setSize] = useState(''); // 발 사이즈 상태
  const [submittedSize, setSubmittedSize] = useState(''); // 제출된 발 사이즈
  const [sizeError, setSizeError] = useState(false);
  const [sizeBoundError, setSizeBoundError] = useState(false);

  //발사이즈를 입력했을때 숫자가 아닌 다른 값을 입력했을때의 오류
  useEffect(() => {
    let timer; // 타이머 ID를 저장할 변수

    if (size === '') {
      // 입력값이 빈 문자열이면 오류 메시지 초기화
      setSizeError(false);
      setSizeBoundError(false);
    } else if (isNaN(size)) {
      // 숫자가 아닌 값이 입력되었을 때 오류 메시지 표시
      timer = setTimeout(() => setSizeError(true), 100);
    } else if (size > 400) {
      timer = setTimeout(() => setSizeBoundError(true), 100);
    } else {
      // 숫자가 입력되면 오류 메시지 초기화
      setSizeError(false);
      setSizeBoundError(false);
    }

    // 클린업 함수: 기존 타이머를 정리
    return () => {
      clearTimeout(timer);
    };
  }, [size]);

  if (!shoe) {
    return <p>신발 정보를 찾을 수 없습니다.</p>;
  }

  // 입력 값 업데이트 핸들러
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleSizeChange = (e) => setSize(e.target.value);

  // Submit 버튼 클릭 핸들러
  const handleSubmit = () => {
    setSubmittedDescription(description);
    setSubmittedSize(size);
    setDescription('');
    setSize('');
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

      {/* 상세 설명 및 발 사이즈 입력 박스 */}
      <div className="shoe-description-box">
        <h2>Write a Description</h2>
        <textarea
          className="description-textarea"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="이 신발에 대한 상세 정보를 적어보세요."
        ></textarea>

        {sizeError && <div className="sizeError">숫자를 입력하세요!</div>}
        {sizeBoundError && (
          <di className="sizeBoundError">발 사이즈를 입력해주세요!</di>
        )}
        <h2>Enter Your Foot Size</h2>
        <input
          type="text"
          className="size-input"
          value={size}
          onChange={handleSizeChange}
          placeholder="발 사이즈를 입력하세요 (예: 260)"
        />

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
        {submittedSize && (
          <div className="submitted-size">
            <h3>Your Foot Size:</h3>
            <p>{submittedSize}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoeDetail;
