import React, {Component} from 'react';

import { SideNavigationBar } from './../Components';

class HomePage extends Component {
    render() {
        return(
            <div>
                <SideNavigationBar />
                <h1>HomePage</h1>
            </div>
        )
    };
}

export default HomePage;