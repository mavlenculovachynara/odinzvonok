import React, { useState } from 'react';
import logopng from '../../assets/logonew.png';
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('Русский');
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleLanguage = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setAccordionOpen(false);
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logopng} alt="Логотип" className="logo-image" />
        </div>
        <div className="links">
          <a href="#home">Главная</a>
          <a href="#about">О нас</a>
          <a href="#services">Услуги и Тарифы</a>
          <Link to="/aboutusfiz">Физ.Лицам</Link>
          <a href="#corporate">Юр.Лицам</a>
          <a href="#careers">Вакансии</a>
          <a href="#contacts">Контакты</a>
          <div className="language-switcher">
            <button onClick={toggleLanguage} className="accordion-button">
              {language}
            </button>
            {isAccordionOpen && (
              <div className="language-options">
                <button onClick={() => changeLanguage('Русский')}>Русский</button>
                <button onClick={() => changeLanguage('Кыргызский')}>Кыргызский</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="contact-button">Связаться</button>
      </div>
    </nav>
  );
};

export default Navbar;
