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

         return(
           <div className="EventsContainer">
              <h2 >Your Upcoming Events:</h2>
              <p className ="EventCard">events</p>
              
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
