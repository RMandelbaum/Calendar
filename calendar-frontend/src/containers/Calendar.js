import React, { Component } from 'react';
import { createEvent } from '../actions/events';
import { connect } from 'react-redux';
import  Week  from '../components/Week'

import '../styles/calendar.css'

class Calendar extends Component {
    constructor(){
      super();

      this.state = {
        hasBeenClicked: false,
        redirect: false
      };
    }

    handleClick = () => {
      const { createEvent, eventFormData, history} = this.props;
      this.setState({
        hasBeenClicked: true,
        redirect: createEvent(eventFormData, history)

    })
  }

    render() {
      const createEvent = this.props;
      let days = [];

      for (let i = 1; i <= 30; i++) {
        days.push(i);
        }

        return(
            <div className = "calendar-container">
              <h1>January</h1>
              <div className = "day">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>Th</span>
                <span>F</span>
                <span>S</span>
              </div>
              <div className="weeks-container" style={{cursor:'pointer'}} onClick = {this.handleClick}>
               {days.map(day =>
                 <Week key={day.id}
                           createEvent={createEvent}
                           day={day}
                           id = {day.id}


                            />)}
          </div>
            </div>

             )
            }
          }


const mapStateToProps = (state) => {
  return({
    days: state.days
  })
}

export default connect(mapStateToProps, {createEvent})(Calendar)
