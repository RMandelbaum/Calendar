import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventCard from '../components/EventCard';
import { getEvents } from '../actions/events';
import '../styles/Events.css';

class Events extends Component{

  componentDidMount(){
    this.props.getEvents()
  }


  render(){
      debugger
      const events = this.props.events
         return(
           <div className="EventsContainer">
              <h2 >Your Upcoming Events:</h2>
                 {events.map(e =>
                  <EventCard key={e.id}
                             e={e}
                             description = {e.description}
                             date = {e.date}
                             start_time = {e.start_time}
                             end_time = {e.end_time}
                  />)}
        </div>
    )

  }


}



const mapStateToProps = (state) => {
  return({
    events: state.events
  })
}

export default connect(mapStateToProps, { getEvents })(Events);
