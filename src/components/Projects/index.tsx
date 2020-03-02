import React from 'react';

import Project from '../../models/Project';
import {
  Container,
  Title,
  TitleContainer,
  SeeMore,
  ProjectImagesContainer,
  ProjectImageLi,
  ProjectImage,
} from './styles';

export interface Props {
  projects: Array<Project>;
}

const Projects: React.FC<Props> = ({ projects }) => {

  function handleSeeMore() {
    alert('Ver mais');
  }

  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Projetos</Title>
          <SeeMore onClick={handleSeeMore}>Ver mais</SeeMore>
        </TitleContainer>
      </Container>

      <ProjectImagesContainer>
        {projects && projects.map((project: Project, index: number) => (
          <ProjectImageLi key={index}>
            <ProjectImage src={project.imageUrl}/>
          </ProjectImageLi>
        ))}
      </ProjectImagesContainer>
    </>
  );
}

export default Projects;