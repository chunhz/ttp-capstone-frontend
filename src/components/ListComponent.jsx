import React, { Component } from 'react';
import '../styles/listArea.css'

export default class ListComponent extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  displayList = this.props.selectedWifi.map((place, id ) => {
      // const displayList = 
  return <div>
    <ul className="list">
      <li className = "listItem" onClick= { () =>{
        this.props.locateMarker(id);
      }}>
        <p className = "itemName"  >{place.SSID} </p>
        {/* <p className = "itemSSID"></p> */}
        <p className = "itemDistance">{place.Location_T}</p>
        <p className = "itemAddress">3921 street </p>
        {/* <h1 className = "font">Hello</h1> */}
      </li>
      </ul>
    </div>
    
    })
  display = <p>Hello</p>;


    
  
  render(){
    return (
      <div className = "listArea">
        {this.displayList}
      </div>
      
    )
    
  }
 
}

