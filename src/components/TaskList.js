import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, handleTask }) => {
  const activeTasks = tasks.filter(task => task.active);
  const doneTasks = tasks.filter(task => task.active === false);

  const activeItems = activeTasks.map(item => (
    <Task
      key={item.id}
      task={item}
      deleteTask={deleteTask}
      handleTask={handleTask}
    />
  ));
  const doneItems = doneTasks.map(item => (
    <Task
      key={item.id}
      task={item}
      deleteTask={deleteTask}
      handleTask={handleTask}
    />
  ));
  return (
    <div>
      <div className="activeList">
        <h1>Things To Do</h1>
        {activeItems}
      </div>

      <div className="doneList">
        <h2>Done Things</h2>
        {doneItems}
      </div>
    </div>
  );
};

export default TaskList;
