import React, { Fragment } from 'react';

import SideBar from '../Sidebar';
import About from '../Main/About';
import LanguageAndTools from '../Main/LanguageAndTools';
import Contact from '../Main/Contact';
import Footer from '../Main/Footer';

const App = () => (
  <Fragment>
    <SideBar />
    <div id="wrapper">
      <About />
      <LanguageAndTools />
      <Contact />
    </div>
    <Footer />
  </Fragment>
);

export default App;
