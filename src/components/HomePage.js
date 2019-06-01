import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Button, Checkbox, Form,Segment,Grid } from 'semantic-ui-react'
import PoupDest from './PoupDest';
import swal from 'sweetalert'



    


const PopularDestinations = [
    
    {id : 0, name : "Jerusalem",     
      image:"http://proj.ruppin.ac.il/bgroup78/prod/images/jerk.jpg",
      description:"No trip to Israel could be complete without a tour of Jerusalem, one of the oldest cities in the world",
    },
    {id : 1, name : "Dead Sea",     
    image:"http://proj.ruppin.ac.il/bgroup78/prod/images/Dead-Sea-3-z8sn8q.jpg",
    description:"Dead Sea is the lowest point on Earth, with its salty water that allows you to float, and famous muds with healing properties",
    },
    {id : 2, name : "Masada",     
    image:"http://proj.ruppin.ac.il/bgroup78/prod/images/PikiWiki_Israel_11565_MASADA.jpg",
    description:"Whilst Masada, perched atop a plateau above the Dead Sea is an amazing fortress with Herodian palaces, and an incredible story of heroism attached",
    },
    {id : 3, name : "Tel Aviv",     
    image:"http://proj.ruppin.ac.il/bgroup78/prod/images/Tel%20Aviv%20E%20917X483.jpg",
    description:"Tel Aviv is one of the most vibrant cities in the world. Titled the ‘Mediterranean Capital of Cool’ by the New York Times, this is a 24 hour city with a unique pulse, combining sandy Mediterranean beaches with a world-class nightlife, a buzzing cultural scene, incredible food, UNESCO recognized architecture, and an international outlook. Don’t miss it!",
    },
    {id : 4, name : "Eilat",     
    image:"http://proj.ruppin.ac.il/bgroup78/prod/images/eilat.jpeg",
    description:"Eilat is a resort city, Israel’s window onto the Red Sea, and a base for a vacation of sun and beach, or adventure and thrill with Eilat a great base for exploring",
    },
    {id : 5, name : "Galilee",     
    image:"http://proj.ruppin.ac.il/bgroup78/prod/images/Sea%20of%20Galilee.jpeg",
    description:"Galilee is one of the most beautiful regions of Israel. Situated in the north of the country, it is characterized by its beautiful lush landscape with agriculture",
    }]

class HomePage extends Component {
state={
    i:0
}
nextPic=()=>{
    if(this.state.i>4)
    {
    this.setState({i:0})
    }
    else{
    this.setState({i:this.state.i+1})
}}
prevPic=()=>{
    if(this.state.i<1)
    {
    this.setState({i:5})
    }
    else{
    this.setState({i:this.state.i-1})
}}
    render() {
      return (
        <div>
           <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
      <Button  color='orange' onClick={(this.prevPic)}>Prev Pic</Button>
      
      </Grid.Column>
      <Grid.Column width={6}>
           <Button  positive onClick={()=>this.props.history.push('/Login')}>Start your trip</Button>          
      </Grid.Column>
      <Grid.Column width={5}>
      <Button  color='orange' onClick={(this.nextPic)}>Next Pic</Button>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <Segment style={{ width:'80%',marginLeft:'10%'}} >
    <b><h4 style={{marginLeft:'25%'}} >Top Destinations</h4></b>
    </Segment>
            {(this.state.i<PopularDestinations.length)&&<PoupDest p={PopularDestinations[this.state.i]} onAmount ></PoupDest>}
         
        </div>
        )}
        
    }

    const PopularDestinationsStyle=
    {
     background:'#eca1a6',
     color: '#d64161',
     borderRadios:'8px',
     textAlign:'center',
     padding: '10px'
    }        
export default withRouter(HomePage);
