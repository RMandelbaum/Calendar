import React from 'react';
import '../styles/Events.css';

//Displays Events
const EventCard = (e) => {
    return(
        <div key={e.id}>
          <h3>Event: {e.description}</h3>
          <p>Date: {e.date}</p>
          <p>Start: {e.start_time}</p>
          <p>End: {e.end_time}</p>
          <button>Delete {e.onDelete}</button>
          <button>Edit {e.onUpdate}</button>
          <br />
          <br />
        </div>
  )
}
export default EventCard;
