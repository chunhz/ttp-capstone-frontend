import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import NavBar from "./styles/NavBar";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://data.cityofnewyork.us/resource/yjub-udmw.json", {
        params: {
          // $limit: 500, UNCOMMENT TO SET A LIMIT, IF WE WANT
        },
      })
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          data,
        })
      )
      .catch((err) => console.log(err));

  }

  render() {
    return (
      <div>
        <NavBar />
        <MapComponent data ={this.state.data}/>
      </div>
    );
  }
}

export default App;
