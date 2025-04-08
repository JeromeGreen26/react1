import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<any | null>(null);

  // Handle creating and updating tasks
  const handleFormSubmit = (taskData: any) => {
    if (isEditing && currentTask) {
      // Update task
      setTasks(
        tasks.map((task) =>
          task.id === currentTask.id ? { ...task, ...taskData } : task
        )
      );
    } else {
      // Create new task
      setTasks([...tasks, { id: Date.now(), ...taskData }]);
    }

    setIsEditing(false);
    setCurrentTask(null); // Clear the editing task
  };

  // Handle editing a task
  const handleEdit = (task: any) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  // Handle deleting a task
  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleFormSubmit} isEditing={isEditing} currentTask={currentTask} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
