import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/cabinet/Sidebar'
import Calendar from '../../components/ui/Calendar'
import Icon from '../../components/ui/Icon'
import { ORGANIZER, STATUS_LABEL } from '../../data/site'
import { useEvents } from '../../store/EventsContext'

const NAV = [
  { key: 'events', label: 'Мои события' },
  { key: 'create', label: 'Создание события' },
  { key: 'profile', label: 'Профиль' },
  { key: 'settings', label: 'Настройки' },
]

const STATUS_CLASS = { published: 'kt-status--pub', draft: 'kt-status--draft', done: 'kt-status--done' }

export default function OrganizerDashboard() {
  const navigate = useNavigate()
  const { myEvents, removeEvent } = useEvents()
  const [active, setActive] = useState('events')

  const markedDates = new Set(myEvents.map((e) => e.date))

  function onDelete(e) {
    if (window.confirm(`Удалить событие «${e.title}»?`)) {
      removeEvent(e.id)
    }
  }

  function onNav(key) {
    if (key === 'create') {
      navigate('/organizer/create')
      return
    }
    setActive(key)
  }

  return (
    <div className="kt-container kt-cabinet">
      <Sidebar
        role="Организатора"
        user={{ name: ORGANIZER.name, email: ORGANIZER.email, initials: ORGANIZER.initials }}
        items={NAV}
        active={active}
        onSelect={onNav}
      />

      <div>
        <div
          className="kt-panel"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
        >
          <div>
            <h1 className="kt-greet__title">Мои события</h1>
            <p className="kt-greet__sub">{ORGANIZER.project}</p>
          </div>
          <Link to="/organizer/create" className="kt-btn kt-btn--purple kt-btn--lg">
            <Icon name="plus" size={18} /> Создать событие
          </Link>
        </div>

        <div className="kt-cabsection kt-orggrid">
          {/* Календарь */}
          <div className="kt-panel" style={{ background: 'var(--kt-purple)', color: 'var(--kt-on-purple)' }}>
            <Calendar markedDates={markedDates} initialMonth="2026-06-01" />
            <p style={{ fontSize: 13, opacity: 0.8, padding: '0 6px', marginTop: 8 }}>
              Точками отмечены дни, где у вас есть события.
            </p>
          </div>

          {/* Таблица событий */}
          <div className="kt-panel" style={{ overflowX: 'auto' }}>
            <table className="kt-table">
              <thead>
                <tr>
                  <th>Событие</th>
                  <th>Дата</th>
                  <th>Места</th>
                  <th>Статус</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {myEvents.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '32px 12px', color: 'var(--kt-ink-soft)' }}>
                      Пока нет событий.{' '}
                      <Link to="/organizer/create" style={{ color: 'var(--kt-purple-2)', fontWeight: 600 }}>
                        Создайте первое →
                      </Link>
                    </td>
                  </tr>
                )}
                {myEvents.map((e) => {
                  const free = e.sessions.reduce((a, s) => a + s.free, 0)
                  const total = e.sessions.reduce((a, s) => a + s.total + s.free, 0)
                  return (
                    <tr key={e.id}>
                      <td>
                        <div style={{ fontWeight: 600 }}>{e.title}</div>
                        <div className="kt-eventcard__city">{e.city}</div>
                      </td>
                      <td className="kt-mono">
                        {e.dateLabel}
                        <br />
                        {e.timeLabel}
                      </td>
                      <td className="kt-mono">
                        {free}/{total}
                      </td>
                      <td>
                        <span className={`kt-status ${STATUS_CLASS[e.status]}`}>
                          {STATUS_LABEL[e.status]}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                          <Link
                            to={`/organizer/event/${e.slug}`}
                            className="kt-iconbtn"
                            aria-label="Открыть"
                          >
                            <Icon name="users" size={18} />
                          </Link>
                          <Link
                            to="/organizer/create"
                            className="kt-iconbtn"
                            aria-label="Редактировать"
                          >
                            <Icon name="edit" size={18} />
                          </Link>
                          <button
                            className="kt-iconbtn"
                            aria-label="Удалить"
                            onClick={() => onDelete(e)}
                          >
                            <Icon name="trash" size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
