import React, { Component } from 'react';
import '../styles/listArea.css'

export default class ListComponent extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  
  render(){
    const displayList = this.props.wifiLists.map((place) => {
      return <div>
        <ul className="list">
          <li className = "listItem" 
          onClick= { () =>{
            this.props.listMarker(place._id);
          }}
          >
            <p className = "itemSSID">{place.ssid}</p>
            {/* <p className = "itemDistance">{place.Location_T}</p>  */}
            <p className = "itemAddress">{place.location}</p> 
            <p className = "itemBorough">{place.boroughName}</p>
          </li> 
          </ul> 
        </div>
      });  
    console.log((this.props.wifiLists))
    return (
      <div className = "listArea">
        {displayList}
      </div>
      
    )
    
  }
 
}

