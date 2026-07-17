import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import Icon from '../ui/Icon'

const NAV = [
  { to: '/collections', label: 'Подборки' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/about', label: 'О платформе' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="kt-header">
      <div className="kt-container kt-header__inner">
        <Logo />

        <nav className="kt-header__nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `kt-header__link ${isActive && item.to !== '/collections' ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="kt-header__right">
          <label className="kt-header__search">
            <Icon name="search" size={16} />
            <input placeholder="Поиск" aria-label="Поиск по сайту" />
          </label>
          <Link to="/login" className="kt-btn kt-btn--purple kt-btn--sm">
            Войти
          </Link>
          <Link to="/client" className="kt-header__avatar" aria-label="Личный кабинет">
            <Icon name="user" size={20} />
          </Link>
          <button
            className="kt-burger"
            aria-label="Меню"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="kt-mobilemenu">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setMobileOpen(false)}>Войти</Link>
          <Link to="/client" onClick={() => setMobileOpen(false)}>Личный кабинет</Link>
        </nav>
      )}
    </header>
  )
}
