import React from 'react';
import aboutconpimg1 from '../../assets/aboutcomp.png';
import employeesimg from '../../assets/Rectangle 13.png';
import './AboutCompany.css';

const AboutCompany = () => {
  const employees = [
    { name: 'Иван Иванов', position: 'Дизайнер', img: employeesimg },
    { name: 'Анна Смирнова', position: 'Разработчик', img: employeesimg },
    { name: 'Петр Петров', position: 'Менеджер', img: employeesimg },
    { name: 'Ольга Соколова', position: 'Маркетолог', img: employeesimg },
    { name: 'Елена Кузнецова', position: 'Аналитик', img: employeesimg },
  ];

  return (
    <div className="about-company">
      {/* Первый контейнер */}
      <div className="first-container">
        {/* Текстовая часть */}
        <div className="text-section">
          <h1>О нашей компании</h1>
          <p>
          Мы — компания, которая предоставляет услуги по ремонту и обслуживанию бытовых и инженерных систем по ПОДПИСКЕ.
          </p>
          <p>
          Мы работаем с электрикой, сантехникой и ремонтом бытовой техники. Наши клиенты могут рассчитывать на оперативную помощь в решении мелких технических неисправностей, что позволяет минимизировать время простоя и избежать неожиданных затрат на ремонт.
          </p>
        </div>

        {/* Изображение */}
        <div className="image-section">
          <img src={aboutconpimg1} alt="Company" />
          <div className="image-caption">
          Свяжитесь с нами, чтобы узнать больше <br/> о наших услугах и получить консультацию <br/> от нашего эксперта.
          </div>
        </div>
      </div>

      {/* Контейнер с членами команды */}
      <div className="team-container">
        <div className="team-box black-box">
          <p>Наша команда</p>
        </div>
        {employees.map((employee, index) => (
          <div key={index} className="team-box employee-box">
            <div className="employee-name">{employee.name}</div>
            <img src={employee.img} alt={employee.name} />
            <div className="employee-position">{employee.position}</div>
          </div>
        ))}
      </div>

       

      <div className="black-container">
        <h3 className="black-heading">КЛИЕНТЫ И ПАРТНЕРЫ</h3>
        <div className="squares-container">
          <div className="square">
            <p className="square-text">Beeline</p>
          </div>
          <div className="square">
            <p className="square-text">Beeline</p>
          </div>
          <div className="square">
            <p className="square-text">Beeline</p>
          </div>
          <div className="square">
            <p className="square-text">Beeline</p>
          </div>
        </div>
      </div>
  

       
    <div className="aboutcomp-formcomt">
    <div className="aboutcomp-wrapper">
  <h2>Оставить заявку</h2>

  <div className="aboutcomp-container">
    {/* Левая колонка с полями ввода */}
    <div className="aboutcomp-left">
      <input type="text" className="aboutcomp-input" placeholder="Имя*" />
      <input type="text" className="aboutcomp-input" placeholder="Номер телефона*" />
      <input type="email" className="aboutcomp-input" placeholder="Электронная почта*" />
    </div>

    {/* Правая колонка с полем сообщения */}
    <div className="aboutcomp-right">
      <textarea className="aboutcomp-textarea" rows="4" placeholder="Сообщение*"></textarea>
    </div>
  </div>

  <div className="aboutcomp-agreement">
    <input type="checkbox" id="aboutcompPrivacyPolicy" />
    <label htmlFor="aboutcompPrivacyPolicy">
      Я прочитал и согласен с 
      <a href="#" className="aboutcomp-policy-link">политикой конфиденциальности</a>
    </label>
  </div>

  <button className="aboutcomp-button">Отправить</button>
</div>

    </div>



    </div>
  );
};

export default AboutCompany;
