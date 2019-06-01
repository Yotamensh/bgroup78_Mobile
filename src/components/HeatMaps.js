import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { Button, Checkbox, Form,Segment,Select,Icon, Label, Table,Progress } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'; 
import ReactTable from 'react-table'
import "react-table/react-table.css"


export class HeatMaps extends Component {
  state={
    center: {
      lat: null,
      lng: null
    },
    zoom: 11,
  }
  componentDidMount = () => {
    
    var center =this.props.location.state.activities[0]
    this.setState({center:{...this.state.center,lat:center.Lat,lng:center.Lng}})
  }
  getTfootTrProps=()=>({
    style:{display:true?"block" : "none"}
  })
  render() {
    const columns=[{
      Header:'Place name',
      accessor:'ActivityName',
      maxwidth:80,
      width:100
    },
  {
    Header:'Lat',
    accessor:'Lat',
    maxwidth:60,
    width:60
  },
{
  Header:'Lng',
  accessor:'Lng',
  maxwidth:60,
  width:60
}]
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' , opacity:'0.8',position:'relative',top:'0'}}  >
            <Progress percent={100} value='4' total='4' progress='ratio'></Progress>

      <br></br>
        <GoogleMapReact
         bootstrapURLKeys={{ key:'AIzaSyAp6k64boZk_ecqSuXS4w-88PJUv4sYDZE' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          hoverDistance='30'
          heatmapLibrary={true}          
          heatmap={this.props.location.state.activities} 
          onChildClick={(h,p)=>console.log(p.text)}
        >
         {this.props.location.state.activities.map((p,i)=>{
         return (
           <div style={{width: '80%',height:200}}
            key={i} 
           lat={p.Lat} 
           lng={p.Lng} 
           text={p.ActivityName}>
           <Label  
           pointing
           >{p.ActivityName}
           </Label>
           <Icon 
              name='map marker alternate' 
              color='red' 
              size='large' 
              >
            </Icon>
            </div>
         )})}
          
        </GoogleMapReact>

        
      </div>
      
    );
  }
}

export default withRouter(HeatMaps)