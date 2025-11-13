import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-0">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default MainLayout;
