import React from 'react';
import advantagesimg from '../../assets/Frame 53.png';
import './AdvantagesMain.css';

const advantages = [
  { text: 'Квалифицированные специалисты и мастера, обеспечивающие качественное выполнение работ.', number: '01' },
  { text: 'Широкий спектр услуг, включающих установку, ремонт и обслуживание сантехнического оборудования, бытовой техники и электрических систем.', number: '02' },
  { text: 'Использование качественных материалов и комплектующих при выполнении работ.', number: '03' },
  { text: 'Экономия: Один фиксированный платеж вместо высоких затрат на срочные вызовы специалистов.', number: '04' },
  { text: 'Постоянная поддержка: Мелкие поломки и неполадки не будут прерывать работу вашего бизнеса или комфортную жизнь — мы всегда рядом, чтобы быстро устранить любую проблему.', number: '05' },
  { text: 'Соблюдение всех стандартов безопасности, гарантирующее безопасность клиентов и специалистов во время проведения работ.', number: '06' },
  { text: 'Гарантия на предоставляемые услуги и работы.', number: '07' },
  { text: 'Прозрачные и предсказуемые расходы: Один платеж на полгода или год, и никаких дополнительных скрытых затрат на обслуживание бытовых проблем.', number: '08' },
  { text: 'Опыт и профессионализм в области сантехники, ремонта бытовой техники и электрики.', number: '09' },
];

const AdvantagesMain = () => {
  return (
    <div className="advantages-main">
      <h2 className="advantages-header">НАШИ ПРЕИМУЩЕСТВА</h2>
      <div className="advantages-content">
        <div className="advantages-left">
          {advantages.slice(0, 6).map((adv, index) => (
            <div key={index} className="advantage-item">
              <span className="advantage-text">{adv.text}</span>
              <span className="advantage-number">{adv.number}</span>
            </div>
          ))}
        </div>
        <div className="advantages-image">
          <img src={advantagesimg} alt="Преимущество" />
        </div>
        <div className="advantages-right">
          {advantages.slice(6).map((adv, index) => (
            <div key={index} className="advantage-item">
              <span className="advantage-text">{adv.text}</span>
              <span className="advantage-number">{adv.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesMain;
