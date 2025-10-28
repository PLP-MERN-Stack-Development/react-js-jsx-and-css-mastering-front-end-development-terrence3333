import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiDataDisplay from './components/ApiDataDisplay';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Welcome to TaskMaster Pro
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your tasks efficiently and explore data from our API integration.
            </p>
          </div>

          <div id="tasks" className="mb-8">
            <TaskManager />
          </div>

          <div id="api">
            <ApiDataDisplay />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
