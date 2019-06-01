import React, { Component } from 'react'
import HomeSearch from './components/HomeSearch';
import Places from './components/Places';
import Login from './components/Login';
import Insert from './components/Insert';
import HomePage from './components/HomePage';
import HeatMaps from './components/HeatMaps';
import {Switch,Route,withRouter,BrowserRouter,HashRouter,Grid} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './Images/Gallery_Tel Aviv n 1400X740_1.jpg';
import styleSheet from './style/styleSheet.css'
export const login = React.createContext();
export const loginProvider = login.Provider;

var AppStyle = {
  // width: "100%",
  // height: "400px",
  backgroundImage: "url('https://lonelyplanetimages.imgix.net/a/g/hi/t/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg?sharp=10&vib=20&w=1200')",
  paddingTop:'13%',
  paddingBottom:'100%',
 
};


class App extends Component {
  state={
    globalogin:true
  }
  render() {
    return (
      <>
      <loginProvider value={this.state.globalogin}>
      <Header></Header> 
      <div  style={AppStyle } >
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/HomeSearch' exact component={HomeSearch}/>
          {/* <Route path='/places' exact component={Places}/> */}
          <Route path='/HeatMaps' exact component={HeatMaps}/>
          <Route path='/Insert' exact component={Insert}/>
        </Switch>

        </div>
      
        {/* <Footer></Footer> */}
        </loginProvider>
        </>   
    );
  }
}
const styleFont={
  fontFamily:'Josefin Sans'
}
export default withRouter(App);
