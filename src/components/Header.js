import React, { Component } from 'react'
import { Icon,Segment } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import swal from 'sweetalert'
import {loginConsumer} from '../App'
//import HeaderPic from 'https://www.google.co.il/url?sa=i&source=images&cd=&ved=2ahUKEwjEq8rCiJHiAhUPbVAKHaAbCVwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.wysetc.org%2F&psig=AOvVaw0E7kjZsYvIFA6Z9fxLe1eg&ust=1557581256582927';

const Header =(props)=> (
  


 <div style={{
  position:'fixed',
  zIndex:10,
  height:50,
  width:'100%',
  top:0,
  textAlign:'center',
  borderTopWidth:50,
  
  backgroundImage: "url('https://cdn.shopify.com/s/files/1/0978/4804/products/21-light-blue_0acb1a7c-36af-4be2-8a43-2d5659f7d86f_1024x1024.jpg?v=1497585737')",
        }}>
          <div style={{marginTop:'10px',float:'left'}}>
          <Icon  onClick={()=>props.history.push('/')}   style={{float:'left',marginTop:'20'}}  name='home' color='black' size='big' />
        </div>
        <div style={{marginTop:'10px',float:'right'}}>
        <Icon 
        onClick={()=>{
          // if (context) {
           
          // } else {
          //   this.props.history.push('/HomeSearch')} 
            
          }
        
        }
         
          style={{float:'right',marginTop:'20'}}  
          name='search' 
          color='black' 
          size='big' />
        </div>
        <div>
        <h2 style={{float:'center',marginTop:'0px',}}  >Get Travel</h2>
        </div>
        <div>
               <h3 style={{float:'center'}}>Plan the perferct trip</h3>
               </div>
       
        </div>
  )
     
     
    



export default withRouter(Header)
