import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { Button, Checkbox, Form,Segment,Select,Progress} from 'semantic-ui-react'
import swal from 'sweetalert'


export class Insert extends Component {
    state={
        data:{
            Email:'',
            Password:'',
            Country:''
        }
        ,
        places:[]
       

    }
    componentDidMount = () => {
        this.fetchPlaces();
        //On Load delete all activiest from DB "../api/Trip?email=" + email;
    
     }
     fetchPlaces() {

        axios.get('http://proj.ruppin.ac.il/bgroup78/test1/tar5/api/Country')
      
           //axios.get('http://localhost:55390/api/Country')
          //then(res=>console.log(res))
          .then(res=>this.setState({places:res.data}))
          
        }
    handlechange=(e,data)=>{
        const {name,value,id,checked}= e.target
        if (!data) {
            this.setState({data:{...this.state.data,[name]:value}})
      
        } 
        else if (data.id==='select') {
            this.setState({data:{...this.state.data,[data.name]:data.value}})
        }
    }
    handleSubmit=(e)=>
    {
        swal({
            title: "Register succesed",
            text: "Have A Good Time!",
            icon: "success",
            button: "Lets Start!",
          });
    console.log(this.state.data)
     axios.post('http://proj.ruppin.ac.il/bgroup78/test1/tar5/api/member',JSON.stringify(this.state.data),{headers:{"Content-Type":"application/json"}})
     .then(res=>{this.props.history.push('/HomeSearch')} )
     .catch()
       
    }
    render(){
        return(
            <div>
            <br></br>
        <Progress  style={{ width:'80%',marginLeft:'10%'}} percent={33} value='1' total='3' progress='ratio' color='orange'></Progress>
     <Form onSubmit={this.handleSubmit} style={{ width:'80%',marginLeft:'10%'}}>
    <Form.Field>      
      <label  style={{color:'white'}}>User name</label>
      <input 
      required
        placeholder='Enter your email'
        value={this.state.Email}
        name='Email'
        onChange={this.handlechange}
        />
    </Form.Field>
    <Form.Field>
    <label style={{color:'white'}}>Country</label>
    <Select
        id="select"
        required
        placeholder='Select your country'
        options={this.state.places.map(place=>{return {text:place.Country_name,value:place.Country_name} })}
        name='Country'
        onChange={this.handlechange}
          >
          </Select>
    </Form.Field>
    <Form.Field>
      <label style={{color:'white'}}>password</label>
      <input 
        placeholder='Password'
        required
        value={this.state.Password}
        name='Password'
        onChange={this.handlechange}
        />
   <Form.Field></Form.Field>
            <Button type='Submit'>Submit</Button>

            

    </Form.Field>
    </Form>

    </div>
    )}}   

export default withRouter(Insert) 
