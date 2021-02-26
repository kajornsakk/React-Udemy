import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from "./Components/UserOutput";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    userName: [
      { Name: 'joe biden' },
      { Name: 'Donald Trump' }
    ]
  }
  userNameHandle = (event) => {
    this.setState({
      userName: [
        { Name: event.target.value },
        { Name: 'Donald Trump' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        change = {this.userNameHandle.bind(this)}
        initialize = {this.state.userName[0].Name}
        />
        <UserOutput 
          userName={this.state.userName[0].Name} 
        />
        <UserOutput 
        userName={this.state.userName[1].Name} 
        />
      </div>
    )
  }
}


