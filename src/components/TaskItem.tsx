//components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.title}</span>
      <button onClick={() => alert('Removing task ' + task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;
