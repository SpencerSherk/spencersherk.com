import React from 'react';
import PropTypes from 'prop-types';

import {
    Track,
    Thumb,
} from './css/ProgressBar.css.js';

export default class ProgressBar extends React.Component {
	render(){
		return(
				<div>
					<Track>
						<Thumb percentage={this.props.percentage}/>
					</Track>
				</div>
			);
	}
}

ProgressBar.propTypes = {
	percentage: PropTypes.number,
};