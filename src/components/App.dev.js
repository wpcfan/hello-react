import React from 'react';
import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';
import TodoApp from './TodoApp';
import DevTools from '../containers/DevTools';

const App = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <Drawer />
    <main className="mdl-layout__content">
      <div className="page-content">
        <TodoApp />
        <DevTools />
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
