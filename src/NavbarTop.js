import React, { Component } from "react";


class NavBarContainer extends Component {
    render() {
        const NavBarView = (props) => {
            return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="nav-link">
                Home
                </Link>
                <Link to="/hotspots/add" className="nav-link">
                Add new hotspot
                </Link>
                <Link to="/" className="nav-link">
                Students
                </Link>
            </nav>
            );
        };
    }
}
  export default NavBarContainer;