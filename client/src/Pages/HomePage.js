import React, {Component} from 'react';

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

    render() {
        return(
            <div> 
                <TopNavigationBar />
                <Container>
                    <Row>
                        <h1>About Me</h1>
                    </Row>
                </Container>
            </div>
        )
    };
}

export default HomePage;