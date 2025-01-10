import React, { useContext } from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import NewsSection from './NewsSection';
import FoodMenu from './FoodMenu';
import { ThemeContext } from '../Provider/ThemeProvider';
import Testmonial from './Testmonial';

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
      <Testmonial></Testmonial>
    </div>
  );
};

export default Home;
