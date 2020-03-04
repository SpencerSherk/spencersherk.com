import styled from 'styled-components';
import Icon from 'react-fa';
import ProgressBar from '../ProgressBar';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// outline:1px solid red;
export const HoverRight = styled(Icon)`
	color: #C0C0C0;
	transition: all 0.5s ease;
	top: 43%;
	position: absolute;
	left: 86.0%;
	:hover {
		color: #202020;
		cursor: pointer;
		transform: translateX(5px);
	}
	:after{
	    position:absolute;
	    content:'';
	    top:-18vw;
	    right:-100vw;
	    left:-4vw;
	    bottom:-18vw;
	    z-index:40;
	}
	@media (max-width: 800px) {
        display: none;
    }

`;

// outline:1px solid red;
export const HoverLeft = styled(Icon)`
	color: #C0C0C0;
	transition: all 0.5s ease;
	top: 43%;
	position: absolute;
	right: 86.2%;
	z-index: 1;
	:hover {
		color: #202020;
		cursor: pointer;
		transform: translateX(-5px);
	}
	:after{
	    position:absolute;
	    content:'';
	    top:-18vw;
	    right:-4vw;
	    left:-100vw;
	    bottom:-18vw; 
	    z-index:400;
	}
	@media (max-width: 800px) {
        display: none;
    }
`;

export const RespCarousel = styled(Carousel)`
	max-height: 100%;
	left: 18.5%;
`;

export const ProjectWrapper = styled.div`
  	width: 105%;
  	position: relative;
  	right: 2.5%;
`;

export const SlideProgBar = styled(ProgressBar)`
	position: relative;
	left: 18.5%;
`;