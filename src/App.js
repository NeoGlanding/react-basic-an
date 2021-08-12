import React, { Component } from 'react'
import CardList from './card-list/card-list-component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res =>this.setState({friends: res}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <CardList friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
