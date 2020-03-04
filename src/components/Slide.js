import React, { useRef, useEffect, useState } from 'react'; 
import Fade from 'react-reveal/Reveal';

import {
    SoundDiv,
    Sound,
    Link,
    Description,
    ImgContainer,
    VidContainer,
    SlideImg,
    SlideVid,
    SlideContainer,
} from './css/Slide.css';

function Slide(props) {

	const inputRef = useRef();
	const [isMuted, toggleMute] = useState(0);

	useEffect(() => {
		if (props.isVideo === true) {
			if (props.currSlide === props.num) {
				inputRef.current.play();
			} else {
				inputRef.current.pause();
			}
		}
  	});

  	const parsedResult = props.desc.split("|").map((part) => {
	    if (part.includes('<a>')) {
	       return <Link href={props.link} target="_blank">{" " + part.slice(3)}</Link>
	    }
	    return part;
	});

	return (
	    <SlideContainer>
    		{ 
    			(props.isVideo === true 
	    			? 	<VidContainer>
		    				<SlideVid autoplay muted loop ref={inputRef} >
		    					<source src={props.imgPath} type="video/mp4"/>
			    			</SlideVid>
							<SoundDiv audio={props.audio} vis={props.currSlide === props.num} onClick={() => {inputRef.current.muted = !inputRef.current.muted; toggleMute(!isMuted)} }>
								<Sound name={isMuted ? "volume-up" : "volume-off"}/>
							</SoundDiv>
						</VidContainer>
	    			: 	<ImgContainer>
		    				<SlideImg src={props.imgPath}/>
		    			</ImgContainer>
    			)	    		
    		}
       		<Fade bottom when={props.currSlide === props.num}>
	      		<Description> {parsedResult} </Description>
	      	</Fade>
        </SlideContainer>
	);
}

export default Slide;