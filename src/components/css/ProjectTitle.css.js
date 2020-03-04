import styled from 'styled-components';

export const HeaderContainer = styled.div`
	position: relative;
	left: 16.3%;
`;

export const Header = styled.div`
	font-size: 250%;
	width: 65vw;
	margin-bottom: 10px;
	margin-top: ${props => (props.first===true) ? '60px' : '105px'};
	@media (max-width: 800px) {
        font-size: 180%;
        text-align: left;
    }
`;
