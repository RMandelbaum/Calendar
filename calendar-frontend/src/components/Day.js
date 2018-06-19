import React from 'react';

//Creates the number dates for each box
const createDays = (date) => {
  for (let i = 1; i <= 30; i++) {
    if(i == date){
       return i;
     }
   }
}

const Day = ({day, date }) =>(
  <div id = {day} className="EventCard" style={{cursor:'pointer'}}>
      {createDays(date)}
    </div>
)

export default Day;
