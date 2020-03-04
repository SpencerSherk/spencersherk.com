import React from 'react';
import Content from '../components/Content';
import styled from 'styled-components';


let Page = styled.div`
    margin-top: 20vh;
    height: 65vh;
    @media (max-width: 800px) {
        margin-top: 5vh;
        margin-right: 22vw;
    }
`;

let Link = styled.a`
    transition: all 0.5s ease;
    color: #44B282;
    :hover {
        color: #FF8A76;
        text-decoration: none;
    }
`;

function AboutPage(props) {

    return(
        <Page>
            <Content>
            <p>
            I'm Spencer, a 22 y/o developer based in NYC. I recently graduated New 
            York University, with a BA in Computer Science, and am now seeking a full time role.
            </p>

            <p>
            I'm a full stack engineer with experience using Express JS, Node JS, Oracle SQL,
            MongoDB, and React to deliver modern web apps. Alongside my studies I've worked with
            Gro-Intelligence, Casper, and many freelance clients. 
            </p>
            <p>
            My passion is using code to create experiences that tell a story.
            I'm also a VFX artist, and have a strong technical background in 3D rendering technologies, both
            on and off the web. My favorite projects are those that allow me a chance to combine my interests.
            </p>

            </Content>
        </Page>
    );

}

export default AboutPage;