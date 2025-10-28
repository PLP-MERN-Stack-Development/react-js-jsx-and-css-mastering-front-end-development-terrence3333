import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * TaskManager component for managing tasks
 * Implements add, toggle, delete, and filter functionality
 * @returns {JSX.Element} - TaskManager component
 */
const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: text.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewTaskText('');
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
  };

  // Calculate active tasks count
  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <Card title="Task Manager">
      {/* Task input form */}
      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          />
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Add Task
          </Button>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All ({tasks.length})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({activeCount})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({tasks.length - activeCount})
        </Button>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            No tasks found. Add one to get started!
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <div className="flex items-center gap-3 flex-grow">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span
                  className={`flex-grow ${
                    task.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-900 dark:text-gray-100'
                  } transition-all`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Task stats */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
        <p>{activeCount} task{activeCount !== 1 ? 's' : ''} remaining</p>
      </div>
    </Card>
  );
};

export default TaskManager;
