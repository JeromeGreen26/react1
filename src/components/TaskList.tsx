// components/TaskList.tsx
import { Task } from './testData'; // Import the Task type from testData
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleRemoveTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);  // Update the state in App component
  };

  const handleToggleCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);  // Update the state in App component
  };

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onRemove={handleRemoveTask}
          onToggle={handleToggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;

