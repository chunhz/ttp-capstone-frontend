import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  BootStrapNav  from './styles/BootStrapNav.js';
import AddHotspotForm from './components/AddHotspotForm'

export class App extends Component {
  render() {

    return (
      <div>
        {/* <NavBar /> */}
        {/* <MapComponent /> */}
        <React.Fragment>
          <Router>
            <BootStrapNav />

            <Switch>
            <Route exact path="/" component={MapComponent} />
            <Route path="/Add" component={AddHotspotForm} />
            </Switch>
            </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
