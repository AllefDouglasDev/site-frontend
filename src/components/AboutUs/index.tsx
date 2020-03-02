import React from 'react';

import { Container, Invert, UserContainer, NameContainer, Title, Name, YearsOld, Spotlight, Description, Circle, Image, ImageContainer } from './styles';

import { images } from '../../assets'

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Title>Quem somos?</Title>
      <Invert top>
        <ImageContainer>
            <Image src={images.allef}/>
          </ImageContainer>
        <UserContainer>
          <NameContainer>
            <Circle />
            <Name>Allef Douglas</Name>
          </NameContainer>
          <YearsOld>21 anos</YearsOld>
          <Description>
          Formado em Análise e Desenvolvimento de Sistemas e Pós Graduado em Arquitetura de Software. 
          </Description>
          <Spotlight>
          “Sempre me importo com o faço, com um olho no dia de hoje e com o outro no que vem pela frente.”
          </Spotlight>
        </UserContainer>
      </Invert>
      <Invert>
        <ImageContainer>
            <Image src={images.flavio}/>
          </ImageContainer>
        <UserContainer>
          <NameContainer>
            <Circle />
            <Name>Flávio Henrique</Name>
          </NameContainer>
          <YearsOld>25 anos</YearsOld>
          <Description>
          Formado em Análise e Desenvolvimento de Sistemas.
          </Description>
          <Spotlight>
          “Me importo com o dia de amanhã, pois é com ele que vai fazer com que o dia de hoje tenha valido a pena. 
          Amo vídeogames e tudo que tiver complexidade o bastante pra me deixar boquiaberto!”
          </Spotlight>
        </UserContainer>
      </Invert>
    </Container>
  );
}

export default AboutUs;
