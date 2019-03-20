import React, { Component } from 'react';
import './App.css';
import './event';

class DayEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventPopup: false,
      eventEdit: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const eventList = this.state.events;
    eventList[this.state.eventEdit] = event.target.value;

    this.setState({
      events: eventList,
      eventPopup: this.state.eventPopup,
      eventEdit: this.state.eventEdit,
    });
  }

  handleSubmit(event) {
    this.setState({
      events: this.state.events,
      eventPopup: false,
      eventEdit: 0,
    });
    event.preventDefault();
  }

  addEvent() {
    this.setState({
      events: this.state.events,
      eventPopup: true,
      eventEdit: this.state.events.length,
    });
  }

  editEvent(eventNum) {
    this.setState({
      events: this.state.events,
      eventPopup: true,
      eventEdit: eventNum,
    });
  }

  render() {
    const events = this.state.events;
    const eventList = events.map((event, index) =>
      <button className="event-view" onClick={() => this.editEvent(index)}> {event} </button>
    );
    
    return(
      <div>
        {eventList}
        <button className="event-button" onClick={() => this.addEvent() }>
          +
        </button>

        { this.state.eventPopup &&
            <div className="event-view">
              <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.events[this.state.eventEdit]} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
              </form>
            </div>
        }
      </div>
    );
  }
}

class Day extends Component {

  // constructor() {
  //   //Store all events by day in the state
  //   //Store as follows, so we don't have to create an associative array data structure ourselves
  //   /*
  //     "eventDay": {event: new Event()}
  //   */

  //   this.state = {
  //     dayEventList: {}
  //   };
  // }

  render () {

    return(
      <div className="Rtable-cell">
        {this.props.value}
        <DayEvent/>
      </div>
    );
  }

}

class Calendar extends Component {

  renderDays(weekNumber) {
    const week = weekNumber * 7
    const dayArray = [1, 2, 3, 4, 5, 6, 7];

    const days = dayArray.map((day) =>
      <Day key={day + week} value={day + week}> </Day>
    );
    return days;
  }

  goBackOneMonth() {

  }

  goForwardOneMonth() {

  }

  render() {
    //Determine num weeks/days based on month/year
    var today = new Date();
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October" , "November", "December"];
    return (
      <div>
        <div className="calendar-title">
            <button className="left-arrow" onClick={() => this.goBackOneMonth()}> &#60; </button>

            {monthArray[today.getMonth()] + " " + today.getFullYear()}

            <button className="right-arrow" onClick={() => this.goForwardOneMonth()}> &#62; </button>
        </div>
        <div className={`Rtable Rtable--7cols`}>
            {this.renderDays(0)}
          
            {this.renderDays(1)}
          
            {this.renderDays(2)}
          
            {this.renderDays(3)}

            {this.renderDays(4)}

        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default App;