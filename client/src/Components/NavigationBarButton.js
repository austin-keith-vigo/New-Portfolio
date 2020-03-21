import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavigationBarButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Link className="link" to={this.props.linkExtension}>
                <text className="linkText"> {this.props.linkText} </text>
            </Link>
        );
    }
}

export default NavigationBarButton;