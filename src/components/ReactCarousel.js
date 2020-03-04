import Carousel from '@brainhubeu/react-carousel';
import React, { useState }  from "react";
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';
import ProgressBar from './ProgressBar';
import Slide from './Slide';

import {
    HoverRight,
    HoverLeft,
    RespCarousel,
    ProjectWrapper,
    SlideProgBar,
} from './css/ReactCarousel.css';

function ReactCarousel(props) {

	const [currSlideNum, setSlideNum] = useState(0);

	return (
	  	<ProjectWrapper>
	  		<SlideProgBar percentage={((currSlideNum+1)/props.projInfo.length)*100} />
		    <RespCarousel
			  slidesPerPage={1.357}
			  animationSpeed={250}
		      centered
		      clickToChange
		      keepDirectionWhenDragging
		      finite
		      arrows
	   		  arrowLeft={<HoverLeft name="chevron-left" />}
	   		  arrowLeftDisabled={<Icon name=""/>}
	   		  arrowRight={<HoverRight name="chevron-right" />}
	   		  arrowRightDisabled={<Icon name=""/>}
			  addArrowClickHandler
			  value={currSlideNum}
	          onChange= {e => setSlideNum(e)}
	          slides={
	          	props.projInfo.map(slide => (
					<Slide num={slide.num} audio={slide.audio} link={slide.link} desc={slide.desc} isVideo={slide.isVideo} imgPath={slide.imgPath} currSlide={currSlideNum} />
				))
	      }
		    >
		    </RespCarousel>
	    </ProjectWrapper>
	);
}

export default ReactCarousel;