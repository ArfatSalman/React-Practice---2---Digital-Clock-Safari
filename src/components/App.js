import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let amOrPm = 'AM';

  if (isPM(hours)) {
    amOrPm = 'PM';
    hours = hours - 12;
  }
  const mins = date.getMinutes().toString().padStart(2, '0');
  const secs = date.getSeconds().toString().padStart(2, '0');

  return `${hours}:${mins}:${secs} ${amOrPm}`;
}

function isPM(hours) {
  if (hours > 12) {
    return true;
  }
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: getCurrentTime() };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

function Clock() {
  useEffect(function () {}, []);
}

export default App;
