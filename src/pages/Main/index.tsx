import React from 'react';

import { Container } from './styles';
import Project from '../../models/Project';
import {
  AboutUs,
  Home,
  Contact,
  Projects,
  Techs,
} from '../../components';

const Main: React.FC = () => {

  const projects: Array<Project> = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1528660544347-95a93c58e424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <Container>
      <Home />
      <Projects projects={projects}/>
      <AboutUs />
      <Techs />
      <Contact />
    </Container>
  );
}

export default Main;
