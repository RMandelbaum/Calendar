

export default (state = [], action) => {
  let idx;
  let e;

  switch(action.type){
    case 'GET_EVENTS_SUCCESS':
        return action.events;

    case 'ADD_NEW_EVENT':
      return state.concat(action.event);

    case 'REMOVE_EVENT':
        return state.filter(e => e.id !== action.e.id)

  default:
      return state;
    }
}
