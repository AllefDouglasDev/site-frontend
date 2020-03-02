import React from 'react';

import { images } from '../../assets';
import {
  Container,
  Title,
  Subtitle,
  ImagesContainer,
  TechImagesContainer,
  BusinessImagesContainer,
  DuoTechRow,
  LogoAngular,
  LogoReact,
  LogoAndroidStudio,
  LogoJava,
  LogoNode,
  LogoPhp,
  LogoAws,
  BusinessImage,
} from './styles';

export interface Props {}

const Techs: React.FC<Props> = () => {

  return (
    <Container>
      <Title>O que usamos para o seu negócio?</Title>
      <Subtitle>Usamos <strong>tecnologias de ponta</strong>, utilizadas por <strong>grandes empresas</strong> como Uber, AirB&B, Netflix e Instagram.</Subtitle>
    
      <ImagesContainer>
        <TechImagesContainer>
          <DuoTechRow>
            <LogoAngular src={images.logo.angular} />
            <LogoReact src={images.logo.react} />
          </DuoTechRow>

          <DuoTechRow>
            <LogoAndroidStudio src={images.logo.android_studio} />
            <LogoJava src={images.logo.java} />
          </DuoTechRow>
          
          <DuoTechRow>
            <LogoNode src={images.logo.node} />
            <LogoPhp src={images.logo.php} />
          </DuoTechRow>

          <LogoAws src={images.logo.aws} />
        </TechImagesContainer>
        
        <BusinessImagesContainer>
          <BusinessImage src={images.man_sitting_on_coins}/>
          <BusinessImage src={images.monitor}/>
          <BusinessImage src={images.man_running_with_coin}/>
        </BusinessImagesContainer>
      </ImagesContainer>
    </Container>
  );
}

export default Techs;