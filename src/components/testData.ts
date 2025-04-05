export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const tasks: Task[] = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: true },
  { id: 3, name: 'Task 3', completed: false },
];
