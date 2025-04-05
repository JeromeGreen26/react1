import React from 'react';
import { Task } from './testData';


interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks available</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.completed ? 'Completed' : 'Not Completed'}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;

