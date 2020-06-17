import React, { Component } from "react";

//if loggined, have logout botton
//usually, is login/sign up botton
class NavbarTop extends Component {
    render() {
        return(
        <div>
            <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header"><a class="navbar-brand" href="index.php">DocPoint</a></div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li ><a href="">Home</a></li>
                        <li><a href="">Add New Hotspot </a></li>
                        <li><a href=""></a></li>
                        
                    </ul>
                </div>
            </div>
            </nav>
        </div>
        )
    }
}

export default NavbarTop;