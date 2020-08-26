import React from 'react';
import CardList from '../component/CardList/CardList';
import SearchBox from  '../component/SearchBox/SearchBox';
import HomePage from '../component/HomePage/HomePage';
import { robots} from '../robot';
import './App.css';


class App extends React.Component {
  constructor() {
  super();
  this.state = {
    searchFields: "",
    robots:robots,
    isSignedIn: true
  }
  }

onInputChange = (event) => {
  this.setState({ searchFields: event.target.value})
}

isSignedIn = (event) => {
  this.setState ({
    isSignedIn: false
  })
}
  render() {
    const filteredRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchFields.toLowerCase())
    })

    
    return (
      <div className="App">
        <h1 className='f1'>RoboFriends</h1>

        {
          this.state.isSignedIn ?
          <HomePage  isSignedIn = {this.isSignedIn} /> : null
        }
        
        <SearchBox onInputChange = {this.onInputChange} /> 

        {
          !filteredRobots.length ?
          <h1>No Result Found</h1> : null
        }       
        <CardList robots={filteredRobots} />
        </div>       
    );
  }

 
}

export default App;
