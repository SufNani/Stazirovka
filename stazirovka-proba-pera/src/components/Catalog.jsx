function Catalog(){
    const events = [
        {
            title:'Мастер-класс по рисованию',
            discription:'',
            company:'Art Studio',
            city:'Москва',
            date:'22 июня',
            price:'1500 р',
            age:'14+',
        },

        {
            title:'Рисование акварелью',
            discription:'',
            company:'Arttt',
            city:'Томск',
            date:'30 июля',
            price:'2000 р',
            age:'15+',
        },

        {
            title:'Чтение',
            discription:'',
            company:'REad',
            city:'Новосибирск',
            date:'25 февраля',
            price:'3000 р',
            age:'3+',
        }
    ]
    return(
        <section>
            <h2>Каталог</h2>

            <div className="catalog">
                {events.map((event) => (
                    <EventCard
                    key={event.title}
                    evebt={event}
                    />
                ))}

            </div>
        </section>
    )
}

export default Catalog