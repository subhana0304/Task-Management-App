import { useEffect, useState } from 'react';
import { notification } from 'antd';
import { TaskForm } from './TaskForm';
import { TaskTable } from './TaskTable';

export interface Task {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch tasks from localStorage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  const addTask = (task: Task) => {
    // Add task to localStorage and update the tasks array in state
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    setTasks(prevTasks => [...prevTasks, task]);
    setError(null);
    notification.success({
      message: 'Task Added',
      description: 'Your task has been added successfully!',
    });
  };

  const deleteTask = (id: number) => {
    // Remove task from localStorage and update the tasks array in state
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter((task: Task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setTasks(updatedTasks);
  };

  const editTask = (task: Task) => {
    // Edit task functionality
    console.log('Editing task:', task);
  };

  return (
    <div>
      {/* Show error message if any */}
      {error && <div className="error">{error}</div>}

      {/* Task form to add a new task */}
      <TaskForm onAddTask={addTask} />

      {/* Task table to display all tasks */}
      <TaskTable tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default TaskList;
