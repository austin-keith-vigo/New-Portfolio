import React, {Component} from 'react';
import NavigationBarButton from './NavigationBarButton';

import {BLUE} from './../Globals';

import './TopNavigationBar.css';

class TopNavigationBar extends Component {
    render() {
        return(
            <div style={styles.stylingDiv}>
                <div style={styles.mainDivStyle}>
                    <NavigationBarButton linkExtension="/" linkText="Home"/>
                    <NavigationBarButton linkExtension="/AboutMe" linkText="About Me"/>
                    <NavigationBarButton linkExtension="/Projects" linkText="Projects"/>
                    <NavigationBarButton linkExtension="/ContactMe" linkText="Contact Me"/>
                </div>
            </div>
        );
    }
}

const styles = {
    mainDivStyle: {
        backgroundColor: BLUE,
        paddingLeft: 10
    },
    stylingDiv: {
        backgroundColor: "black",
        paddingTop: 0,
        paddingBottom: 8
    }
}

export default TopNavigationBar;