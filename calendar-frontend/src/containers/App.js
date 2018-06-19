import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/NavBar';
import Events from './Events';
import Calendar from './Calendar';
import EventForm from './EventForm';
import { getEvents } from '../actions/events';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className = "Header">
          <div className="TopNav">
            <h1><Link to="/">My Calendar</Link></h1>
          </div>
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Calendar}/>
            <Route exact path = '/events' component = {Events} />
            <Route exact path = '/events/:id/new' component = {EventForm} />
           </Switch>
        </div>
     </Router>

    );
  }


}

const mapStateToProps = state => {
  return {
    events: state.events
    }
  }

export default connect(mapStateToProps, { getEvents })(App);
