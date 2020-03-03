import styled from 'styled-components';
import { colors, devices } from '../../styles'

export const Container = styled.div`
    width: 80%;
    padding: 0px 20px;
    header {
        background-color: transparent;
        box-shadow: none;
    }
`;

export const Categories = styled.div`   
    display: none;
    width: 50%;
    justify-content: space-evenly;
    
    @media ${devices.fromLaptop} {
        display: flex;
    }
`;

export const CategorieTitle = styled.div`  
    font-size: 30px;
    width: 100%;
    font-weight: bold;
    color: ${colors.primary};

    @media ${devices.fromLaptop} {
        display: flex;
        width: 50%;
        font-size: 50px;
    }
`;

export const MenuBurguer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 70px;
    height: 50px;
    padding: 10px;

    @media ${devices.fromLaptop} {
        display: none;
    }
`;

export const MenuBurguerLine = styled.div`
    width: ${({width}: { width?: number }) => width ? width : 100}%;
    height: 3px;
    background-color: ${colors.primary};
`;

export const Item = styled.p`
    font-size: 25px;
    color: ${colors.primary};
`;
