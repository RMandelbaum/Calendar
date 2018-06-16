import React from 'react';

debugger
const Week = ({day, createEvent }) =>(
  <div key={day.id} className="EventCard">

    </div>

)
const createDays = (days = []) => {

  for (let i = 1; i <= 30; i++) {
    days.push(i)
  }

  return days
}


export default Week;

{// style={{cursor:'pointer'}} onClick = {this.handleClick}>
}
