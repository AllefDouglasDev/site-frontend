import styled from 'styled-components';
import { colors, metrics, fonts, devices } from '../../styles';

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  margin: 50px 0px;

  @media ${devices.fromTablet} {
    width: 80%;
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-size: ${fonts.titleMobile}px;
  margin-bottom: 16px;

  @media ${devices.fromLaptop} {
    margin-right: 100px;
    font-size: ${fonts.bigger}px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.fromLaptop} {
    flex: 1;
  }
`;

export const Link = styled.a`
  margin-bottom: 5px;

  @media ${devices.fromLaptop} {
    margin-bottom: 0px;
    margin-top: 15px;
    font-size: ${fonts.regular}px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.fromLaptop} {
    justify-content: flex-end;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const SocialButton = styled.button`
  background-color: white;
  border-style: none;
  cursor: pointer;
  margin: 0px 5px;
`;

export const SocialButtonLogo = styled.img`
  width: 25px;
  height: 25px;

  @media ${devices.fromLaptop} {
    width: 50px;
    height: 50px;
  }
`;

export const Copyright = styled.span`
  @media ${devices.fromLaptop} {
    font-size: ${fonts.regular}px;
  }
`;
