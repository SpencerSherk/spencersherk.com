import styled from 'styled-components';

export const Track = styled.div`
	position: relative;
	left: 17.9%;
	width: 64.2%;
	margin-bottom: 20px;
	height: 2px;
	background-color: #EFF0F0;
	border-radius: 10px;
`;

export const Thumb = styled.div`
	width: ${props => props.percentage}%;
	height: 100%;
	background-color: #D6D5D5;
	border-radius: 8px;
	transition: width 0.3s ease-in-out;
`;
