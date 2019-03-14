import React, { Component } from 'react';
import './App.css';

class DayEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [""],
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
    //Pop a modal with event description that can be edited
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

  render () {

    return(
      <div className="calendar-day">
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

  render() {
    //Determine num weeks/days based on month/year
    return (
      <div>
        <div className="calendar-week">
          {this.renderDays(0)}
        </div>

        <div className="calendar-week">
          {this.renderDays(1)}
        </div>

        <div className="calendar-week">
          {this.renderDays(2)}
        </div>

        <div className="calendar-week">
          {this.renderDays(3)}
        </div>

        <div className="calendar-week">
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