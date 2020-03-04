import styled from 'styled-components';

export const SectionLine = styled.div`
    color: #D6D5D5;
    text-align: center;
    align-content: center;
    display: inlineBlock;
    white-space: pre;
    font-size: 1.11vw;
    top: 0;

    @media (max-width: 800px){
        opacity: 0;
    }
`;

export const SectionDesc = styled.div`
    text-align: left;
    margin-left: 16.4vw;
    margin-top: 4.6vh;
    float:left;
    @media (max-width: 800px) {
        display:none;
    }
`;

export const MobileTitle = styled.h1`
    text-align: left;
    margin-left: 16.4vw;
    margin-top: 4.6vh;
    display: none;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const SectionTitle = styled.h1`
    color: #b3adad;
    text-align: right;
    margin-top: 5vh;
    margin-right: 16.2vw;
    top: 20px;
    @media (max-width: 800px) {
        display: block;
        text-align: left;
        margin-left: 16.4vw;
    }
`;
