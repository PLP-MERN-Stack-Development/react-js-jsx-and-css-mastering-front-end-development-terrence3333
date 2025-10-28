import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create Theme Context
const ThemeContext = createContext();

/**
 * Custom hook to use the Theme Context
 * @returns {Object} - Theme context value with isDark and toggleTheme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Theme Provider component for managing light/dark mode
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} - ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize theme from localStorage or default to false (light mode)
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Toggle theme function
  const toggleTheme = () => setIsDark(!isDark);

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
