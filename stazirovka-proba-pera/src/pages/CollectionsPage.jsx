import { COLLECTIONS } from '../data/site'

export default function CollectionsPage() {
  return (
    <section className="kt-section">
      <div className="kt-container">
        <h1 className="kt-section__title">
          Все подборки
        </h1>

        <div className="kt-collections">
          {COLLECTIONS.map((c) => (
            <article
              key={c.id}
              className="kt-collection"
              style={{
                background: `linear-gradient(135deg, ${c.cover[0]}, ${c.cover[1]})`,
              }}
            >
              <h3 className="kt-collection__title">
                {c.title}
              </h3>

              <p className="kt-collection__text">
                {c.text}
              </p>

              <span>
                {c.category}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}