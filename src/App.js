import React, { Component } from 'react'
import CardList from './card-list/card-list-component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchForm: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res =>this.setState({friends: res}))
    .catch(err => console.log(err))
  }

  render() {
    const {friends, searchForm} = this.state;
    const filteredMonsters = friends.filter(friend => friend.name.toLowerCase().includes(searchForm.toLowerCase()));
    return (
      <div>
        <input type="search" onChange={e => this.setState({searchForm: e.target.value}, () => console.log(this.state.searchForm))} />
        <CardList friends={filteredMonsters} />
      </div>
    )
  }
}

export default App;
