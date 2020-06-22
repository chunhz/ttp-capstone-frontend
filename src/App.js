import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
// import NavBar from "./styles/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './styles/BootStrapNav';
import AddHotspotForm from './components/AddHotspotForm'
export class App extends Component {
  render() {
    // console.log(this.props.formDisplay)
    // let displayForm = true ;
    return (
      <div>
        {/* <NavBar /> */}
        {/* <MapComponent /> */}
        <React.Fragment>
          <Router>
            <NavigationBar />

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
