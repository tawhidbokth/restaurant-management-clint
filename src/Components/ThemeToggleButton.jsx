import React, { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`px-4 py-2 rounded-lg ${
        theme === 'light' ? ' text-white' : ' text-black'
      }`}
    >
      {' '}
      {theme ===
      (
        <input
          onClick={toggleTheme}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-black checked:bg-blue-300 checked:[--tglbg:theme(colors.black)]"
        />
      ) ? (
        'Dark'
      ) : (
        <input
          onClick={toggleTheme}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        />
      )}{' '}
    </button>
  );
};

export default ThemeToggleButton;
