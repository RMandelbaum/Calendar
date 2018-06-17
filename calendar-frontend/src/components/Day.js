import React from 'react';

const createDays = (date) => {
  for (let i = 1; i <= 30; i++) {
    if(i == date){
       return i;
     }
   }
}

const Day = ({day, date, createEvent }) =>(
  <div id = {day} className="EventCard" style={{cursor:'pointer'}}>
      {createDays(date)}
    </div>
)

export default Day;
