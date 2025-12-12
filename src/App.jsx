import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Toaster position="bottom-right" />
      <Navbar />
      <main className="grow pt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

