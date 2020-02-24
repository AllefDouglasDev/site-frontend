import styled from 'styled-components';
import { colors, metrics, fonts, devices } from '../../styles';

export const Container = styled.div`
  width: 100%;
  padding: 0px ${metrics.space.small};
  margin-bottom: 20px;
  

  @media ${devices.fromMobileL} {
    width: 80%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
`;

export const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  color: ${colors.primary};
  font-size: ${fonts.bigger}px;
  font-weight: bold;

  @media ${devices.fromMobileL} {
    font-size: 50px;
  }
`;

export const SeeMore = styled.a`
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  color: ${colors.primary};
  font-weight: bold;
  font-size: 16px;

  @media ${devices.fromMobileL} {
    font-size: 30px;
  }
`;

export const ProjectImagesContainer = styled.ul`
  width: 100%;
  height: 210px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  @media ${devices.fromMobileL} {
    width: 80%;
    overflow-x: hidden;
    display: flex;
    height: 400px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProjectImageLi = styled.li`
  display: inline-block;
  width: 150px;
  height: 200px;
  background-color: ${colors.grey};
  margin: 0px 10px;
  border-radius: 12px;
  vertical-align: middle;

  @media ${devices.fromMobileL} {
    flex: 1;
    height: 100%;
    margin: 0px 20px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
