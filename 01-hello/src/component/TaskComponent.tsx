import React from "react";
import { Task } from "../models/Task";

interface TaskComponentProps {
  task: Task;
}

const TaskComponent: React.FC<TaskComponentProps> = ({ task }) => {
  return (
    <div className="task">
      <span>ID: {task.id}</span>
      <span>text: {task.text}</span>
    </div>
  );
};

export default TaskComponent;
