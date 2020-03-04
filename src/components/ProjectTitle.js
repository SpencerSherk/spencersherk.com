import React from "react";
import Fade from 'react-reveal/Reveal';

import {
    HeaderContainer,
    Header,
} from './css/ProjectTitle.css';

function useOnScreen(options) {
	const ref = React.useRef();
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
		}, options) // options decide how visible element must be on screen

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	return [ref, visible];
}

function ProjectTitle(props) {

	const [ref, visible] = useOnScreen({ rootMargin: '-50px' });

	return (
		<div>
			<HeaderContainer>
				<Fade top when={visible}>
			  		<Header first={props.first}> {props.projName} </Header>
		    	</Fade>
		    </HeaderContainer>
		    <div ref={ref}> </div>
	    </div>
	);
}

export default ProjectTitle;