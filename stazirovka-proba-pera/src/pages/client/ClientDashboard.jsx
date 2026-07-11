import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/cabinet/Sidebar'
import Cover from '../../components/ui/Cover'
import Icon from '../../components/ui/Icon'
import { EVENTS, coverFor } from '../../data/events'
import { CURRENT_USER, INTERESTS } from '../../data/site'

const NAV = [
  { key: 'home', label: 'Главная' },
  { key: 'events', label: 'Мои события' },
  { key: 'interests', label: 'Интересы' },
  { key: 'profile', label: 'Профиль' },
  { key: 'settings', label: 'Настройки' },
  { key: 'help', label: 'Помощь' },
]

function MiniEvent({ event }) {
  return (
    <Link to={`/event/${event.slug}`} className="kt-minievent">
      <Cover
        className="kt-minievent__media"
        image={event.image}
        gradient={coverFor(event.category)}
        initials={event.orgInitials}
        label={event.title}
      />
      <div>
        <div className="kt-minievent__title">{event.title}</div>
        <div className="kt-minievent__meta">
          {event.dateLabel} {event.timeLabel}
          <br />
          {event.city}, {event.address}
        </div>
      </div>
    </Link>
  )
}

export default function ClientDashboard() {
  const [active, setActive] = useState('home')
  const [interests, setInterests] = useState(CURRENT_USER.interests)

  const myEvents = EVENTS.filter((e) => CURRENT_USER.bookedEventIds.includes(e.id))

  function toggleInterest(name) {
    setInterests((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    )
  }

  return (
    <div className="kt-container kt-cabinet">
      <Sidebar
        role="Клиента"
        user={CURRENT_USER}
        items={NAV}
        active={active}
        onSelect={setActive}
      />

      <div>
        <div className="kt-panel">
          <h1 className="kt-greet__title">Привет, {CURRENT_USER.name.split(' ')[0]}!</h1>
          <p className="kt-greet__sub">Добро пожаловать в ваш личный кабинет</p>
        </div>

        {(active === 'home' || active === 'events') && (
          <div className="kt-cabsection">
            <div className="kt-panel">
              <div className="kt-cabsection__head">
                <div className="kt-cabsection__title">
                  Мои события <span className="kt-cabsection__count">{myEvents.length}</span>
                </div>
              </div>
              <div className="kt-minigrid">
                {myEvents.map((e) => (
                  <MiniEvent key={e.id} event={e} />
                ))}
              </div>
              <div style={{ textAlign: 'right', marginTop: 16 }}>
                <Link
                  to="/catalog"
                  style={{
                    color: 'var(--kt-purple-2)',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  Найти ещё события <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {(active === 'home' || active === 'interests') && (
          <div className="kt-cabsection">
            <div className="kt-panel">
              <div className="kt-cabsection__title" style={{ marginBottom: 16 }}>
                Ваши интересы
              </div>
              <div className="kt-interests">
                {INTERESTS.map((name) => (
                  <button
                    key={name}
                    className={`kt-chip ${interests.includes(name) ? 'kt-chip--active' : ''}`}
                    onClick={() => toggleInterest(name)}
                  >
                    {name}
                  </button>
                ))}
                <button className="kt-chip kt-chip--add">
                  <Icon name="plus" size={14} /> Добавить
                </button>
              </div>
              <p className="kt-field__hint" style={{ marginTop: 14 }}>
                Мы подбираем события под ваши интересы. Нажмите, чтобы включить или выключить тему.
              </p>
            </div>
          </div>
        )}

        {['profile', 'settings', 'help'].includes(active) && (
          <div className="kt-cabsection">
            <div className="kt-panel">
              <div className="kt-cabsection__title" style={{ marginBottom: 12 }}>
                {NAV.find((n) => n.key === active)?.label}
              </div>
              <p className="kt-field__hint">
                Раздел в разработке — появится на следующих этапах MVP.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
