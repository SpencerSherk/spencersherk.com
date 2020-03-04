import styled from 'styled-components';
import React from 'react';
import ReactCarousel from '../components/ReactCarousel';
import ProjectTitle from '../components/ProjectTitle';
import {
    casper,
    gro,
    dasy,
    raytracer,
    opengl,
    gbm,
    omlt,
    nlp,
    v3d,
} from '../slides_json/data.js';

const Projects = styled.div`
	margin-bottom: 10vh;
`;

function ProjectPage(props) {
    return(
        <Projects>
            <ProjectTitle first={true} projName={'Casper'} />
            <ReactCarousel projInfo={casper}/>
            <ProjectTitle projName={'Gro-Intelligence'} />
            <ReactCarousel projInfo={gro}/>
            <ProjectTitle projName={'Dasychira.com'} />
            <ReactCarousel projInfo={dasy}/>
            <ProjectTitle projName={'Pure C++ Raytracer'} />
            <ReactCarousel projInfo={raytracer}/>
            <ProjectTitle projName={'OpenGL 2D/3D Rasterizer'} />
            <ReactCarousel projInfo={opengl}/>
            <ProjectTitle projName={'GoodBye Mommy'} />
            <ReactCarousel projInfo={gbm}/>
            <ProjectTitle projName={'Ocean Machine Learning Toolkit'} />
            <ReactCarousel projInfo={omlt}/>
            <ProjectTitle projName={'Multi-Target Sentiment Analysis'} />
            <ReactCarousel projInfo={nlp}/>
            <ProjectTitle projName={'Various 3D Projects'} />
            <ReactCarousel last={true} projInfo={v3d}/>
        </Projects>
    );
}

export default ProjectPage;

