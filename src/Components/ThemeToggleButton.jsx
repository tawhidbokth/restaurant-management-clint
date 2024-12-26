import React, { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg ${
        theme === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
      }`}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggleButton;
