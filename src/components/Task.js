import React from "react";

const Task = ({ task, deleteTask, handleTask, newID }) => {
  const { txt, date, id, active, important, finishDate } = task;

  const style = {
    fontWeight: "bold"
  };

  if (active) {
    return (
      <tr>
        <td>{newID}</td>
        <td style={important ? style : null}>{txt}</td>
        <td>{date}</td>
        <td>
          <button className="tableButton" onClick={() => handleTask(id)}>
            Done!
          </button>
        </td>
        <td>
          <button className="tableButton" onClick={() => deleteTask(id)}>
            X
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{newID}</td>
        <td>{txt}</td>
        <td>{finishDate}</td>
        <td>
          <button className="tableButton" onClick={() => deleteTask(id)}>
            X
          </button>
        </td>
      </tr>
    );
  }
};
export default Task;
