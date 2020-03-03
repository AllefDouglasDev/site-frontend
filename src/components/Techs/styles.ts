import styled from 'styled-components';
import { colors, metrics, fonts, devices } from '../../styles';

export const Container = styled.div`
  width: 100%;
  padding: 0px ${metrics.space.small};
  margin-bottom: 20px;
  padding: 20px;

  @media ${devices.fromLaptop} {
    width: 80%;
  }
`;

export const Title = styled.h2`
  color: ${colors.primary};
  font-size: ${fonts.bigger}px;
  font-weight: bold;

  @media ${devices.fromLaptop} {
    font-size: 50px;
  }
`;

export const Subtitle = styled.h3`
  margin: 40px 0px;
  font-size: ${fonts.subtitleMobile}px;
  font-weight: normal;

  @media ${devices.fromLaptop} {
    font-size: ${fonts.subtitleDesktop}px;
    width: 50%;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.fromLaptop} {
    flex-direction: row;
  }
`;

export const TechImagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.fromLaptop} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const DuoTechRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const LogoAngular = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const LogoReact = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
`;

export const LogoAndroidStudio = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const LogoJava = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
`;

export const LogoNode = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const LogoPhp = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
`;

export const LogoAws = styled.img`
  object-fit: contain;
  width: 110px;
  height: 110px;
`;

export const BusinessImagesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media ${devices.fromLaptop} {
    padding-top: 50px;
    flex: 2;
  }
`;

export const BusinessImage = styled.img`
   @media ${devices.fromLaptop} {
    width: 50%;
    height: 50%;
  }
`;