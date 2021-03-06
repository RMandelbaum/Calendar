import { resetEventForm } from './eventsForm';

const EVENTS_API = process.env.REACT_APP_API_URL;

export const setEvents = events => {
    return{
        type: 'GET_EVENTS_SUCCESS',
        events
    }
}

export const getEvents = () => {
    return dispatch => {
        return fetch(`${EVENTS_API}/users/1/events`)
        .then(response => response.json())
        .then(events => dispatch(setEvents(events)))
        .then(events => events)
        .catch(error => error)
    }
}

export const removeEvent = event => {
  return {
    type: 'REMOVE_EVENT',
    event
  }
}

export const createEvent = (event, routerHistory, date) => {
    event.date = date
    return dispatch => {
      return fetch(`${EVENTS_API}/users/1/events`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({event: event})
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(event => {
        dispatch( {type: 'ADD_NEW_EVENT',
                   event: event
                  })
        dispatch(resetEventForm())
        routerHistory.replace(`/events`)
      })
      .catch(error => {
        dispatch({type: 'ERROR'})
        routerHistory.replace(`/events/${date}/new`)
       })
    }
  }

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
   }
  return response;
  }
