import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';
import ProjectPage from './ProjectPage';
import AboutPage from './AboutPage';
import Hero from '../components/Hero';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Fade from 'react-reveal/Reveal';

import {
    FullPage,
    Nav,
    ArrowDown,
    IntroRow,
    IntroText,
    NavRow,
    ArrowRow,
    MailTo,
} from './css/HomePage.css';


function HomePage(props) {

    const [revealNav, setRevealNav] = useState(0);
    const [revealArrow, setRevealArrow] = useState(0);

    const linkProps = {
        activeClass: "active",
        spy: true,
        smooth: true,
        offset: 14,
        duration: 500,
    }

    return(
        <div>
            <FullPage>
                <Jumbotron className="bg-transparent jumbotron-fluid">
                    <Container fluid >
                        <IntroRow className="justify-content-left ">
                            <Col md={6} xs={12}>
                                <Fade ssrFadeout wait={800} onReveal={() => setRevealNav(!revealNav)}>
                                    { props.title && <IntroText>{props.title}</IntroText> }
                                </Fade>
                            </Col>
                        </IntroRow>
                        <NavRow className="justify-content-left ">
                            <Col md={6} xs={12}>
                                <Fade right cascade ssrFadeout wait={1600} onReveal={() => setRevealArrow(!revealArrow)} when={revealNav}>
                                    <div>
                                        <div>{ props.projects && <Link {...linkProps} to="projLink" duration={500} ><Nav>{props.projects}</Nav></Link> }</div>
                                        <div>{ props.about && <Link {...linkProps} to="aboutLink" duration={1200}><Nav>{props.about}</Nav></Link> }</div>
                                        <div>{ props.contact &&  <Nav><MailTo href="mailto:spencer@spencersherk.com">{props.contact}</MailTo></Nav> }</div>
                                    </div>
                                </Fade>
                            </Col>
                        </NavRow>
                        <ArrowRow className="justify-content-left">
                            <Col md={6} xs={12}>
                                <Fade down ssrFadeout when={revealArrow}>
                                    <Link to="projLink" {...linkProps} duration={500}>
                                        <ArrowDown name="chevron-down" />
                                    </Link>
                                </Fade>
                            </Col>
                        </ArrowRow>
                    </Container>
                </Jumbotron>
            </FullPage>
            <div id="projLink">
                <Hero title={props.projects} desc={props.projDesc}/>
                <ProjectPage />
            </div>
            <div id="aboutLink">
                <Hero title={props.about} desc={props.aboutDesc}/>
                <AboutPage />
            </div>
        </div>
    );
}

export default HomePage;