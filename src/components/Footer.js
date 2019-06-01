import React, { Component } from 'react'
import { Button, Checkbox, Form,Segment,Select,Icon, Label, Table,Header } from 'semantic-ui-react'





export class Footer extends Component {



  render() {
    return (
      <div style={{
position:'fixed',
zIndex:10,
backgroundColor:'black',
height:50,
width:'100%',
bottom:0,
borderWidth:0,
borderStyle:'solid',
borderTopWidth:50,
backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709771_960_720.jpg')",
      }}>

      </div>
    )
  }
}

export default Footer
