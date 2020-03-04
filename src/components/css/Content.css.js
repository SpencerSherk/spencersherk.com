import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const ContentContainer = styled(Container)`
    margin-left: 15.5vw;
    font-size: 18px;
    @media (max-width: 800px) {
       font-size: 13px; 
    }
    @media (max-width: 330px) {
       font-size: 12px; 
    }
`;