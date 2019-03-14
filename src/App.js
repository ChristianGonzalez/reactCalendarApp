import React, { Component } from 'react';
import './App.css';

class DayEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDescription: "",
      eventPopup: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewEvent = this.viewEvent.bind(this);
  }

  handleChange(event) {
    this.setState({
      eventDescription: event.target.value,
      eventPopup: this.state.eventPopup,
    });
  }

  handleSubmit(event) {
    this.setState({
      eventDescription: this.state.eventDescription,
      eventPopup: false,
    });
    event.preventDefault();
  }

  viewEvent() {
    //Pop a modal with event description that can be edited
    this.setState({
      eventDescription: this.state.eventDescription,
      eventPopup: true,
    });
  }

  render() {
    const eventDescription = this.state.eventDescription === "" ? "+" : this.state.eventDescription;

    return(
      <div>
        <button className="event-button" onClick={() => this.viewEvent() }>
          {eventDescription}
        </button>
        { this.state.eventPopup &&
            <div className="event-view">
              <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.eventDescription} onChange={this.handleChange} />
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

        <div className="calendar-week">
          {this.renderDays(5)}
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