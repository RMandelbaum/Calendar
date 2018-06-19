import React from 'react';
import '../styles/Events.css';

// Shows Event on Actual Calendar 
const EventCalendar = (e) => {

    return(
        <div key={e.id}>
          <p>{e.date} - {e.description}</p>
        </div>
)
}
export default EventCalendar;
