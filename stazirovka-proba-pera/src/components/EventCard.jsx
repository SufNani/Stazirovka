import './EventCard.css'
function EventCard({event}){
    return(
        <div className="event-card">
            <div className="img">
                <img></img>
            </div>

            <h3>(event.title)</h3>
            <p>(event.discription)</p>
            <p>(event.company)</p>
            <p>(event.city)</p>   
            <p>(event.date)</p> 

            <div className="bottom">
                <span>(event.price)</span>
                <span>(event.age)</span>
            </div>   
            
            </div>
    )
}
export default EventCard