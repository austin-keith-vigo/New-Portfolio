import React, {Component} from 'react';

// Components
import { TopNavigationBar } from './../Components';

// React-Bootstrap Components
import { Container, Col, Row } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return(
            <div>
                <TopNavigationBar />
                <Container>
                    <Row>
                        <h1>About Me</h1>
                    </Row>
                    <Row>
                        <h1>Projects</h1>
                    </Row>
                    <Row>
                        <h1>Contact Me</h1>
                    </Row>
                </Container>
            </div>
        )
    };
}

export default HomePage;