import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../../components/ui/Icon'
import { CATEGORIES, CITIES, makeEvent } from '../../data/events'
import { ORGANIZER } from '../../data/site'
import { useEvents } from '../../store/EventsContext'

const empty = {
  title: '',
  category: '',
  city: '',
  address: '',
  date: '',
  time: '',
  duration: '',
  seats: '',
  price: '',
  description: '',
}

export default function CreateEventPage() {
  const navigate = useNavigate()
  const { addEvent } = useEvents()
  const [form, setForm] = useState(empty)
  const [toast, setToast] = useState('')
  const [error, setError] = useState('')

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
    if (error) setError('')
  }

  function validate(publish) {
    if (!form.title.trim()) return 'Укажите название события.'
    if (!publish) return '' // черновик можно сохранить только с названием
    if (!form.category) return 'Выберите категорию.'
    if (!form.date) return 'Укажите дату начала.'
    if (!form.time) return 'Укажите время начала.'
    if (!form.seats || Number(form.seats) < 1) return 'Укажите количество мест (минимум 1).'
    return ''
  }

  function save(publish) {
    const problem = validate(publish)
    if (problem) {
      setError(problem)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const event = makeEvent(form, ORGANIZER, publish)
    addEvent(event)
    setToast(publish ? 'Событие опубликовано 🎉' : 'Черновик сохранён')
    setTimeout(() => navigate('/organizer'), 1000)
  }

  return (
    <div className="kt-container" style={{ paddingBlock: 28, maxWidth: 900 }}>
      <div className="kt-crumbs" style={{ paddingTop: 0, marginBottom: 16 }}>
        <Link to="/organizer">Мои события</Link>
        <Icon name="chevronRight" size={14} />
        <span>Создание события</span>
      </div>

      <div className="kt-panel">
        <h1 style={{ fontSize: 26, marginBottom: 6 }}>Создать событие</h1>
        <p className="kt-field__hint" style={{ marginBottom: 24 }}>
          Заполните детали — клиенты увидят их на публичной странице.
        </p>

        {error && (
          <div
            role="alert"
            style={{
              background: 'var(--kt-danger-soft, #fbe4e0)',
              color: 'var(--kt-danger)',
              border: '1px solid var(--kt-danger)',
              borderRadius: 'var(--kt-r-md)',
              padding: '12px 16px',
              marginBottom: 20,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {error}
          </div>
        )}

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
            save(true)
          }}
          className="kt-formgrid"
        >
          <div className="kt-field kt-formgrid--full">
            <label className="kt-field__label" htmlFor="ce-title">
              Название
            </label>
            <input
              id="ce-title"
              className="kt-input"
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="Мастер-класс по лепке из глины"
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-cat">
              Ниша / категория
            </label>
            <select
              id="ce-cat"
              className="kt-select"
              value={form.category}
              onChange={(e) => set('category', e.target.value)}
            >
              <option value="">Выберите категорию</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-city">
              Город
            </label>
            <select
              id="ce-city"
              className="kt-select"
              value={form.city}
              onChange={(e) => set('city', e.target.value)}
            >
              <option value="">Выберите город</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="kt-field kt-formgrid--full">
            <label className="kt-field__label" htmlFor="ce-addr">
              Адрес или площадка
            </label>
            <input
              id="ce-addr"
              className="kt-input"
              value={form.address}
              onChange={(e) => set('address', e.target.value)}
              placeholder="ул. Тимура Фрунзе, 11 (или «Онлайн»)"
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-date">
              Дата начала
            </label>
            <input
              id="ce-date"
              type="date"
              className="kt-input"
              value={form.date}
              onChange={(e) => set('date', e.target.value)}
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-time">
              Время начала
            </label>
            <input
              id="ce-time"
              type="time"
              className="kt-input"
              value={form.time}
              onChange={(e) => set('time', e.target.value)}
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-dur">
              Длительность (часы)
            </label>
            <input
              id="ce-dur"
              type="number"
              min="0"
              step="0.5"
              className="kt-input"
              value={form.duration}
              onChange={(e) => set('duration', e.target.value)}
              placeholder="3"
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-seats">
              Количество мест
            </label>
            <input
              id="ce-seats"
              type="number"
              min="1"
              className="kt-input"
              value={form.seats}
              onChange={(e) => set('seats', e.target.value)}
              placeholder="10"
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label" htmlFor="ce-price">
              Цена (₽), 0 — бесплатно
            </label>
            <input
              id="ce-price"
              type="number"
              min="0"
              className="kt-input"
              value={form.price}
              onChange={(e) => set('price', e.target.value)}
              placeholder="2500"
            />
          </div>

          <div className="kt-field">
            <label className="kt-field__label">Обложка события</label>
            <div className="kt-uploadbox" onClick={() => setToast('Загрузка фото — на этапе интеграции с API')}>
              <Icon name="plus" size={24} />
              <span>Добавить фото</span>
            </div>
          </div>

          <div className="kt-field kt-formgrid--full">
            <label className="kt-field__label" htmlFor="ce-desc">
              Краткое описание
            </label>
            <textarea
              id="ce-desc"
              className="kt-textarea"
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
              placeholder="Расскажите, что будет на событии, что нужно взять и для кого оно."
            />
          </div>

          <div
            className="kt-formgrid--full"
            style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}
          >
            <button type="button" className="kt-btn kt-btn--ghost" onClick={() => save(false)}>
              Сохранить черновик
            </button>
            <button type="submit" className="kt-btn kt-btn--gold kt-btn--lg">
              Опубликовать событие
            </button>
          </div>
        </form>
      </div>

      {toast && (
        <div className="kt-toast">
          <Icon name="check" size={18} strokeWidth={3} /> {toast}
        </div>
      )}
    </div>
  )
}
