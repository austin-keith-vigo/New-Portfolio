import React, {Component} from 'react';
import {BLUE} from './../Globals';

// Components
import { TopNavigationBar } from './../Components';

// React-Bootstrap Components
import { Container, Row } from 'react-bootstrap';

// Redux Imports
import { updateWindowDimensions } from './../Actions';
import { connect } from 'react-redux';

class HomePage extends Component {

    constructor(props) {
        super(props);

        // Make a GET request to backend to grab items for the homepage.
        // fetch('/getHomeItems')
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     });
        
    }

    componentWillMount() {
        this.props.updateWindowDimensions();
        window.addEventListener("resize", this.props.updateWindowDimensions.bind(this));
    }

    render() {
        return(
            <div> 
                <TopNavigationBar />
                <Container fluid>
                    <Row>
                        {console.log(this.styles)}
                        <div style={{backgroundColor: BLUE, height: this.props.windowHeight, width: this.props.windowWidth}}></div>
                    </Row>
                </Container>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        windowHeight: state.Homepage.windowHeight,
        windowWidth: state.Homepage.windowWidth
    }
}

const actions = {
    updateWindowDimensions
};

export default connect(mapStateToProps, actions)(HomePage);