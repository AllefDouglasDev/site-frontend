import styled from 'styled-components';
import { colors, metrics, fonts, devices } from '../../styles';

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  @media ${devices.fromLaptop} {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: ${fonts.titleMobile}px;
  margin-bottom: 40px;

  @media ${devices.fromLaptop} {
    font-size: ${fonts.titleDesktop}px;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${fonts.subtitleMobile}px;
  margin-bottom: 40px;
  width: 80%;

  @media ${devices.fromLaptop} {
    font-size: ${fonts.subtitleDesktop}px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  width: 80%;

  @media ${devices.fromLaptop} {
    font-size: ${fonts.bigger}px;
  }
`;

export const CompanyButtonsContainer = styled.div`
  margin-bottom: 20px;

  @media ${devices.fromLaptop} {
    margin-bottom: 40px;
  }
`;

export const CompanyButton = styled.button`
  background-color: white;
  border-style: none;
  cursor: pointer;
`;

export const CompanyLogo = styled.img`
  margin-right: 10px;
  width: 25px;
  height: 25px;

  @media ${devices.fromLaptop} {
    margin-right: 20px;
    width: 50px;
    height: 50px;
  }
`;

export const Email = styled.p`
  font-weight: bold;
  font-size: ${fonts.subtitleMobile}px;
  
  @media ${devices.fromLaptop} {
    font-size: ${fonts.subtitleDesktop}px;
  }
`;

export const TelemarketingContainer = styled.div`
  width: 100%;
`;

export const TelemarketingImage = styled.img`
  width: 100%;

  @media ${devices.fromLaptop} {
    width: 40%;
    float: right;
  }
`;
