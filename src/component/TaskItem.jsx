
import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  const { task, completed } = item;

  return (
    <div style={{ color: completed ? "green" : "red" }}>
      {task}
      <button onClick={() => onDelete(item)}>Delete Task</button>
      <button onClick={() => onToggle(item)}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;