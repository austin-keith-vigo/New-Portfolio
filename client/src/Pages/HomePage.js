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
                <h1>HomePage</h1>
            </div>
        )
    };
}

export default HomePage;