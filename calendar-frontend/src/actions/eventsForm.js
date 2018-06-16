export const updateEventFormData = eventFormData => {
    return {
      type: 'UPDATED_EVENT',
      eventFormData
    }
  }

  export const resetEventForm = () => {
    return {
      type: 'RESET_EVENT_FORM'
    }
  }
