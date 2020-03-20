import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// Standard Navigation bar
class SideNavigationBar extends Component {
    render() {
        return(
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/AboutMe">About Me</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/ContactMe">Contact Me</NavLink>
            </div>
        );
    }
}

export default SideNavigationBar;