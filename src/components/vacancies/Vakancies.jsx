import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import vksimg1 from '../../assets/location bishkek icon.png';
import vksimg2 from '../../assets/location bishkek icon (1).png';
import vksimg3 from '../../assets/draw an icon of professionalism on a vector.png';
import vksimg4 from '../../assets/location bishkek icon (2).png';
import './Vakancies.css';

const Vakancies = () => {

  const [visibleJobs, setVisibleJobs] = useState(6);

  const jobData = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    date: `18.${String(i + 1).padStart(2, '0')}.2025`,
    title: `Должность ${i + 1}`,
    description: `Сервис по оказанию услуг населению «Один звонок» предлагает работу сантехником в Бишкеке с полной или частичной занятостью. Гарантируем стабильный доход и дружный коллектив.`,
  }));

  const loadMoreJobs = () => {
    setVisibleJobs((prev) => prev + 12);
  };


  return (
    <div>
      <div className="vakancies-page">
  <div className="overlay"></div>

  <div className="vakancies-vertical-line line2"></div>
  <div className="vakancies-vertical-line line3"></div>

  <div className="vakancies-horizontal-line line1"></div>
  <div className="vakancies-horizontal-line line22"></div>
  <div className="vakancies-horizontal-line line3"></div>

  <div className="vakancies-top-text">
    ВАКАНСИИ
  </div>

  <div className="vakancies-bottom-section">
    <h6 className="guarantee-title">ГАРАНТИРУЕМ</h6>
    <div className="vakancies-rectangles">
      <div className="vakancies-rectangle">
        <h6>Быстрый ремонт</h6>
        <div className="rectangle-content">
          <img src={vksimg1} alt="" className="rectangle-icon" />
          <p>Обслуживание и ремонт техники в кратчайшие сроки.</p>
        </div>
      </div>
      <div className="vakancies-rectangle">
        <h6>Питание</h6>
        <div className="rectangle-content">
          <img src={vksimg2} alt="" className="rectangle-icon" />
          <p>Комплексные обеды и питание для сотрудников.</p>
        </div>
      </div>
      <div className="vakancies-rectangle">
        <h6>Настройка оборудования</h6>
        <div className="rectangle-content">
          <img src={vksimg3} alt="" className="rectangle-icon" />
          <p>Настройка и обслуживание оборудования любого типа.</p>
        </div>
      </div>
      <div className="vakancies-rectangle">
        <h6>Контроль качества</h6>
        <div className="rectangle-content">
          <img src={vksimg4} alt="" className="rectangle-icon" />
          <p>Гарантия на все виды предоставляемых услуг.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="vakancies-center-square">
    <div className="invite-rectangle">
      <p className='invite-rectangleP'>
        Приглашаем вас зарабатывать вместе с нами! Поделитесь информацией о наших услугах со своей аудиторией — друзьями, коллегами или подписчиками — и получайте вознаграждение за каждого нового клиента.
      </p>
    </div>
  </div>

  <div className="icon-container">
    <FaInstagram className="social-icon" />
    <FaWhatsapp className="social-icon" />
    <FaTelegramPlane className="social-icon" />
  </div>

  <div className="vakancies-partner-program">
    <h2>ПАРТНЕРСКАЯ<br/> ПРОГРАММА</h2>
  </div>
</div>

      <div className="vakancies-open-jobs">
        <h2 className="vakancies-section-title">ОТКРЫТЫЕ ВАКАНСИИ В НАШЕЙ КОМПАНИИ</h2>
        <div className="vakancies-job-list">
          {jobData.slice(0, visibleJobs).map((job) => (
            <div key={job.id} className="vakancies-job-card">
              <p className="vakancies-job-date">{job.date}</p>
              <h5 className="vakancies-job-title">{job.title}</h5>
              <p className="vakancies-job-description">{job.description}</p>
              <button className="vakancies-apply-button">Откликнуться</button>
            </div>
          ))}
        </div>
        {visibleJobs < jobData.length && (
          <button className="vakancies-load-more" onClick={loadMoreJobs}>
            Загрузить ещё
          </button>
        )}
      </div>


      <div className="partnership-main">
  <h2 className="partnership-header">
    ПАРТНЕРСКАЯ ПРОГРАММА ПО УСЛУГАМ <br /> САНТЕХНИКИ, ЭЛЕКТРИКИ И РЕМОНТА <br /> БЫТОВОЙ ТЕХНИКИ
  </h2>

  <div className="partnership-content">
    <div className="vakancies-tables-container">
      <div className="vakancies-table">
        <h4>Как это работает</h4>
        <div className="vakancies-table-row">
          <span>Получите уникальный промокод или ссылку от нас.</span>
          <span className="vakancies-step-number">01</span>
        </div>
        <div className="vakancies-table-row">
          <span>Поделитесь информацией о наших услугах с аудиторией.</span>
          <span className="vakancies-step-number">02</span>
        </div>
        <div className="vakancies-table-row">
          <span>Получайте вознаграждение за каждого клиента.</span>
          <span className="vakancies-step-number">03</span>
        </div>
      </div>

      <div className="vakancies-table">
        <h4>Наши условия</h4>
        <div className="vakancies-table-row">
          <span>Вознаграждение: фиксированная ставка за каждого приведённого клиента или процент от суммы заказа (обсуждается индивидуально).</span>
          <span className="vakancies-step-number">01</span>
        </div>
        <div className="vakancies-table-row">
          <span>Выплаты: ежемесячно по итогам завершённых заказов.</span>
          <span className="vakancies-step-number">02</span>
        </div>
        <div className="vakancies-table-row">
          <span>Простота участия: нет необходимости в регистрации или ведении отчётов. Просто делитесь ссылкой или промокодом и начинайте зарабатывать.</span>
          <span className="vakancies-step-number">02</span>
        </div>
      </div>
    </div>

    <div className="vakancies-form-container">
      <div className="vakancies-right-text-form-container">
      <h2>Присоединиться к программе</h2>
      <p>Напишите нам для получения уникального промокода или ссылки.</p>
      </div>

      <div className="vakancies-form">
        <div className="vakancies-form-left">
          <input type="text" className="vakancies-input-field" placeholder="Имя*" />
          <input type="text" className="vakancies-input-field" placeholder="Номер телефона*" />
          <input type="email" className="vakancies-input-field" placeholder="Электронная почта*" />
        </div>

        <div className="vakancies-form-right">
          <textarea className="vakancies-textarea-field" placeholder="Сообщение*"></textarea>
        </div>
      </div>

      <div className="vakancies-agreement">
        <input type="checkbox" id="privacyPolicy" />
        <label htmlFor="privacyPolicy">
          Я прочитал и согласен с
          <a href="#" className="vakancies-policy-link">политикой конфиденциальности</a>
        </label>
      </div>

      <button className="vakancies-submit-button">Отправить</button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Vakancies;
