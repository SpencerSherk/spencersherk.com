import React from 'react';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

import PxGroteskBoldWoff from './PxGroteskBold.woff';
import PxGroteskBoldWoff2 from './PxGroteskBold.woff2';

export default createGlobalStyle`
	@font-face {
		font-family: 'Px Grotesk Bold';
		src: local('Px Grotesk Bold'), local('PxGroteskBold'),
		url(${PxGroteskBoldWoff2}) format('woff2'),
		url(${PxGroteskBoldWoff}) format('woff');
		font-weight: 300;
		font-style; normal;
	}
`;