import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {string} props.title - Card title (optional)
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Card component
 */
const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors ${className}`}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
