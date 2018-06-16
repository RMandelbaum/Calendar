

export default (state = [], action) => {


  switch(action.type){
    case 'GET_EVENTS_SUCCESS':
        return action.events;

    case 'ADD_NEW_EVENT':
      return state.concat(action.event);

    case 'REMOVE_EVENT':
        return state.filter(event => event.id !== action.event.id)

  default:
      return state;
    }
}
