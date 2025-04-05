import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { tasks } from './components/testData';
import TaskList from './components/TaskList';

function App() {
  

  return (
    <>
      <div>
      <h1>My To-Do App</h1>
      <TaskList tasks={tasks} />
    </div>
     
    </>
  )
}

export default App
