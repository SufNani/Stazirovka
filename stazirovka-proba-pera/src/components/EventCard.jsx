import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cover from './ui/Cover'
import Icon from './ui/Icon'
import { coverFor, priceLabel } from '../data/events'

export default function EventCard({ event }) {
  const [react, setReact] = useState(null) // 'up' | 'down' | null

  return (
    <article className="kt-eventcard">
      <Link to={`/event/${event.slug}`} className="kt-eventcard__media">
        <Cover
          image={event.image}
          gradient={coverFor(event.category)}
          initials={event.orgInitials}
          label={event.title}
          style={{ width: '100%', height: '100%' }}
        />
      </Link>

      <div className="kt-eventcard__body">
        <div className="kt-eventcard__top">
          <span className="kt-eventcard__org">
            <span className="kt-eventcard__logo">{event.orgInitials}</span>
            <span>{event.org}</span>
          </span>
          <span className="kt-eventcard__age">{event.age}</span>
        </div>

        <Link to={`/event/${event.slug}`} className="kt-eventcard__title">
          {event.title}
        </Link>

        <div className="kt-eventcard__city">{event.city}</div>
        <div className="kt-eventcard__when">
          {event.dateLabel} {event.timeLabel}
        </div>

        <div className="kt-eventcard__foot">
          <Link to={`/event/${event.slug}`} className="kt-pricepill">
            {priceLabel(event.price)}
          </Link>
          <div className="kt-eventcard__reacts">
            <button
              className={`kt-iconbtn ${react === 'up' ? 'kt-iconbtn--active' : ''}`}
              onClick={() => setReact(react === 'up' ? null : 'up')}
              aria-pressed={react === 'up'}
              aria-label="В избранное"
            >
              <Icon name="heart" size={20} />
            </button>
            <button
              className={`kt-iconbtn ${react === 'down' ? 'kt-iconbtn--active-down' : ''}`}
              onClick={() => setReact(react === 'down' ? null : 'down')}
              aria-pressed={react === 'down'}
              aria-label="Скрыть такие события"
            >
              <Icon name="thumbsDown" size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
