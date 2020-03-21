import React, {Component} from 'react';

import { TopNavigationBar } from './../Components';

class AboutMePage extends Component {
    constructor(props) {
        super(props);
        fetch('/getAboutMe')
            .then(() => {
                console.log("Got about me data");
            });
    }


    render() {
        return(
            <div>
                <TopNavigationBar />
                <h1>AboutMePage</h1>
            </div>
        )
    };
}

export default AboutMePage;