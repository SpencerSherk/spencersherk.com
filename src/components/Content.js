import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import {
    ContentContainer,
} from './css/Content.css.js';

function Content(props) {

    return(
        <ContentContainer>
            <Row >
                <Col md={6} xs={12}>
                    {props.children}
                </Col>
            </Row>
        </ContentContainer>
    );

}

export default Content;