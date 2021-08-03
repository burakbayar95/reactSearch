import React, { Component } from 'react'
import Cols from './Cols';
import "./App.css"

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     items:[],
     
     
    };
  }

  componentDidMount()
  {
    
    fetch("../mockData.json")
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data.data.length)
      this.setState({items:data.data})
    });

  }

   clickSearch =()=>{
     for (let i = 0; i < this.state.items.length; i++) {
       console.log(this.state.items[i])
       
     }
 
   console.log("adasd")


  }



  render() {
    return (

      
      <div>
        <img className="logo" src="../logo.png" alt="tesodev logo"></img>
        <input className="input" type="text"></input>
        <button onClick={this.clickSearch} className="button"><div className="searchF">Search</div></button>
        
        <div className="list">

          
        <Cols items={this.state.items}/>
                    </div>
        
                 
        </div>
     
    )
  }
}

