import React from 'react';

import { images } from '../../assets';
import {
  Container,
  Title,
  Subtitle,
  Description,
  CompanyButtonsContainer,
  CompanyButton,
  CompanyLogo,
  Email,
  TelemarketingContainer,
  TelemarketingImage,
} from './styles';

const Contact: React.FC = () => {

  function handleFacebook() {
    alert('Facebook link');
  }

  function handleInstagram() {
    alert('Instagram link');
  }

  function handleTwitter() {
    alert('Twitter link');
  }

  function handleGithub() {
    alert('Github link');
  }

  return (
    <>
      <Container>
        <Title>Contato</Title>
        <Subtitle>
          Falar conosco é o melhor caminho para o sucesso.
          A gente promete que te responde o mais breve possível!
        </Subtitle>

        <Description>
          Escolha a melhor opção para falar com a gente, e com certeza iremos ver em algumas das plataformas e te retornar pra te ajudar
        </Description>

        <CompanyButtonsContainer>
          <CompanyButton onClick={handleFacebook}>
            <CompanyLogo src={images.logo.facebook}/>
          </CompanyButton>

          <CompanyButton onClick={handleInstagram}>
            <CompanyLogo src={images.logo.instagram}/>
          </CompanyButton>

          <CompanyButton onClick={handleTwitter}>
            <CompanyLogo src={images.logo.twitter}/>
          </CompanyButton>

          <CompanyButton onClick={handleGithub}>
            <CompanyLogo src={images.logo.github}/>
          </CompanyButton>
        </CompanyButtonsContainer>

        <Email>contato@ng.com</Email>

      </Container>

      <TelemarketingContainer>
        <TelemarketingImage src={images.telemarketing}/>
      </TelemarketingContainer>
    </>
  );
}

export default Contact;