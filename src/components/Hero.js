import React from 'react';
import {
    SectionLine,
    SectionDesc,
    MobileTitle,
    SectionTitle,
} from './css/Hero.css.js';

function Hero(props) {

    return(
        <div>
            <SectionLine>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            </SectionLine>
            <MobileTitle>
                <p>- {props.title} -</p>
            </MobileTitle>
            <SectionDesc>
                <p>{props.desc}</p>
            </SectionDesc>
            <SectionTitle>
                <p>- {props.title} -</p>
            </SectionTitle>
        </div>
    );

}


export default Hero;