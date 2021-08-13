import React, { Component } from 'react'
import CardList from './card-list/card-list-component';
import SearchBox from './search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      searchForm: '',
      counter: 1
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res =>this.setState({friends: res}))
    .catch(err => console.log(err))
  }

  changeHandler = e => {
    this.setState({searchForm: e.target.value})
  }

  testHandler = () => {
    this.setState((prevState, prevProps) => {
      return {counter: prevState.counter + 1}
    })
  }

  render() {
    const {friends, searchForm} = this.state;
    const filteredMonsters = friends.filter(friend => friend.name.toLowerCase().includes(searchForm.toLowerCase()));
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.testHandler}>Increment</button>
        <SearchBox placeHolder="Friend name" changeHandler={this.changeHandler} />
        <CardList friends={filteredMonsters} />
      </div>
    )
  }
}

export default App;
