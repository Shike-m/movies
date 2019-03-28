import React from 'react';
import { Wraper } from './styles';



class SideBar extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  render() {
    return (
      <Wraper >
        <div id="list-example" className="list-group">
          <a className="list-group-item list-group-item-action" href="#list-item-1">Popular 10</a>
          <a className="list-group-item list-group-item-action" href="#list-item-2">Classic 10</a>
          <a className="list-group-item list-group-item-action" href="#list-item-3">recently 10</a>
          <a className="list-group-item list-group-item-action" href="#list-item-4">Top revenue 10</a>
        </div>
        
      </Wraper>
    );
  }
}

export default SideBar;




