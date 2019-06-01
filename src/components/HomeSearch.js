import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { Button, Checkbox, Form,Segment,Select,Progress } from 'semantic-ui-react'
import swal from 'sweetalert'
import { Places } from './Places';


export class HomeSearch extends Component {
 state={
     days:'',
     mounth:'',
     agree:false,
     country:'',
     agegroup:'',
     mounth:'',
     groupsize:'',
     places:[],
     triger:false,
     activities:[]

     
 }
 




 fetchPlaces() {

  axios.get('http://proj.ruppin.ac.il/bgroup78/test1/tar5/api/Country')

     //axios.get('http://localhost:55390/api/Country')
    //then(res=>console.log(res))
    .then(res=>this.setState({places:res.data}))
    
  }

 componentDidMount = () => {
    this.fetchPlaces();
    //On Load delete all activiest from DB "../api/Trip?email=" + email;

 }

 handlechange=(e,data)=>{
const {name,value,id,checked}= e.target
if (!data) {
    this.setState({[name]:value})
} 
else if (data.id==='select') {
    this.setState({[data.name]:data.value})
}

 }

handleSubmit=(e)=>
{
  axios.get('http://proj.ruppin.ac.il/bgroup78/test1/tar5/api/Traveller/'+this.state.country+'/'+this.state.agegroup+'/'+this.state.days+'/'+this.state.mounth)
 //.then(res=>this.props.history.push('/places', { activities: res.data }))
 .then(res=>this.setState({activities:res.data,triger:true}))
 //.then(res=>console.log(res.data))
 swal({
  title: "Your Trip Is In Progress",
  text: "Have A Good Time!",
  icon: "success",
  button: "See The Trip!",
});
}

    render() {
     if (this.state.triger) {
       return <Places activities={this.state.activities}/>
     } else {
      return (
        <div>
        <br></br>
        <Progress style={{ width:'80%',marginLeft:'10%'}}  percent={66} value='2' total='3' progress='ratio' color='orange'></Progress>
           <Form style={{ width:'80%',marginLeft:'10%'}} onSubmit={this.handleSubmit} >
      <Form.Field >
        <label style={labelsyle}>Number Of Days</label>
        <input 
          name='days'
          placeholder='Enter Days Number' 
          value={this.state.days}
          onChange={this.handlechange}
          required
          type="number"
          />
      </Form.Field>
      <Form.Field>
        <label style={labelsyle}>Mounth</label>
        <input 
          placeholder='Enter Arivval Mounth As Number'
          value={this.state.mounth}
          name='mounth'
          onChange={this.handlechange}
          required
          type="number"
          />
      </Form.Field>
      <Form.Field>
        <label style={labelsyle}>Number Of Travellers In Group</label>
        <input 
          placeholder='Groups size'
          value={this.state.groupsize}
          name='groupsize'
          onChange={this.handlechange}
          required
          type="number"
          />
      </Form.Field>
      <Form.Field>
      <label style={labelsyle}>Country</label>
      <Select
          id="select"
          placeholder='Select Your Origin Country'
          options={this.state.places.map(place=>{return {text:place.Country_name,value:place.Country_name} })}
          name='country'
          onChange={this.handlechange}
          required
            >
            </Select>
      </Form.Field>
      <Form.Field>
      <label style={labelsyle}>Age Group</label>
      <Select 
          id="select"
          placeholder='Select your Age'
           options={[{text:'Age 19-24',value:'Age19to24'},
                      {text:'Age 25-39',value:'Age25to39'},
                      {text:'Age 40-59',value:'Age40to59'},
                      {text:'Age 60-74',value:'Age60to74'},
                      {text:'Age above 75',value:'Age75to'}]}
          name='agegroup'
          onChange={this.handlechange}
          required
           ></Select>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
       
      )
     } 
   
  }
}
const labelsyle={
  color:'white',
  fontSize:13,
  fontFamily:'Josefin Sans'
}

export default withRouter(HomeSearch)