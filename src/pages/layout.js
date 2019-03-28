import React, { Fragment, Component } from 'react';
import SideBar from '../components/sideBar';
import TopBar from '../components/topBar';
import Contents from '../components/contents';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Layout extends Component{
    render() {
        return (
            <Fragment>
                <TopBar />
                <SideBar />
                <Router>
                    <div style={{margin:'30px 50px auto 300px'}}>
                        <Route path='/' exact component={Contents} />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

export default Layout;