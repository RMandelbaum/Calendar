import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventCard from '../components/EventCard';
import { getEvents } from '../actions/events';
import { removeEvent } from '../actions/events';
import { updateEventFormData } from '../actions/eventsForm';
import '../styles/Events.css';

// Displays Events in Users page, work on delete and update
class Events extends Component{

  componentDidMount(){
    this.props.getEvents()
  }

  delete(e){
    removeEvent(e)
  }
  update(e){
    updateEventFormData(e)
  }

  render(){

      const events = this.props.events
         return(
           <div className="EventsContainer" >
              <h2 >Your Upcoming Events:</h2>
                 {events.map(e =>
                  <EventCard key={e.id}
                             e={e}
                             description = {e.description}
                             date = {e.date}
                             start_time = {e.start_time}
                             end_time = {e.end_time}
                             onDelete= {this.delete(e)}
                             onUpdate= {this.update(e)}
                  />
                  )}

        </div>
    )

  }


}



const mapStateToProps = (state) => {
  return({
    events: state.events
  })
}

export default connect(mapStateToProps, { getEvents, removeEvent, updateEventFormData })(Events);
