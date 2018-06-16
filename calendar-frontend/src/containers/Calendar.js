import React, { Component } from 'react';
import {Router} from "react-router";
import { createEvent } from '../actions/events';
import { connect } from 'react-redux';


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

              <div className = "week" style={{cursor:'pointer'}} onClick = {this.handleClick}>
                <span> 1 </span>
                <span> 2 </span>
                <span> 3 </span>
                <span> 4 </span>
                <span> 5 </span>
                <span> 6 </span>
                <span> 7 </span>

              </div>

              <div className = "week" style={{cursor:'pointer'}} onClick = {this.handleClick} >
                <p> 8 </p>
                <p> 9 </p>
                <p> 10 </p>
                <p> 11 </p>
                <p> 12 </p>
                <p> 13 </p>
                <p> 14 </p>
                </div>
                <div className = "week" style={{cursor:'pointer'}} onClick = {this.handleClick}>
                <p> 15 </p>
                <p> 16 </p>
                <p> 17 </p>
                <p> 18 </p>
                <p> 19 </p>
                <p> 20 </p>
                <p> 21 </p>
                </div>
                <div className = "week" style={{cursor:'pointer'}} onClick = {this.handleClick}>
                <p> 22 </p>
                <p> 23 </p>
                <p> 24 </p>
                <p> 25 </p>
                <p> 26 </p>
                <p> 27 </p>
                <p> 28 </p>

                </div>
            </div>
          )
        }
      }


      const mapStateToProps = state => {
          return{
              eventFormData: state.eventFormData,
          }
      }

      export default connect(mapStateToProps, {createEvent})(Calendar)
