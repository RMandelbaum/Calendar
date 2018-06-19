import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Day  from '../components/Day'
import EventCalendar from '../components/EventCalendar';
import { getEvents } from '../actions/events';
import '../styles/calendar.css'

//displays the days, events and renders form for event
class Calendar extends Component {
    constructor(){
      super();

      this.state = {
        hasBeenClicked: false,
        redirect: false
      };
    }

    handleClick = (event) => {
      let date = event.target.id
      const {history} = this.props;

      this.setState({
        hasBeenClicked: true,
        redirect: history.push(`/events/${date}/new`, date)
    })
  }

    componentDidMount(){
      this.props.getEvents()
    }

    render() {
      let daySquares = [];

      for (let i = 1; i <= 30; i++) {
        daySquares.push(i);
        }

      const events = this.props.events

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
           {daySquares.map(day =>
             <Day key={day}
                   day={day}
                   date= {day}
                  />
              )}
          </div>
          <div className = "calendar-container">
            {events.map(e =>
              <EventCalendar
                    description = {e.description}
                    date = {e.date}/>
              )}
          </div>
        </div>
      )}
  }


  const mapStateToProps = (state) => {
    return({
      daySquares: state.daySquares,
      events: state.events

    })
  }


export default connect(mapStateToProps, {getEvents})(Calendar)
