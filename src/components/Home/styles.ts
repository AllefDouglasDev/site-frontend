import styled from 'styled-components';
import { colors, devices, fonts } from '../../styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    header {
        background-color: transparent;
        box-shadow: none;
    }
`;

export const Containers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;

    @media ${devices.fromLaptop} {
        flex-direction: row;
    }
`

export const ContainerLeft = styled.div`
    width: 100%;

    @media ${devices.fromLaptop} {
        width: 50%;
    }
`

export const ContainerRight = styled.div``

export const Title = styled.h1`
    font-size: ${fonts.bigger}px;
    color: ${colors.primary};
    font-weight: normal;
    text-align: center;
    margin-bottom: 20px;

    @media ${devices.fromLaptop} {
        text-align: start;
        font-size: ${fonts.homeTitleDesktop}px;
    }
`

export const Subtitle = styled.h3`
    font-size: ${fonts.regular}px;
    color: ${colors.primary};
    font-weight: normal;
    text-align: center;

    @media ${devices.fromLaptop} {
        text-align: start;
        font-size: ${fonts.homeSubtitleDesktop}px;
    }
`

export const LinesContainer = styled.div`
  width: 100%;
`;

export const LinesImage = styled.img`
  width: 100%;
`;