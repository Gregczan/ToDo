import React, { Component } from "react";
import "./AddTask.css";
import { Link } from "react-router-dom";

class AddTask extends Component {
  state = {
    txt: "",
    date: "",
    minDate: new Date().toISOString().slice(0, 10),
    important: false
  };

  handleTask = e => {
    const type = e.target.type;

    if (type === "text") {
      this.setState({
        txt: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
      });
    } else if (type === "date") {
      this.setState({
        date: e.target.value
      });
    } else if (type === "checkbox") {
      this.setState({
        important: e.target.checked
      });
    }
  };

  handleClick = () => {
    const { txt, important, date } = this.state;

    if (txt.length > 3) {
      this.props.addTask(txt, important, date);
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="addTask">
        <Link to="/">Chuj</Link>
        <form onSubmit={this.handleClick}>
          <label htmlFor="addEvent">
            {" "}
            <input
              type="text"
              id="addEvent"
              placeholder="Add an event"
              value={this.state.txt}
              onChange={this.handleTask}
            />
          </label>
          <br />

          <label htmlFor="time">
            <input
              type="date"
              id="time"
              value={this.state.date}
              onChange={this.handleTask}
              min={this.state.minDate}
            />
          </label>
          <br />
          <label htmlFor="checkbox">
            {" "}
            Priority
            <input
              type="checkbox"
              id="checkbox"
              checked={this.state.important}
              onChange={this.handleTask}
            />
          </label>
          <br />

          <button className="button">Add an Event</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
