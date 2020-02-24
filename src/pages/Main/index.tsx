import React from 'react';

// import { Container } from './styles';
import {
  AboutUs,
  Home,
  Contact,
  Projects,
} from '../../components';

const Main: React.FC = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
