const initialState = {
    description: "",
    date: "",
    start_time: "",
    end_time: " "
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATED_EVENT':
        return action.eventFormData

      case 'RESET_EVENT_FORM':
        return initialState;

        default:
          return state;
    }
  }
