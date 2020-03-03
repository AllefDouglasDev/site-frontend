import React from 'react';

import Project from '../../models/Project';
import './style.css';
// import {
//   Container,
//   Title,
//   TitleContainer,
//   SeeMore,
//   ProjectImagesContainer,
//   ProjectImageLi,
//   ProjectImage,
// } from './styles';

export interface Props {
  projects: Array<Project>;
}

const Projects: React.FC<Props> = ({ projects }) => {

  function handleSeeMore() {
    alert('Ver mais');
  }

  return (
    <>
      <>
        <div className="container">
          <div className="title-container">
            <h1 className="title">Projetos</h1>
            <a className="see-more" href="/projects" onClick={handleSeeMore}>Ver mais</a>
          </div>
        </div>

        <ul className="project-images-container">
          {projects && projects.map((project, index) => (
            <li key={index}>
              <img src={project.imageUrl} alt="Imagem"/>
            </li>
          ))}
        </ul>
      </>

      {/* <Container>
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
      </ProjectImagesContainer> */}
    </>
  );
}

export default Projects;