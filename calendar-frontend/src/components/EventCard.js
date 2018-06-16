import React from 'react';
// import '../styles/Events.css';

const EventCard = (e) => {
    return(
        <div key={e.id} className="EventCard">
          <h3>''{e.description}''</h3>
          <p>Date: {e.date}</p>
          <p>Start: {e.start_time}</p>
          <p>End: {e.end_time}</p>
          <br />
          <br />
        </div>
)
}
export default EventCard;
