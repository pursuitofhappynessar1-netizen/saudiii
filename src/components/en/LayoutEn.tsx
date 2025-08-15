import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarEn from './NavbarEn';
import FooterEn from './FooterEn';

const LayoutEn = () => {
  return (
    <div className="min-h-screen bg-white font-tajawal" dir="ltr">
      <NavbarEn />
      <main>
        <Outlet />
      </main>
      <FooterEn />
    </div>
  );
};

export default LayoutEn;