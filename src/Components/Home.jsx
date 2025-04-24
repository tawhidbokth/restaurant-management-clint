import Banner from './Banner';
import TopFoods from './TopFoods';
import NewsSection from './NewsSection';
import FoodMenu from './FoodMenu';
import Testmonial from './Testmonial';
import BlogSection from './BlogSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <FoodMenu></FoodMenu>
      <BlogSection></BlogSection>
      <NewsSection></NewsSection>
      <Testmonial></Testmonial>
    </div>
  );
};

export default Home;
