import React, { PropTypes } from 'react';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

export const CoreLayout = ({ children }) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <Drawer />
    <main className="mdl-layout__content">
      <div className="page-content">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
