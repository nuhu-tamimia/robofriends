import React from 'react';
import CardList from '../component/CardList';
import { robots} from '../robot';
import './App.css';


class App extends React.Component {
  constructor() {
  super();
  this.state = {
    searchFields: "",
    robots:robots
  }
  }



onInputChange = (event) => {
  this.setState({ searchFields: event.target.value})
}


  render() {
    const filteredRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchFields.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className='f1'>RoboFriends</h1>
        <div className='pa2'>

        <input
        type='text'
        placeholder='search robots'
        className = 'pa3 ba b--green bg-lightest-blue'
        onChange={ this.onInputChange } />
        
        
        </div>
        <CardList robots={filteredRobots} />


      </div>
    );
  }

 
}

export default App;
