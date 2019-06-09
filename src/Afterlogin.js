import React, { Component } from 'react';
import Listing from './Listing/index';
import Header from './Header/index';
import Sidebar from './Sidebar/index';

class Afterlogin extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <Listing />
                        </div>
                    </div>    
                </div>
            </div>  
        );
    }
}

export default Afterlogin;
