import React from 'react';

import { Container, Title, TitleContainer, SeeMore } from './styles';

const Projects: React.FC = () => {

  function handleSeeMore() {
    alert('Ver mais');
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Projetos</Title>
        <SeeMore onClick={handleSeeMore}>Ver mais</SeeMore>
      </TitleContainer>
    </Container>
  );
}

export default Projects;