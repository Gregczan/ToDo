/*return z App.js*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    txt: "",
    date: new Date().toISOString().slice(0, 10),
    important: false,
    finishDate: "07-02-2019"
  };

  handleTask = e => {
    const type = e.target.type;
    if (type === "text") {
      this.setState({
        txt: e.target.value
      });
    } else if (type === "date") {
      this.setState({
        finishDate: e.target.value
      });
    } else if (type === "checkbox") {
      this.setState({
        important: e.target.checked
      });
    }
  };

  /*handleSubmit = () => {
    localStorage.setItem("text", JSON.stringify(this.state));
  };*/

  addTask = () => {
    let oldState = this.props.location.state.pushState;
    let counter = oldState.length;
    const task = {
      id: counter,
      txt: this.state.txt,
      date: this.state.date,
      important: this.state.important,
      active: true,
      finishDate: null
    };

    oldState = [...oldState, task];
    console.log(oldState);

    /*localStorage.setItem("text", JSON.stringify(oldState));*/
  };

  render() {
    return (
      <div className="addTask">
        <form>
          <label htmlFor="addEvent" />
          <input
            type="text"
            id="addEvent"
            placeholder="Add an event"
            value={this.state.txt}
            onChange={this.handleTask}
          />
          <label htmlFor="checkbox" /> Priority
          <input
            type="checkbox"
            id="checkbox"
            checked={this.state.important}
            onChange={this.handleTask}
          />
          <label htmlFor="time">Do kiedy zrobić</label>
          <input
            type="date"
            id="time"
            value={this.state.finishDate}
            onChange={this.handleTask}
            min={this.state.date}
          />
          <br />
          <Link
            to={{
              pathname: "/"
            }}
          >
            Add an Event
          </Link>
        </form>
      </div>
    );
  }
}

export default AddTask;
