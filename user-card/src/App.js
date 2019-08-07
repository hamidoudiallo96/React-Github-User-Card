import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './Components/UserCard';

import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    // state values
    this.state = {
      person: 'hamidoudiallo96',
       user : [],
       followers: []
    }
  }
  
  // React lifecycle methods
  componentDidMount(){
    const{person} = this.state
    axios.get(`https://api.github.com/users/${person}`)
    .then(data =>{
      
      
      this.setState({
        user: data.data
      })
     

    })
    .catch(err =>{
      console.log(err)
    })

    
    
  }

  
  
  componentDidUpdate(prevProps,PrevState){
    const {person} = this.state
  
    axios.get(`https://api.github.com/users/${person}/followers`)
    .then(data =>{
      
      this.setState({
        followers: data.data
      })
      
    })
    .catch(err =>{
      console.log(err)
    })

    console.log(this.state.followers)
    
  }
  
  
  // rendering Components
  render() {
    
    return (
      <div style  ={{backgroundColor:'dodgerBlue'}}>
        <h1 style = {{textAlign: 'center' ,padding:'20px', fontSize:'4rem', color:'crimson'}}>GithubCards </h1>
        
        <UserCard user = {this.state.user} followers = {this.state.followers} />
          
        
      </div>
    )
  }

}

