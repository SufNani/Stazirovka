import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cover from '../../components/ui/Cover'
import Icon from '../../components/ui/Icon'
import { coverFor, priceLabel } from '../../data/events'
import { useEvents } from '../../store/EventsContext'

// Мок-участники (в MVP приходят с бэкенда)
const NAMES = [
  ['Анна Смирнова', 'anna@mail.ru'],
  ['Пётр Волков', '+7 916 000-11-22'],
  ['Мария Кузнецова', 'maria.k@mail.ru'],
  ['Дмитрий Орлов', 'orlov@mail.ru'],
  ['Елена Соколова', '+7 903 555-33-11'],
  ['Игорь Морозов', 'morozov@mail.ru'],
]
const STATUSES = ['Подтверждена', 'Подтверждена', 'Ожидает', 'Подтверждена', 'Отменена', 'Подтверждена']

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase()
}

export default function EventDetailsPage() {
  const { slug } = useParams()
  const { getEvent } = useEvents()
  const event = getEvent(slug)
  const [toast, setToast] = useState('')

  if (!event) {
    return (
      <div className="kt-container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h1 style={{ marginBottom: 16 }}>Событие не найдено</h1>
        <Link to="/organizer" className="kt-btn kt-btn--gold">
          К моим событиям
        </Link>
      </div>
    )
  }

  const participants = NAMES.map(([name, contact], i) => ({
    n: i + 1,
    name,
    contact,
    status: STATUSES[i],
  }))
  const extra = 119

  function exportCsv() {
    const rows = [
      ['№', 'Имя', 'Контакт', 'Статус'],
      ...participants.map((p) => [p.n, p.name, p.contact, p.status]),
    ]
    const csv = rows.map((r) => r.join(';')).join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${event.slug}-uchastniki.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="kt-container" style={{ paddingBlock: 28 }}>
      <div className="kt-crumbs" style={{ paddingTop: 0, marginBottom: 16 }}>
        <Link to="/organizer">Мои события</Link>
        <Icon name="chevronRight" size={14} />
        <span>Детали события</span>
      </div>

      <div className="kt-detailsgrid">
        {/* Левая колонка — карточка события */}
        <div className="kt-panel">
          <Cover
            image={event.image}
            gradient={coverFor(event.category)}
            label={event.title}
            initials={event.orgInitials}
            style={{ width: '100%', aspectRatio: '16/10', borderRadius: 'var(--kt-r-md)' }}
          />
          <h1 style={{ fontSize: 24, margin: '18px 0 10px' }}>{event.title}</h1>
          <div className="kt-minievent__meta" style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Icon name="calendar" size={16} /> {event.dateLabel}, {event.timeLabel}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Icon name="pin" size={16} /> {event.city}, {event.address}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="clock" size={16} /> {priceLabel(event.price)}
            </div>
          </div>
          <p style={{ color: 'var(--kt-ink)', lineHeight: 1.6, marginBottom: 20 }}>
            {event.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link to="/organizer/create" className="kt-btn kt-btn--gold kt-btn--block">
              <Icon name="edit" size={18} /> Редактировать событие
            </Link>
            <button className="kt-btn kt-btn--danger kt-btn--block" onClick={() => setToast('Событие удалено (демо)')}>
              <Icon name="trash" size={18} /> Удалить событие
            </button>
          </div>
        </div>

        {/* Правая колонка — участники */}
        <div className="kt-panel">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <div className="kt-cabsection__title">
              Участники{' '}
              <span className="kt-cabsection__count">{participants.length + extra}</span>
            </div>
            <button className="kt-btn kt-btn--ghost kt-btn--sm" onClick={exportCsv}>
              Экспорт в CSV
            </button>
          </div>

          <div className="kt-avastack" style={{ marginBottom: 18 }}>
            {participants.slice(0, 5).map((p) => (
              <div className="kt-avastack__item" key={p.n} title={p.name}>
                {initials(p.name)}
              </div>
            ))}
            <div className="kt-avastack__item kt-avastack__more">+{extra}</div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="kt-table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Имя</th>
                  <th>Контакт</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((p) => (
                  <tr key={p.n}>
                    <td className="kt-mono">{p.n}</td>
                    <td>{p.name}</td>
                    <td className="kt-mono">{p.contact}</td>
                    <td>
                      <span
                        className={`kt-status ${
                          p.status === 'Подтверждена'
                            ? 'kt-status--pub'
                            : p.status === 'Отменена'
                            ? 'kt-status--draft'
                            : 'kt-status--done'
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="kt-field__hint" style={{ marginTop: 12 }}>
            Показаны первые {participants.length} записей. Полный список — в выгрузке CSV.
          </p>
        </div>
      </div>

      {toast && (
        <div className="kt-toast">
          <Icon name="check" size={18} strokeWidth={3} /> {toast}
        </div>
      )}
    </div>
  )
}
