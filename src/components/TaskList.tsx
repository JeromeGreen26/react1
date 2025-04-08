import React from 'react';

type TaskListProps = {
  tasks: any[];
  onEdit: (task: any) => void;
  onDelete: (taskId: number) => void;
};

const TaskList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
