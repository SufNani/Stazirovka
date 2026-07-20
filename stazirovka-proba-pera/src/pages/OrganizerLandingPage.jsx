import './OrganizerLandingPage.css'
export default function OrganizerLandingPage() {
  return (
    <main className="kt-organizer-home">

      <section className="hero">
        <div className="hero__content">
          <h1>КалендАрт это<br />сервис для лёгкой организации событий</h1>

          <p>
            Хочешь знать, чем живёт твой город?
            Мы собираем и создаём самые яркие события —
            от уютных камерных встреч до масштабных фестивалей.
          </p>

          <button className="kt-btn kt-btn--purple">
            Создать своё первое событие
          </button>
        </div>
      </section>

      <section className="register">
        <h2>Зарегистрируйтесь</h2>
        <p>создавай и находи события в своём городе!</p>

        <div className="cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>

      <section className="tariffs">
        <h2>Тарифы</h2>

        <div className="cards">
          <div className="card">
            <h3>Ноль</h3>
          </div>

          <div className="card">
            <h3>Пятьдесят</h3>
          </div>

          <div className="card">
            <h3>VIP</h3>
          </div>
        </div>
      </section>

      <section className="quiz">
        <h2>
          Ответьте на два вопроса,
          чтобы узнать о сервисах именно
          для вашего события
        </h2>

        <div className="switches">
          <button>Онлайн</button>
          <button>Офлайн</button>
        </div>

        <div className="tags">
          <button>Конференция</button>
          <button>Тренинг</button>
          <button>Вебинар</button>
          <button>Курс</button>
          <button>Корпоративное событие</button>
          <button>Другое</button>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Создайте своё первое мероприятие</h2>

          <button className="kt-btn kt-btn--purple">
            Создать своё первое событие
          </button>

          <button className="kt-btn kt-btn--ghost">
            Узнать про возможности для крупных событий
          </button>
        </div>

        <div className="preview"></div>
      </section>

    </main>
  )
}