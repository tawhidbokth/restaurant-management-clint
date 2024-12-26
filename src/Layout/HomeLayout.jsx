import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex-grow py-10">
        <Outlet />
      </main>

      <footer className="-mt-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
