import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [role, setRole] = useState('organizer') // 'organizer' | 'client'
  const [form, setForm] = useState({ name: '', phone: '', password: '', consent: false })
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()
    setError('')
    if (!form.phone.trim() || !form.password.trim()) {
      setError('Введите телефон и пароль.')
      return
    }
    if (mode === 'register' && !form.consent) {
      setError('Нужно согласие на обработку персональных данных.')
      return
    }
    // Заглушка: бэкенда нет, просто ведём в нужный кабинет
    navigate(role === 'organizer' ? '/organizer' : '/client')
  }

  return (
    <div className="kt-auth">
      <div className="kt-auth__card">
        <div className="kt-auth__tabs">
          <button
            className={`kt-auth__tab ${mode === 'login' ? 'is-active' : ''}`}
            onClick={() => setMode('login')}
          >
            Вход
          </button>
          <button
            className={`kt-auth__tab ${mode === 'register' ? 'is-active' : ''}`}
            onClick={() => setMode('register')}
          >
            Регистрация
          </button>
        </div>

        <h1 style={{ fontSize: 24, marginBottom: 6 }}>
          {mode === 'login' ? 'С возвращением!' : 'Создать аккаунт'}
        </h1>
        <p className="kt-field__hint" style={{ marginBottom: 20 }}>
          {mode === 'login'
            ? 'Войдите по номеру телефона, чтобы управлять событиями и записями.'
            : 'Пара шагов — и можно публиковать первое событие.'}
        </p>

        {/* Роль */}
        <div className="kt-auth__tabs" style={{ marginBottom: 20 }}>
          <button
            className={`kt-auth__tab ${role === 'organizer' ? 'is-active' : ''}`}
            onClick={() => setRole('organizer')}
          >
            Я организатор
          </button>
          <button
            className={`kt-auth__tab ${role === 'client' ? 'is-active' : ''}`}
            onClick={() => setRole('client')}
          >
            Я участник
          </button>
        </div>

        <form className="kt-auth__form" onSubmit={submit}>
          {mode === 'register' && (
            <div className="kt-field">
              <label className="kt-field__label" htmlFor="au-name">
                Имя или название проекта
              </label>
              <input
                id="au-name"
                className="kt-input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Мастерская «Ясень-пень»"
              />
            </div>
          )}

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="au-phone">
              Телефон
            </label>
            <input
              id="au-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className="kt-input"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="au-pass">
              Пароль
            </label>
            <input
              id="au-pass"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              className="kt-input"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
            />
          </div>

          {mode === 'register' && (
            <label className="kt-checkline">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              />
              <span>
                Я согласен(а) на обработку персональных данных и принимаю{' '}
                <a href="#">политику конфиденциальности</a>.
              </span>
            </label>
          )}

          {error && (
            <div style={{ color: 'var(--kt-danger)', fontSize: 14, fontWeight: 600 }}>
              {error}
            </div>
          )}

          <button type="submit" className="kt-btn kt-btn--gold kt-btn--block kt-btn--lg">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="kt-auth__switch">
          {mode === 'login' ? (
            <>
              Ещё нет аккаунта?{' '}
              <button onClick={() => setMode('register')}>Зарегистрироваться</button>
            </>
          ) : (
            <>
              Уже есть аккаунт? <button onClick={() => setMode('login')}>Войти</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
