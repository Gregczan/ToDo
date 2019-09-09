import React, { Component } from "react";
import Task from "./Task";

class Home extends Component {
  state = { sortOn: false };

  goFurtherMate = () => {
    this.props.history.push("/addtask");
  };
  4;

  handleSort = () => {
    this.setState(prevState => ({
      sortOn: !prevState.sortOn
    }));
  };

  handleDisplay = () => {
    const activeTasks = this.props.ourState.filter(item => item.active);

    if (this.state.sortOn) {
      activeTasks.sort((a, b) => {
        if (a.txt < b.txt) {
          return -1;
        }
        if (a.txt > b.txt) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    const activeItems = activeTasks.map((item, index) => (
      <Task
        key={index}
        task={item}
        deleteTask={this.props.deleteTask}
        handleTask={this.props.handleTask}
        newID={index}
      />
    ));

    return activeItems;
  };

  doneItems = () => {
    const doneTasks = this.props.ourState.filter(item => item.active === false);
    const doneItems = doneTasks.map((item, index) => (
      <Task
        key={index}
        task={item}
        deleteTask={this.props.deleteTask}
        newID={index}
      />
    ));
    return doneItems;
  };

  render() {
    console.log(this.doneItems);

    return (
      <div className="list">
        <button className="button" onClick={this.goFurtherMate}>
          Add a Task
        </button>
        <button className="button" onClick={this.props.clearAll}>
          Clear All
        </button>
        <button className="button buttonSort" onClick={this.handleSort}>
          {this.state.sortOn ? "Unsort" : "Sort Alphabetically"}
        </button>

        <table class="tableActive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event</th>
              <th>Date</th>
              <th>Done?</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>{this.handleDisplay()}</tbody>
        </table>

        <table className="tableDone">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event</th>
              <th>Done on</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>{this.doneItems()}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;

/*handleDisplay = () => {
  const activeTasks = this.props.ourState.filter(item => item.active);

  if (this.state.sortOn === false) {
    const activeItems = activeTasks.map((item, index) => (
      <Task
        key={index}
        task={item}
        deleteTask={this.props.deleteTask}
        handleTask={this.props.handleTask}
        newID={index}
      />
    ));

    return activeItems;
  } else if (this.state.sortOn) {
    activeTasks.sort((a, b) => {
      if (a.txt < b.txt) {
        return -1;
      }
      if (a.txt > b.txt) {
        return 1;
      } else {
        return 0;
      }
    });
    const activeItemsSorted = activeTasks.map((item, index) => (
      <Task
        key={index}
        task={item}
        deleteTask={this.props.deleteTask}
        newID={index}
      />
    ));

    return activeItemsSorted;
  }
};*/
