import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Icon, Label,Progress,Segment } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'; 
import ReactTable from 'react-table'
import "react-table/react-table.css"


export class Places extends Component {
  state={
    center: {
      lat: null,
      lng: null
    },
    zoom: 11,
  }
  componentDidMount = () => {

    
     var center =this.props.activities[0]
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
      <br></br>
            <Progress style={{ width:'80%',marginLeft:'10%'}}  percent={100} value='3' total='3' progress='ratio' color='orange'></Progress>
    
      <Segment style={{ width:'80%',marginLeft:'10%'}} >
    <b> <h4>This Is Our Trip For You</h4></b>
    </Segment>
      <ReactTable showPagination={false}  data={this.props.activities} columns={columns}  style={{height:'200px',zIndex:'10',width:'80%',background:'white',opacity:'0.9',margin: 'auto'} }   >
      </ReactTable>
      <br></br>
        <GoogleMapReact
         bootstrapURLKeys={{ key:'AIzaSyAp6k64boZk_ecqSuXS4w-88PJUv4sYDZE' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          hoverDistance={30}
          onChildClick={(h,p)=>console.log(p.text)}
        >
         {this.props.activities.map((p,i)=>{
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

export default withRouter(Places)