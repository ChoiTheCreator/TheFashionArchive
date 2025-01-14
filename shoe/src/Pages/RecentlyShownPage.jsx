/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const recentlyShownPageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
  height: 100vh;
  width: 100vw;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
`;

const shoeListStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const shoeItemStyle = css`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #001f5c;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  .price {
    font-weight: bold;
    color: red;
  }
`;

const RecentlyShownPage = ({ shoes }) => {
  const [recentShoes, setRecentShoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pressedIds = JSON.parse(localStorage.getItem('pressed')) || [];
    const filteredShoes = shoes.filter((shoe) => pressedIds.includes(shoe.id));
    setRecentShoes(filteredShoes);
  }, [shoes]);

  return (
    <div css={recentlyShownPageStyle}>
      <h2>최근 본 신발</h2>
      {recentShoes.length > 0 ? (
        <div css={shoeListStyle}>
          {recentShoes.map((shoe) => (
            <div
              key={shoe.id}
              css={shoeItemStyle}
              onClick={() => navigate(`/detail/${shoe.id}`)}
            >
              <img
                src={`https://codingapple1.github.io/shop/shoes${
                  shoe.id + 1
                }.jpg`}
                alt={shoe.title}
              />
              <h4>{shoe.title}</h4>
              <p>{shoe.content}</p>
              <p className="price">{shoe.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      ) : (
        <p>최근 본 신발이 없습니다.</p>
      )}
    </div>
  );
};

export default RecentlyShownPage;
