import React, {Component} from 'react';
import NavigationBarButton from './NavigationBarButton';

import './TopNavigationBar.css';

class TopNavigationBar extends Component {
    render() {
        return(
            <div className="mainDiv">
                <NavigationBarButton linkExtension="/" linkText="Home"/>
                <NavigationBarButton linkExtension="/AboutMe" linkText="About Me"/>
                <NavigationBarButton linkExtension="/Projects" linkText="Projects"/>
                <NavigationBarButton linkExtension="/ContactMe" linkText="Contact Me"/>
            </div>
        );
    }
}

export default TopNavigationBar;