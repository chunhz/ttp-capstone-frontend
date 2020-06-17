//use nyc public api endpoint at https://data.cityofnewyork.us/resource/yjub-udmw.json
import React, { Component } from "react";
import axios from "axios";

export class NYCHotSpotAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://data.cityofnewyork.us/resource/yjub-udmw.json", {
  //       params: {
  //         $limit: 50,
  //       },
  //     })
  //     .then((response) => response.data)
  //     .then((data) =>
  //       this.setState({
  //         data,
  //       })
  //     )
  //     .catch((err) => console.log(err));
  //   // fetch("https://data.cityofnewyork.us/resource/yjub-udmw.json")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     this.setState({ todos: data });
  //   //     console.log(this.state.todos);
  //   //   })
  //   //   .catch(console.log);
  // }
  render() {
    console.log(this.state);
    return <div>helloWord</div>;
  }
}

export default NYCHotSpotAPI;
