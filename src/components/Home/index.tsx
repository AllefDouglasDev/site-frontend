import React from 'react'
import Lottie from 'react-lottie';

import { Container, Containers, Title, Subtitle, ContainerLeft, ContainerRight, LinesContainer, LinesImage } from './styles'

import { images } from '../../assets'

const Home = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: images.home,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <Containers>
        <ContainerLeft>
          <Lottie 
            options={defaultOptions}
          />
        </ContainerLeft>
        <ContainerRight>
          <Title>Pronto para <strong>inovar?</strong></Title>
          <Subtitle>Desenvolvimento de Websites e Aplicativos</Subtitle>
        </ContainerRight>
      </Containers>
      <LinesContainer>
        <LinesImage src={images.homeFooter}/>
      </LinesContainer>
    </Container>
  )
}

export default Home
