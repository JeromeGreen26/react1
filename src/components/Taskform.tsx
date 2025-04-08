import React, { useState, useEffect } from 'react';

type TaskFormProps = {
  onSubmit: (taskData: any) => void;
  isEditing: boolean;
  currentTask: any | null;
};

const TaskForm = ({ onSubmit, isEditing, currentTask }: TaskFormProps) => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  // If editing, pre-populate the form with the current task data
  useEffect(() => {
    if (isEditing && currentTask) {
      setFormData({ name: currentTask.name, description: currentTask.description });
    }
  }, [isEditing, currentTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '' }); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button type="submit">{isEditing ? 'Update Task' : 'Create Task'}</button>
    </form>
  );
};

export default TaskForm;
