import React from 'react';
import {
  Navigation,
  About,
  Skills,
  Work,
  Testimonials,
  Contact,
  Home,
} from './components';

const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
