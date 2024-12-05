import React from 'react'
import AdvantagesUr from '../../assets/section right top (1).png';
import helpimgright from '../../assets/plumbing.png'
import blackcontimg from '../../assets/ремонт.png'
import rekvisitImage from '../../assets/сертификатодинзвонок.png'
import cont2img1 from '../../assets/Frame 6827.png'
import cont2img2 from '../../assets/Frame 683 (1).png'
import cont2img3 from '../../assets/Frame 685 (1).png'
import cont2img4 from '../../assets/Frame 684 (1).png'
import './AboutUsUr.css';

const AboutUsUr = () => {
  return (
    <div>
    {/* Первый контейнер */}
    <div className="advantages-container-ur">
      <div className="content-wrapper-ur">
        <div className="text-container-ur">
          <h3 className="heading-ur">НАДЕЖНОЕ ОБСЛУЖИВАНИЕ ВАШЕГО БИЗНЕСА</h3>
          <p className="text-ur">Комплексные решения для офисов, магазинов, складов и других коммерческих объектов.</p>
          <p className="subtext-ur">Мы предоставляем профессиональные услуги в области сантехники, электрики и ремонта бытовой техники для юридических лиц.</p>
        </div>
        <div className="image-container-ur">
          <img src={AdvantagesUr} alt="Advantages" className="image-ur" />
        </div>
      </div>
    </div>

    {/* Второй контейнер */}
    <div class="services-container">
  <div class="services-text">
    <h2>Наши услуги подходят для:</h2>
    <p>
    Мы работаем как на разовой основе, <br/> так и по долгосрочным договорам обслуживания.
    </p>
  </div>
  <div class="services-images">
  <img src={cont2img1} alt="Service 1" />
        <img src={cont2img2} alt="Service 2" />
        <img src={cont2img3} alt="Service 3" />
        <img src={cont2img4} alt="Service 4" />
  </div>
</div>


<div className="black-container">
        <h3 className="black-heading">Почему выбирают нас?</h3>
        <div className="squares-container">
          <div className="square">
            <p className="square-text">Гибкие условия сотрудничества — возможность заключить договор на регулярное обслуживание.</p>
          </div>
          <div className="square">
            <p className="square-text">Срочный выезд мастера — решаем проблемы быстро, чтобы ваш бизнес продолжал работать.</p>
          </div>
          <div className="square">
            <p className="square-text">Профессиональная команда — опытные специалисты с лицензиями.</p>
          </div>
          <div className="square">
            <p className="square-text">Удобная оплата — акты выполненных работ и электронные счета.</p>
          </div>
        </div>
      </div>


     {/* New Gray Container */}
     <div className="gray-container-ur">
      <div className="gray-content-ur">
        <div className="gray-text-ur">
          <h3 className="gray-heading-ur">Мы предлагаем:</h3>
          <p className="gray-paragraph-ur">Монтаж и ремонт сантехнического оборудования (мойки, трубы, насосы).</p>
          <hr className="gray-divider-ur" />
          <p className="gray-paragraph-ur">Электромонтажные работы (установка освещения, прокладка кабеля).</p>
          <hr className="gray-divider-ur" />
          <p className="gray-paragraph-ur">Ремонт и настройка бытовой техники (холодильники, кофемашины, кондиционеры).</p>
          <hr className="gray-divider-ur" />
          <p className="gray-paragraph-ur">Обслуживание систем отопления и кондиционирования.</p>
          <hr className="gray-divider-ur" />
        </div>
        <div className="gray-image-ur">
          <img src={helpimgright} alt="Service Illustration" className="gray-img-ur" />
        </div>
      </div>
    </div>

    <div class="helpblack-main-content-container-ur">
<div class="helpblack-text-section-wrapper-ur">
  <div class="helpblack-section-heading-title-ur">Как мы работаем.</div>
  <div class="helpblack-text-item-container-ur">
    <p class="helpblack-text-block-content-ur">Квалифицированные специалисты и мастера, обеспечивающие качественное выполнение работ.</p>
    <div class="helpblack-text-item-number-ur">01</div>
    <hr class="helpblack-horizontal-separator-line-ur" />
  </div>
  <div class="helpblack-text-item-container-ur">
    <p class="helpblack-text-block-content-ur">Обсудим условия — согласуем объём работ и стоимость.</p>
    <div class="helpblack-text-item-number-ur">02</div>
    <hr class="helpblack-horizontal-separator-line-ur" />
  </div>
  <div class="helpblack-text-item-container-ur">
    <p class="helpblack-text-block-content-ur">Заключаем договор — на разовые услуги или постоянное обслуживание.</p>
    <div class="helpblack-text-item-number-ur">03</div>
    <hr class="helpblack-horizontal-separator-line-ur" />
  </div>
  <div class="helpblack-text-item-container-ur">
    <p class="helpblack-text-block-content-ur">Выполняем работы — быстро и профессионально.</p>
    <div class="helpblack-text-item-number-ur">04</div>
    <hr class="helpblack-horizontal-separator-line-ur" />
  </div>
  <div class="helpblack-text-item-container-ur">
    <p class="helpblack-text-block-content-ur">Гарантия качества — предоставляем гарантию на выполненные услуги.</p>
    <div class="helpblack-text-item-number-ur">05</div>
    <hr class="helpblack-horizontal-separator-line-ur" />
  </div>
</div>

<div class="helpblack-image-section-wrapper-ur">
  <img src={blackcontimg} alt="Картинка" class="helpblack-image-container-ur" />
</div>
</div>



      {/* Новый контейнер с реквизитами */}
      <div className="rekvizit-container-ur">
      <h3 className="rekvizit-heading-ur">Реквизиты</h3>

      <div className="rekvizit-content-ur">
        {/* Картинка слева */}
        <div className="rekvizit-left-image-ur">
          <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image-ur" />
        </div>

        {/* Текст по центру */}
        <div className="rekvizit-text-ur">
          <h5 className="rekvizit-subheading-ur">Реквизиты ООО «Один Звонок»</h5>
          <div className="rekvizit-info-box-ur">
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
        <div className="rekvizit-right-image-ur">
          <img src={rekvisitImage} alt="Реквизит" className="rekvizit-image-ur" />
        </div>
      </div>
    </div>

     


    <div className="AboutUsFiz-form-container-ur">
<h3 className="AboutUsFiz-form-heading-ur">Форма заявки</h3>
<div className="AboutUsFiz-form-content-ur">
  {/* Левый контейнер с текстом */}
  <div className="AboutUsFiz-form-left-ur">
    <h4 id='right-headingob' className="AboutUsFiz-form-right-heading-ur">Общая информация</h4>
    <p className="AboutUsFiz-form-left-subheading-ur">
      Пожалуйста, заполните общую информацию о себе, чтобы мы могли связаться с вами и предложить оптимальные решения вашей задачи.
    </p>
    <div className="AboutUsFiz-form-left-space-ur"></div>
  </div>
  {/* Правый контейнер с полями формы */}
  <div className="AboutUsFiz-form-right-ur">
    <h4 className="AboutUsFiz-form-left-heading-ur">
      Заполните форму <br />мы могли подготовить предложение и отправить , <br /> его вам в течении нескольких дней.
    </h4>
    <div className="AboutUsFiz-form-inputs-ur">
      <div className="AboutUsFiz-form-input-ur">
        <input type="text" placeholder="Имя*" className="AboutUsFiz-input-field" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <input type="text" placeholder="Укажите адрес или название района*" className="AboutUsFiz-input-field-ur" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <input type="tel" placeholder="Номер телефона*" className="AboutUsFiz-input-field-ur" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <input type="email" placeholder="Электронная почта* (если есть)" className="AboutUsFiz-input-field-ur" />
      </div>
      <div className="AboutUsFiz-form-input-ur">
        <textarea placeholder="Опишите проблему или добавьте пожелания*" className="AboutUsFiz-textarea-field-ur"></textarea>
      </div>
      <div className="AboutUsFiz-form-checkbox-ur">
        <input type="checkbox" id="privacy-policy" className="AboutUsFiz-form-checkbox-input-ur" />
        <label htmlFor="privacy-policy" className="AboutUsFiz-form-checkbox-label-ur">
          Я прочитал и согласен с политикой конфиденциальности
        </label>
      </div>
      <button type="submit" className="AboutUsFiz-form-submit-button-ur">Отправить заявку</button>
    </div>
  </div>
</div>
</div>


    
  </div>
  )
}

export default AboutUsUr
