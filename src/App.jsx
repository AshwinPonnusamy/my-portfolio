import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <main className="grow pt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

