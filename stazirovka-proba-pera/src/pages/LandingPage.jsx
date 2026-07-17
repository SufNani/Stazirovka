import { Link, useNavigate } from 'react-router-dom'
import CatalogSection from '../components/CatalogSection'
import { COLLECTIONS } from '../data/site'

function CollectionCard({ c }) {
  const navigate = useNavigate()
  const [from, to] = c.cover
  return (
    <article
      className="kt-collection"
      style={{ '--bg': `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <h3 className="kt-collection__title">{c.title}</h3>
      <div>
        <p className="kt-collection__text">{c.text}</p>
        <button
          className="kt-btn kt-btn--gold kt-btn--sm"
          onClick={() => navigate(`/collections${c.id}`)}
        >
          Смотреть все события
        </button>
      </div>
    </article>
  )
}

export default function LandingPage() {
  return (
    <>
      {/* Герой */}
      <section className="kt-hero">
        <div className="kt-container">
          <div className="kt-hero__card">
            <h1 className="kt-hero__title">
              КалендАрт — это онлайн-календарь мастер-классов и событий
            </h1>
            <p className="kt-hero__text">
              Находите мастер-классы по душе, пробуйте новое и создавайте свои события.
              КалендАрт помогает наполнить жизнь яркими моментами без лишней суеты. Всё, что
              нужно для вдохновения, развития и новых знакомств — в одном месте.
            </p>
            <Link to="/catalog" className="kt-btn kt-btn--purple kt-btn--lg">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Подборки */}
      <section className="kt-section" id="collections">
        <div className="kt-container">
          <h2 className="kt-section__title">Подборки</h2>
          <Link to="/collections" className="kt-btn kt-btn--gold kt-btn--sm">Все подборки</Link>
          <p className="kt-section__lead">
            Найдите свой идеальный мастер-класс или событие! Нажимайте на интересную тему — и
            КалендАрт покажет все доступные занятия, чтобы вы могли выбрать то, что по душе
            именно сегодня. <b>От творчества до саморазвития — подборки на любой вкус!</b>
          </p>
          <div className="kt-collections">
            {COLLECTIONS.map((c) => (
              <CollectionCard key={c.id} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Каталог */}
      <CatalogSection id="catalog" />
    </>
  )
}
