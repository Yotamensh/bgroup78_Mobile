import React, { Component } from 'react'
import axios from 'axios';
import {withRouter,Redirect} from 'react-router-dom'
import { Button, Checkbox, Form,Segment,Select,Progress } from 'semantic-ui-react'
import swal from 'sweetalert'


export class Login extends Component {
    state={
        mail:'',
        pass:'',
        login:false

    }
    handlechange=(e,data)=>{
        const {name,value,id,checked}= e.target
        if (!data) {
            this.setState({[name]:value})
            console.log(this.state)
        } 
        else if (data.id==='select') {
            this.setState({[data.name]:data.value})
        }
    }


    
    
handleSubmit=(e)=>
{

 //axios.get('http://proj.ruppin.ac.il/bgroup78/test1/tar5/api/Traveller/Argentina/Age25to39/3/3')
 axios.get('http://proj.ruppin.ac.il/bgroup78/test1/tar5/api/member?email=' +this.state.mail  + '&password=' +this.state.pass)
 .then(res=>{
     console.log(res)
     if (res.data.Password==this.state.pass) {
        swal({
            title: "Login succesed",
            text: "Have A Good Time!",
            icon: "success",
            button: "Lets Start!",
          });
     this.setState({login:true})
    this.props.history.push('/homesearch', { data: res.data })
    } 
    else {
        console.log(res)
        swal({
            title: "Error!",
            text: "Wrong Credentials!",
            icon: "error",
            button: "Try Again!",
          });
    }
 
})
}
    ///api/member?email=" + $("#email").val() + "&password=" + $("#password").val();
    //login Check if yes places else Insert
    ///api/member?email=" +פרמטר מייל + "&password="סיסמה;
    render(){
        if (this.state.login) {
        
        }
        
        return(

    <div>
        <br></br>
        <Progress style={{ width:'80%',marginLeft:'10%'}} percent={33} value='1' total='3' progress='ratio' color='orange'></Progress>
        <Form onSubmit={this.handleSubmit} style={{ width:'80%',marginLeft:'10%'}}>
        <Form.Field>

      <label style={{color:'white'}}>User name</label>
      <input 
        required
        placeholder='Enter your email'
        value={this.state.mail}
        name='mail'
        onChange={this.handlechange}
        />
    </Form.Field>
    <Form.Field>
      <label style={{color:'white'}}>Password</label>
      <input 
        placeholder='Password'
        value={this.state.pass}
        name='pass'
        onChange={this.handlechange}
        />
        <Form.Field >

        </Form.Field >
            <Button style={{color:'black'}} type='submit' >LOGIN</Button>

            <Button style={{color:'black',marginLeft:'31%'}} onClick={()=>this.props.history.push('/Insert')}>REGISTER</Button>


    </Form.Field>
    </Form>
    </div>
    
    )}}   

export default withRouter(Login) 
