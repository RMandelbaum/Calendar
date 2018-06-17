import React, { Component } from 'react';
import { createEvent, saveDate } from '../actions/events';
import { connect } from 'react-redux';
import  Day  from '../components/Day'
import { Redirect } from 'react-router-dom'

import '../styles/calendar.css'

class Calendar extends Component {
    constructor(){
      super();

      this.state = {
        hasBeenClicked: false,
        redirect: false
      };
    }


    handleClick = (event) => {
      let date = event.target
      debugger
      const { createEvent, eventFormData, history} = this.props;

      this.setState({
        hasBeenClicked: true,
        redirect: true
        //createEvent(eventFormData, history, date)
    })
  }

 //  renderRedirect = () => {
 //   if (this.state.redirect) {
 //     return <Redirect to='/events/new'>
 //   }
 // }

    // What we want is click on square and get event form with that date [square id] saved already


    render() {
      const createEvent = this.props;
      let daySquares = [];

      for (let i = 1; i <= 30; i++) {
        daySquares.push(i);
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
              <div className="days-container"  onClick = {this.handleClick}>
              { // {this.renderRedirect()}
            }
               {daySquares.map(day =>
                 <Day key={day}
                       day={day}
                       date= {day}
                            />)}
          </div>
            </div>

             )
            }
          }


const mapStateToProps = (state) => {
  return({
    daySquares: state.daySquares
  })
}

export default connect(mapStateToProps, {createEvent})(Calendar)
