import React from 'react';
import Advantages from '../../assets/section right top.png';
import helpimgright from '../../assets/plumbing.png'
import blackcontimg from '../../assets/ремонт.png'
import rekvisitImage from '../../assets/сертификатодинзвонок.png'
import './AboutUsFiz.css';

const AboutUsFiz = () => {
  return (
    <div>
      {/* Первый контейнер */}
      <div className="advantages-container">
        <div className="content-wrapper">
          <div className="text-container">
            <h3 className="heading">РЕШАЕМ ЛЮБЫЕ БЫТОВЫЕ ПРОБЛЕМЫ БЫСТРО, КАЧЕСТВЕННО И НАДЕЖНО.</h3>
            <p className="text">Мы оказываем полный спектр услуг для частных клиентов. Наши мастера помогут решить любые задачи — от устранения аварийных ситуаций до установки новой техники.</p>
            <p className="subtext">Доступно в любой день, по любому адресу.</p>
          </div>
          <div className="image-container">
            <img src={Advantages} alt="Advantages" className="image" />
          </div>
        </div>
      </div>

      {/* Второй контейнер */}
      <div className="additional-container">
        <h3 className="additional-heading">Дополнительная информация</h3>
        <p className="additional-text">ВЛАДЕЛЬЦЕВ КВАРТИР И ЧАСТНЫХ ДОМОВ, КОТОРЫМ НУЖНА ПОМОЩЬ С РЕМОНТОМ.</p>
        <hr className="divider" />
        <p className="additional-text">СЕМЕЙ, ЖЕЛАЮЩИХ ОПЕРАТИВНО УСТРАНИТЬ БЫТОВЫЕ НЕПОЛАДКИ.</p>
        <hr className="divider" />
        <p className="additional-text">ЛЮДЕЙ, КОТОРЫЕ ЦЕНЯТ КАЧЕСТВО И НАДЕЖНОСТЬ В ВЫПОЛНЕНИИ РАБОТ.</p>
        <hr className="divider" />
        <p className="additional-text">КЛИЕНТОВ, КОТОРЫМ ТРЕБУЕТСЯ УСТАНОВКА ИЛИ РЕМОНТ БЫТОВОЙ ТЕХНИКИ.</p>
        <hr className="divider" />
        <p className="additional-text">ТЕХ, КТО ИЩЕТ КВАЛИФИЦИРОВАННЫХ СПЕЦИАЛИСТОВ БЕЗ ПЕРЕПЛАТ.</p>
      </div>

      <div className="black-container">
        <h3 className="black-heading">Почему выбирают нас?</h3>
        <div className="squares-container">
          <div className="square">
            <p className="square-text">Оперативность — приезжаем в день обращения.</p>
          </div>
          <div className="square">
            <p className="square-text">Прозрачные цены — никаких скрытых платежей.</p>
          </div>
          <div className="square">
            <p className="square-text">Гарантия на все работы — спокойствие и уверенность.</p>
          </div>
          <div className="square">
            <p className="square-text">Вежливые мастера — заботимся о комфорте клиентов.</p>
          </div>
        </div>
      </div>

       {/* 3 Container */}
       <div className="gray-container">
        <div className="gray-content">
          <div className="gray-text">
            <h3 className="gray-heading">Мы готовы помочь с:</h3>
            <p className="gray-paragraph">Устранением протечек и заменой сантехники.</p>
            <hr className="gray-divider" />
            <p className="gray-paragraph">Ремонтом розеток, выключателей, проводки.</p>
            <hr className="gray-divider" />
            <p className="gray-paragraph">Диагностикой и ремонтом бытовой техники (стиральные машины, холодильники, посудомоечные машины).</p>
            <hr className="gray-divider" />
            <p className="gray-paragraph">Установкой бытовых приборов (бойлеры, вытяжки, кондиционеры).</p>
            <hr className="gray-divider" />
          </div>
          <div className="gray-image">
            <img src={helpimgright} alt="Service Illustration" className="gray-img" />
          </div>
        </div>
      </div>
      
      {/* 4 */}

      <div class="helpblack-main-content-container">
  <div class="helpblack-text-section-wrapper">
    <div class="helpblack-section-heading-title">ЭТАПЫ РАБОТЫ.</div>
    <div class="helpblack-text-item-container">
      <p class="helpblack-text-block-content">Оставьте заявку — укажите вашу проблему.</p>
      <div class="helpblack-text-item-number">01</div>
      <hr class="helpblack-horizontal-separator-line" />
    </div>
    <div class="helpblack-text-item-container">
      <p class="helpblack-text-block-content">Согласуем стоимость — вы узнаете цену заранее.</p>
      <div class="helpblack-text-item-number">02</div>
      <hr class="helpblack-horizontal-separator-line" />
    </div>
    <div class="helpblack-text-item-container">
      <p class="helpblack-text-block-content">Мастер приезжает — и сразу приступает к работе.</p>
      <div class="helpblack-text-item-number">03</div>
      <hr class="helpblack-horizontal-separator-line" />
    </div>
    <div class="helpblack-text-item-container">
      <p class="helpblack-text-block-content">Результат с гарантией — выполняем всё на высшем уровне.</p>
      <div class="helpblack-text-item-number">04</div>
      <hr class="helpblack-horizontal-separator-line" />
    </div>
    <div class="helpblack-text-item-container">
      <p class="helpblack-text-block-content">Гарантия качества — предоставляем гарантию на выполненные услуги.</p>
      <div class="helpblack-text-item-number">05</div>
      <hr class="helpblack-horizontal-separator-line" />
    </div>
  </div>

  <div class="helpblack-image-section-wrapper">
    <img src={blackcontimg} alt="Картинка" class="helpblack-image-container" />
  </div>
</div>  


        {/* пдф файлы */}
        <div class="fiz-document-container">
  <h3>ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ:</h3>
  <div class="fiz-document-item">
    <div class="fiz-document-info">
      <img src="pdf-icon.png" alt="PDF" class="fiz-pdf-icon" />
      <p>Копия паспорта</p>
    </div>
    <div class="fiz-document-actions">
      <button class="fiz-btn fiz-download-btn">Скачать</button>
      <button class="fiz-btn fiz-open-btn">Открыть</button>
    </div>
  </div>
  <div class="fiz-document-item">
    <div class="fiz-document-info">
      <img src="pdf-icon.png" alt="PDF" class="fiz-pdf-icon" />
      <p>Справка с места жительства</p>
    </div>
    <div class="fiz-document-actions">
      <button class="fiz-btn fiz-download-btn">Скачать</button>
      <button class="fiz-btn fiz-open-btn">Открыть</button>
    </div>
  </div>
  <div class="fiz-document-item">
    <div class="fiz-document-info">
      <img src="pdf-icon.png" alt="PDF" class="fiz-pdf-icon" />
      <p>Копия нотариальной доверенности лица, уполномоченного на заключение договора</p>
    </div>
    <div class="fiz-document-actions">
      <button class="fiz-btn fiz-download-btn">Скачать</button>
      <button class="fiz-btn fiz-open-btn">Открыть</button>
    </div>
  </div>
  <div class="fiz-document-item">
    <div class="fiz-document-info">
      <img src="pdf-icon.png" alt="PDF" class="fiz-pdf-icon" />
      <p>Копии разрешительной документации</p>
    </div>
    <div class="fiz-document-actions">
      <button class="fiz-btn fiz-download-btn">Скачать</button>
      <button class="fiz-btn fiz-open-btn">Открыть</button>
    </div>
  </div>
</div>

        {/* пдф файлы */}



        {/* Новый контейнер с реквизитами */}
        <div className="rekvizit-container">
        <h3 className="rekvizit-heading">Реквизиты</h3>

        <div className="rekvizit-content">
          {/* Картинка слева */}
          <div className="rekvizit-left-image">
            <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image" />
          </div>

          {/* Текст по центру */}
          <div className="rekvizit-text">
            <h5 className="rekvizit-subheading">Реквизиты ООО «Один Звонок»</h5>
            <div className="rekvizit-info-box">
              <p>ИП Айтматов Н.Н. 620131,</p>
              <p>Бишкек, ул. Ч.Айтматова 47а, 2 эт. к. № 3</p>
              <p>ИНН 665840178949 ОГРНИП 316965800190501</p>
              <p>ОКПО 0107604604</p>
              <p>р/счёт № 40802810900000111539</p>
              <p>К/С 30101810145250000974</p>
              <p>ОАО «Коммерческий банк КЫРГЫЗСТАН»</p>
              <p>в г. Бишкек БИК 044525974</p>
              <p>БИК 044525974</p>
            </div>
          </div>

          {/* Картинка справа */}
          <div className="rekvizit-right-image">
            <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image" />
          </div>
        </div>
      </div>

       


      <div className="AboutUsFiz-form-container">
  <h3 className="AboutUsFiz-form-heading">Форма заявки</h3>
  <div className="AboutUsFiz-form-content">
    {/* Левый контейнер с текстом */}
    <div className="AboutUsFiz-form-left">
      <h4 id='right-headingob' className="AboutUsFiz-form-right-heading">Общая информация</h4>
      <p className="AboutUsFiz-form-left-subheading">
        Пожалуйста, заполните общую информацию о себе, чтобы мы могли связаться с вами и предложить оптимальные решения вашей задачи.
      </p>
      <div className="AboutUsFiz-form-left-space"></div>
    </div>
    {/* Правый контейнер с полями формы */}
    <div className="AboutUsFiz-form-right">
      <h4 className="AboutUsFiz-form-left-heading">
        Заполните форму <br /> чтобы мы могли связаться с вами, <br /> уточните детали <br /> и прибыть в удобное для вас время
      </h4>
      <div className="AboutUsFiz-form-inputs">
        <div className="AboutUsFiz-form-input">
          <input type="text" placeholder="Имя*" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <input type="text" placeholder="Укажите адрес или название района*" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <input type="tel" placeholder="Номер телефона*" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <input type="email" placeholder="Электронная почта* (если есть)" className="AboutUsFiz-input-field" />
        </div>
        <div className="AboutUsFiz-form-input">
          <textarea placeholder="Опишите проблему или добавьте пожелания*" className="AboutUsFiz-textarea-field"></textarea>
        </div>
        <div className="AboutUsFiz-form-checkbox">
          <input type="checkbox" id="privacy-policy" className="AboutUsFiz-form-checkbox-input" />
          <label htmlFor="privacy-policy" className="AboutUsFiz-form-checkbox-label">
            Я прочитал и согласен с политикой конфиденциальности
          </label>
        </div>
        <button type="submit" className="AboutUsFiz-form-submit-button">Отправить заявку</button>
      </div>
    </div>
  </div>
</div>


      
    </div>
  );
};

export default AboutUsFiz;
