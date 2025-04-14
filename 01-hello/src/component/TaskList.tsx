import React, { useState } from "react";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; name: string }[]>([]);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};

export default TaskList;
