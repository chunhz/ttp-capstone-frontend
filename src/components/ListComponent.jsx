import React, { Component } from 'react';
import '../styles/listArea.css'
import * as hotSpotData from "../data/NYCHotspot.json";
export default class ListComponent extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    
    // const displayList = this.props.spots.map((place, i ) => {
      const displayList = 
       <div>
      <li className = "listItem">
        <p className = "itemName">Name </p>
        <p className = "itemDistance">560 ft.</p>
        <p className = "itemAddress">3921 street </p>
        {/* <h1 className = "font">Hello</h1> */}
      </li>
    </div>
    // })

    return (
      <div className = "listArea">
        {displayList}
      </div>
      
    )
    
  }
 
}

