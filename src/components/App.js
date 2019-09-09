import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AddTask from "./AddTask";

class App extends Component {
  constructor(props) {
    super(props);
    this.counter = 4;
    this.state = {
      tasks: [
        {
          id: 0,
          txt: "Zagrać w Wiedźmina",
          date: "2018-04-15",
          important: true,
          active: true,
          finishDate: null
        },
        {
          id: 1,
          txt: "Spłodzić syna",
          date: "2018-03-12",
          important: true,
          active: true,
          finishDate: null
        },
        {
          id: 2,
          txt: "Postawić dom",
          date: "2018-06-12",
          important: false,
          active: true,
          finishDate: null
        },
        {
          id: 3,
          txt: "Zasadzić drzewo",
          date: "2018-02-15",
          important: true,
          active: true,
          finishDate: null
        }
      ]
    };
  }

  deleteTask = id => {
    let tasks = [...this.state.tasks];

    tasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: tasks
    });
  };

  
  handleTask = id => {
    const tasks = [...this.state.tasks];
    var today = new Date(),
      date = new Date().toISOString().slice(0, 10);
    /*today.getFullYear() +
        "-" +
        "0" +
        today.getMonth() +
         +
        "-" +
        today.getDate();*/

    tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = date;
      }
      return task;
    });
    this.setState({
      tasks: tasks
    });
  };

  addTask = (txt, important, date) => {
    const task = {
      id: this.counter,
      txt: txt,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
  };

  clearAll = () => {
    this.setState({
      tasks: []
    });
  };

  goFurther = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Router>
        <div className="app">
          <div className="title">
            React To Do App
            <br />
            Organize Your Day{" "}
          </div>

          <Route
            exact
            path="/"
            render={props => (
              <Home
                ourState={this.state.tasks}
                deleteTask={this.deleteTask}
                clearAll={this.clearAll}
                handleTask={this.handleTask}
                goFurther={this.goFurther}
                {...props}
              />
            )}
          />
          <Route
            path="/addtask"
            render={props => <AddTask addTask={this.addTask} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
