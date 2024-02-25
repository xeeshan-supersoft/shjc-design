import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Carousel from '../../pages/Carousel';
import Tabs from '../../pages/Tabs';
import Cards from '../../pages/Cards';
import Carousel2 from '../../pages/Carousel2';
import Stats from '../../pages/Stats';
;


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        {children}
      <Footer />
    </>
  );
}

export default Layout;