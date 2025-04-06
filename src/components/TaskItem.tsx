// components/TaskItem.tsx
import { Task } from './testData'; // Import the Task interface from testData

interface TaskItemProps {
  task: Task;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onRemove, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)} // Toggle task completion
      />
      <span>{task.name}</span> {/* Display the task's name */}
      <button onClick={() => onRemove(task.id)}>Remove</button> {/* Remove task */}
    </li>
  );
};

export default TaskItem;
