import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  color: ${colors.primary};
`;

export const SeeMore = styled.a`
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  color: ${colors.primary};
`;