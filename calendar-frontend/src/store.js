import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import events from './reducers/events_reducer'
import eventFormData from './reducers/eventFormData';
import errors from './reducers/errors_reducer';

const reducers = combineReducers({events, eventFormData, errors})
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);
