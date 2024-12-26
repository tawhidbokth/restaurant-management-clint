import React from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import NewsSection from './NewsSection';
import FoodMenu from './FoodMenu';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <FoodMenu></FoodMenu>
      <NewsSection></NewsSection>
    </div>
  );
};

export default Home;
