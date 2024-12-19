import React from 'react';
import './Services'; // Подключаем CSS файл

const Services = () => {
  return (
    <div className="container">
    <div className="black-container">
      <div className="header">ТАРИФ</div>
      {['', '', ''].map((_, index) => (
        <div key={index} className="tarif-item">
          <div className="left-section">
            <div>САНТЕХНИКА</div>
            <div>☑️</div>
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>

    <div className="black-container">
      <div className="header">ТАРИФ</div>
      {['', '', ''].map((_, index) => (
        <div key={index} className="tarif-item">
          <div className="left-section">
            <div>САНТЕХНИКА</div>
            <div>☑️</div>
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>

    <ul className="list">
      <li>Спичка 1</li>
      <li>Спичка 2</li>
      <li>Спичка 3</li>
    </ul>
    <div className="cost">СТОИМОСТЬ ТАРИФА 600 сом в месяц</div>
  </div>
  );
};

export default Services;
