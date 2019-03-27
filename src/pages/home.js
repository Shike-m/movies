import React, { Fragment, Component } from 'react';
import SideBar from '../components/sideBar';
import TopBar from '../components/topBar';
import Contents from '../components/contents';
// import { BrowserRouter, Route, Link } from "react-router-dom";

class Home extends Component{
    render() {
        return (
            <Fragment>
                 <TopBar />
                 <SideBar />
                 <Contents />
            </Fragment>
        )
    }
}

export default Home;