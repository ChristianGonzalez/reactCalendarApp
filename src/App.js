import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Day extends Component {

  render () {

    return(
      <button className="calendar-day">
        {this.props.value}
      </button>
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
