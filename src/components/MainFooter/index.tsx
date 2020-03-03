import React from 'react';

import { images } from '../../assets';
import {
  Container,
  Title,
  LinksContainer,
  Link,
  SocialButtonsContainer,
  SocialButton,
  SocialButtonLogo,
  Copyright,
  Footer,
} from './styles';

export interface Props {}

const MainFooter: React.FC<Props> = () => {
  return (
    <Container>
      <Title>Lotus</Title>

      <LinksContainer>
        <Link>Home</Link>
        <Link>Projetos</Link>
        <Link>Quem Somos</Link>
        <Link>Tecnologias</Link>
        <Link>Contato</Link>
      </LinksContainer>

      <Footer>
        <SocialButtonsContainer>
          <SocialButton>
            <SocialButtonLogo src={images.logo.facebook}/>
          </SocialButton>

          <SocialButton>
            <SocialButtonLogo src={images.logo.instagram}/>
          </SocialButton>

          <SocialButton>
            <SocialButtonLogo src={images.logo.twitter}/>
          </SocialButton>

          <SocialButton>
            <SocialButtonLogo src={images.logo.github}/>
          </SocialButton>
        </SocialButtonsContainer>

        <Copyright>Copyright © 2020</Copyright>
      </Footer>
    </Container>
  )
};

export default MainFooter;