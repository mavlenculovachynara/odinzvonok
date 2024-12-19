// Import React and necessary icons
import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import './MainPage.css';

const MainPage = () => {
  return (
   <div className="mainPage-container">
     <div className="main-page">
      <div className="vertical-line line1"></div>
      <div className="vertical-line line2"></div>
      <div className="vertical-line line3"></div>

      <div className="horizontal-line line1"></div>
      <div className="horizontal-line line2"></div>
      <div className="horizontal-line line3"></div>

      <div className="center-text top-text">
        Один Звонок – и ваши проблемы решены!
      </div>

      <div className="center-text bottom-text">
        Комплексное обслуживание и решение мелких технических проблем для предприятий (швейные цеха, кафе, рестораны и другие организации).
      </div>

      <div className="center-square">
        <h2 className='form-container-h2'>Оставить заявку</h2>
        
        <div className="form-container">
          <div className="form-left">
            <input type="text" className="input-field" placeholder="Имя*" />
            <input type="text" className="input-field" placeholder="Номер телефона*" />
            <input type="email" className="input-field" placeholder="Электронная почта*" />
          </div>

          <div className="form-right">
            <textarea className="textarea-field" rows="4" placeholder="Сообщение*"></textarea>
          </div>
        </div>
        
        <div className="agreement">
          <input type="checkbox" id="privacyPolicy" />
          <label htmlFor="privacyPolicy">
            Я прочитал и согласен с 
            <a href="#" className="policy-link">политикой конфиденциальности</a>
          </label>
        </div>

        <button className="submit-button">Отправить</button>
      </div>

      <div className="icon-container">
        <FaInstagram className="social-icon" />
        <FaWhatsapp className="social-icon" />
        <FaTelegramPlane className="social-icon" />
      </div>
    </div>

    <div className="center-square-mobile">
        <h2 className='h2-mobile'>Оставить заявку</h2>
        
        <div className="form-container-mobile">
          <div className="form-left-mobile">
            <input type="text" className="input-field-mobile" placeholder="Имя*" />
            <input type="text" className="input-field-mobile" placeholder="Номер телефона*" />
            <input type="email" className="input-field-mobile" placeholder="Электронная почта*" />
          </div>

          <div className="form-right-mobile">
            <textarea className="textarea-field-mobile" rows="4" placeholder="Сообщение*"></textarea>
          </div>
        </div>
        
        <div className="agreement-mobile">
          <input type="checkbox" id="privacyPolicy" />
          <label color='black' htmlFor="privacyPolicy">
            Я прочитал и согласен с 
            <a href="#" className="policy-link">политикой конфиденциальности</a>
          </label>
        </div>

        <button className="submit-button-mobile">Отправить</button>
      </div>

   </div>
  );
};

export default MainPage;
