import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateEventFormData } from '../actions/eventsForm';
import { createEvent } from '../actions/events';
import FormError from '../components/FormError';
import  Day  from '../components/Day'

import '../styles/App.css'

class EventForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentEventFormData = Object.assign({}, this.props.eventFormData, {
          [name]: value
        })
        this.props.updateEventFormData(currentEventFormData)
      }

      handleOnSubmit = event => {
        event.preventDefault();

        const { createEvent, eventFormData, history} = this.props;
            createEvent(eventFormData, history, );

      }

    render(){
        const { description, start_time, end_time} = this.props.eventFormData;
        
        return(
            <div>
                <h3 className="FormHeader">Event Form</h3>
                {this.props.errors === true ? <FormError />: null}
                <hr />
                <form className="PageContent-Form" onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="description">Event Entry: </label>
                        <br />
                        <textarea
                               onChange={this.handleOnChange}
                               name='description'
                               value={description}
                               placeholder="required"
                          />

                    </div>

                    <div>
                        <label htmlFor="start_time">Start Time:</label>
                        <br />
                        <input type='time'
                               onChange={this.handleOnChange}
                               name='start_time'
                               value={start_time}
                               placeholder="HH:MM" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="end_time">End Time:</label>
                        <br />
                        <input type='time'
                               onChange={this.handleOnChange}
                               name='end_time'
                               value={end_time}
                               placeholder="HH:MM" />
                    </div>
                    <br />

                    <br />

                    <br />
                    <Button type="submit" bsStyle='primary'>Submit</Button>
                </form>
                <br />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventFormData: state.eventFormData,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {updateEventFormData, createEvent})(EventForm)
