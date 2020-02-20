import React from 'react';

// import { Container } from './styles';
import {
  AboutUs,
  Home,
  Contact,
  Portfolio,
} from '../../components';

const Main: React.FC = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Main;
