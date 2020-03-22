import React, {Component} from 'react';
import {BLUE} from './../Globals';

// Components
import { TopNavigationBar } from './../Components';

// React-Bootstrap Components
import { Container, Row } from 'react-bootstrap';

class HomePage extends Component {

    constructor(props) {
        super(props);

        // Make a GET request to backend to grab items for the homepage.
        fetch('/getHomeItems')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    styles = {
        divStyle: {
            backgroundColor: BLUE
        }
    }

    render() {
        return(
            <div> 
                <TopNavigationBar />
                <Container fluid>
                    <Row>
                        <div style={this.styles.divStyle}></div>
                    </Row>
                </Container>
            </div>
        )
    };
}


export default HomePage;