import React, { Component } from "react";

//class NavbarTop extends Component {
const NavbarBottom = () => {

        let date = new Date();
        return(
         <div>
        <nav class="navbar navbar-default navbar-fixed-bottom">
            <div>
                {date}
            </div>
            <div class="navbar-footer">
                <ul class="nav navbar-nav navbar-right">
                    <li>Copyright &copy; 2020 ___ Inc.</li>
                </ul>
            </div>
         </nav>
         </div>
        );
    };
}
export default NavbarBottom;