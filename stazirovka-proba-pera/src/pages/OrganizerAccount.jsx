import './OrganizerAccount.css'

const events =[
    {
        title: 'Музыкальный фестиваль',
        date: '15 мая 2026'
    },
    {
        title: 'Арт-вечеринка',
        date: '22 мая 2026'
    },
    {
        title: 'Урок гончарного дела',
        date: '30 мая 2026'
    },
]

function OrganizerAccount(){
    return(
        <main className='account-page'>
            <aside className='sidebar'>
                <h2>Личный кабинет</h2>
                <p>Организатора</p>

                <div className='profile-card'>
                    <strong>Иван Иванов</strong>
                    <span>Ivanov@mail.ru</span>
                </div>

                <button>Мои события</button>
                <button>+ Создание событие</button>
                <button>Профиль</button>
                <button>Настройки</button>
                <button>Избранное</button>
                <button>Удалить аккаунт</button>
            </aside>

            <section className='account-content'>
                <div className='content-header'>
                    <h2>Мои события</h2>
                    <button>Мои события +</button>
                </div>

                <div className='content-grid'>
                    <div className='calendar-box'>
                        <h3>Календарь событий</h3>
                        <div className='calendar-placeholder'>Май 2026</div>
                    </div>

                    <div className='event-list'>
                        <h3>Список событий</h3>

                        {events.map((event) =>(
                            <div className='small-event-card' key={event.title}>
                                <div className='small-photo'>Фото</div>
                                <div>
                                    <h4>{event.title}</h4>
                                    <p>{event.date}</p>
                                </div>
                                <span></span>
                                </div>
                        ))}


                        <button className='delete-btn'>Удалить события</button>
                    </div>
                </div>

                <div className='big-event-card'>
                    <div className='big-photo'>Фото</div>

                    <div className='big-event-info'>
                        <h3>Музыкальный фестиваль</h3>
                        <p>15 мая 2026, 18:00</p>
                        <p>Москва, Сад "Эрмитаж"</p>
                        <p>
                            Большой музыкальный фестиваль с участием популярных артистов.
                        </p>
                        <button>Редактировать</button>
                    </div>

                    <div className='participants'>
                        <p>Участники (123)</p>
                        <div className='avatars'>
                            <span>Фото</span>
                            <span>Фото</span>
                            <span>Фото</span>
                            <span>+119</span>
                        </div>
                        <button>Смотреть всех участников</button>
                    </div>
                </div>
            </section>
                    

                        <aside className='details'>
                            <h2>Детали события</h2>

                            <div className='details-photo'>Фото</div>

                            <h3>Музыкальный фестиваль</h3>
                        <p>15 мая 2026, 18:00</p>
                        <p>Москва, Сад "Эрмитаж"</p>

                        <h4>Описание</h4>
                        <p>
                            Приглашаем вас на главное музыкальное событие этого лета!
                        </p>
                        

                        <button>Смотреть всех участников</button>
                        <button>Удалить событие</button>
                        </aside>
        </main>
    )
}

export default OrganizerAccount