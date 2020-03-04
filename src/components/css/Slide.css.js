import styled from 'styled-components';
import Icon from 'react-fa';

export const SoundDiv = styled.div`
	transition: transform 0.25s ease, opacity 0.25s ease;
	position: absolute;
	background-color: white;
	margin-top: 34vw;
	margin-left: -5em;
	opacity: ${props => props.vis === true ? ".85" : "0"};
	display: ${props => props.audio === true ? "initial" : "none"};
    border-radius: 40px;
    width: 40px;
    height: 40px;
    z-index: 100;
	:hover {
		color: #FF8A76;
		background-size: 100px 100px;
		opacity: 1;
		transform:scale(1.1);
	}
	@media (max-width: 1200px) {
		margin-top: 32.5vw;
		marign-left: -3em;
    }
	@media (max-width: 800px) {
		margin-top: 55vw;
		margin-left: -4em;
    }
`;


export const Sound = styled(Icon)`
	transition: all 0.25s ease;
	position: relative;
	top: 9px;
	left: ${props => props.name === "volume-up" ? "11px" : "15px"};
	font-size: 20px;
`;

export const Link = styled.a`
	transition: all 0.3s ease;
	color: #44B282;
	:hover {
		color: #FF8A76;
		text-decoration: none;
	}
`;

export const Description = styled.p`
	position: relative;
	top:15px;
	width:100%;
	height: 13.5vh;
	font-size: 17px;
	z-index:40;

	@media (max-width: 800px) {
        margin-top: 0;
        margin-left: 0vw;
    }
`;

export const ImgContainer = styled.div`
	width: 67.5vw;
	height: 38.2vw;
	@media (max-width: 800px) {
        width: 67.5vw;
		height: 67.5vw;
    }
`;

export const VidContainer = styled.div`
	width: 67.5vw;
	height: 38.2vw;
	@media (max-width: 800px) {
        width: 67.5vw;
		height: 67.5vw;
    }
`;

export const SlideImg = styled.img`
	transition: opacity 0.3s;
	width: 100%;
	height: 100%;
	object-fit: cover;
	touch-action: none;
`;

export const SlideVid = styled.video`
	transition: opacity 0.3s;
	width: 100%;
	height: 100%;
	object-fit: cover;
	touch-action: none;
`;

export const SlideContainer = styled.div`
	width:67.5vw;
`;