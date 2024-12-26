import React, { useContext } from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import NewsSection from './NewsSection';
import FoodMenu from './FoodMenu';
import { ThemeContext } from '../Provider/ThemeProvider';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <Banner></Banner>
      <TopFoods></TopFoods>
      <FoodMenu></FoodMenu>
      <NewsSection></NewsSection>
    </div>
  );
};

export default Home;
