import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import logo from '../../assets/logo.png'

const SUPPORT = [
  'Служба поддержки: +7 (999) 123-45-67 (круглосуточно)',
  'Email для вопросов: help@site.ru',
  'Часы работы техподдержки: Пн–Вс, 10:00–22:00 (МСК)',
  'Адрес юр. лица (для офлайн-мероприятий / договоров)',
]

export default function Footer() {
  return (
    <footer className="kt-footer">
      <div className="kt-container">
        <div className="kt-footer__brand">
          <img src={logo} width="56" height="56" alt="" aria-hidden="true" style={{ objectFit: 'contain' }} />
          <span className="kt-logo__text" style={{ fontSize: 26 }}>
            Календ<b>Арт</b>
          </span>
          <p className="kt-footer__tagline">
            Мероприятия для развития личности, творческого потенциала и новых возможностей
          </p>
        </div>

        <nav className="kt-footer__nav">
          <Link to="/#collections">Подборки</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/about">О платформе</Link>
        </nav>

        <div className="kt-footer__socials">
          <a className="kt-footer__social" href="#" aria-label="Instagram">
            <Icon name="instagram" size={26} />
            Instagram
          </a>
          <a className="kt-footer__social" href="#" aria-label="ВКонтакте">
            <Icon name="vk" size={26} />
            ВКонтакте
          </a>
          <a className="kt-footer__social" href="#" aria-label="Telegram">
            <Icon name="telegram" size={26} />
            Telegram
          </a>
        </div>

        <div className="kt-footer__cols">
          <ul className="kt-footer__col">
            {SUPPORT.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <ul className="kt-footer__col">
            {SUPPORT.map((line) => (
              <li key={`b-${line}`}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="kt-footer__legal">
          <div className="kt-footer__copy">© 2026 КалендАрт. Все права защищены.</div>
          <div className="kt-footer__links">
            <a href="#">Политика обработки персональных данных</a>
            <span>|</span>
            <a href="#">Пользовательское соглашение</a>
            <span>|</span>
            <a href="#">Правила возврата билетов</a>
            <span>|</span>
            <a href="#">Оферта для организаторов</a>
          </div>
          <p className="kt-footer__disclaimer">
            Организаторы несут ответственность за содержание своих мероприятий. Мы являемся
            только площадкой для регистрации.
          </p>
        </div>
      </div>
    </footer>
  )
}
