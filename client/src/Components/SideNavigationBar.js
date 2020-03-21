import React, {Component} from 'react';
import NavigationBarButton from './NavigationBarButton';

import './NavigationBarButton.css'

// Standard Navigation bar
class SideNavigationBar extends Component {
    render() {
        return(
            <div>
                <NavigationBarButton text="Home"/>
                <NavigationBarButton text="About Me"/>
            </div>
        );
    }
}

export default SideNavigationBar;