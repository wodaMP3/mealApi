import React from 'react';
import Header from '../components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Layout;
