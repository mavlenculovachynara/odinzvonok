import React from 'react';
import aboutusmainpng from '../../assets/AdobeStock_292230412 1.png';
import morepng from '../../assets/Component 8.png';
import './AboutUsMain.css';

const AboutUsMain = () => {
  return (
    <div className="about-us-main">
      <div className="header-text">О КОМПАНИИ</div>
      
      <div className="left-image-container">
        <img src={aboutusmainpng} alt="About Us" className="main-image" />
        <img src={morepng} alt="More" className="more-icon" />
      </div>
      
      <div className="right-text-container">
        <div className="text-box black-text">
          «ОДИН ЗВОНОК» — это стартап, который предоставляет услуги по ремонту и обслуживанию бытовых и инженерных систем. Мы работаем с электрикой, сантехникой и ремонтом бытовой техники.
        </div>
        <div className="text-box orange-text">
          Наши клиенты могут рассчитывать на оперативную помощь в решении мелких технических неисправностей, для минимизирования времени простоя и воизбежание неожиданных затрат.
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
