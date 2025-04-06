// App.tsx
import { useState } from 'react'; // Only keep necessary imports
import TaskList from './components/TaskList';
import { tasks as initialTasks } from './components/testData';

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <h1>My To-Do App</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
