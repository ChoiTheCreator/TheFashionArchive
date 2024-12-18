import React from 'react';
import '../Style/ContactPage.css'; // 스타일 파일을 별도로 관리
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-text">아래 링크를 통해 저를 찾으실 수 있습니다!</p>
      <ul className="contact-links">
        <li>
          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link instagram"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link github"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://your-tistory.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link tistory"
          >
            Tistory
          </a>
        </li>
      </ul>

      {/* 버튼 그룹 컨테이너 */}
      <div className="button-group">
        <Link to="/" className="back-home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
