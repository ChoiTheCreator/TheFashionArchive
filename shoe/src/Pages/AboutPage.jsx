import React from 'react';
import '../Style/AboutPage.css'; // 스타일 파일을 별도로 관리
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          안녕하세요! 저는 패션을 사랑하는 개발자입니다. 이 블로그는 저만의 신발
          컬렉션과 이야기를 담고 있으며, 다양한 스타일과 트렌드를 공유합니다.
          제가 좋아하는 브랜드와 패션 팁도 함께 확인해보세요!
        </p>
        <p className="about-text">
          관심을 가져주셔서 감사합니다. 함께 스타일을 완성해봅시다!
        </p>

        {/* 버튼 그룹 컨테이너 */}
        <div className="button-group">
          <Link to="/contact" className="about-link">
            CONTACT ME!
          </Link>

          <Link to="/" className="back-home-link">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
