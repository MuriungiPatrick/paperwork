// Layout.tsx
import React, { ReactNode } from 'react';
import Header from '@/pages/components/Header';
import Sidebar from '@/pages/components/Sidebar';
import Footer from '@/pages/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
  <Header />
<div className="bg-gray-100 d-block d-lg-flex d-flex">
  <aside className="h-100 sidebar">
    <Sidebar />
  </aside> 
  <main className="h-100 main w-100">            
      {children} 
      <Footer />     
  </main>
</div>
    </>
  );
};

export default Layout;
