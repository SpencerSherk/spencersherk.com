import styled from 'styled-components';
import Icon from 'react-fa';
import Row from 'react-bootstrap/Row';

export const FullPage = styled.div`
    height: 100vh;
    min-height: 350px;
`;


export const Nav = styled.div`
    color: #44B282;
    transition: all 0.25s ease;
    width: 10%;
    line-height: 35px;
    :hover {
        cursor: pointer;
        transform: translateX(10px);
        color: #FF8A76;
    }
    @media (max-width: 800px) {
        font-size: 20px;
        line-height: 60px;
        text-align: right;
        width: 100%;
        :hover {
            cursor: pointer;
            transform: translateX(-10px);
            color: #FF8A76;
        }
    }
`;

export const ScrollTo = styled.div`
    color: #D6D5D5;
    text-align: center;
    align-content: center;
    display: inlineBlock;
`;

export const ArrowDown = styled(Icon)`
    transition: all 0.25s ease;
    :hover {
        cursor: pointer;
        transform: translateY(10px);
    }
`;

export const IntroRow = styled(Row)`

    margin-left: 16vw;
    margin-top: 25vh;
    width: 55vw;

    @media (max-width: 800px) {
        margin-top: 0;
        margin-left: 0;
        width: 100vw;
    }

`;

export const IntroText = styled.h2`
    @media (max-width: 800px) {
        font-size: 22px;
        line-height: 35px;
        margin-right: 10vw;
        margin-left: 10vw;
        margin-top: 10vh;
        width: 60%;
    }
`;

export const NavRow = styled(Row)`
    margin-top: 10vh;
    margin-left: 16vw;
    @media (max-width: 800px) {
        margin-top: 5vh;
        width:70%;
    }

`;

export const ArrowRow = styled(Row)`

    margin-left: 16vw;
    margin-top: 15vh;
    margin-bottom : 2vh;

    @media (max-width: 800px) {
        position: absolute;
        margin-left: 38.5vw;
        width: 100%;
        font-size: 27px;
        margin-top: 12vh;
    }

    @media (max-height: 450px) {
        margin-top: 0vh;
    }

`;

export const MailTo = styled.a`
    color: inherit;
    text-decoration: none;
    font-weight: normal;
    :link,
    :visited,
    :hover,
    :active {
        color: inherit; 
        text-decoration: none;
        font-weight: normal;
    }
`;