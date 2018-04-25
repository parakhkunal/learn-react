import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import PersonFunctional from './Person/PersonFunctional'

class App extends Component {
  state = {
    persons : [
      {'name' : 'kunal', 'age' : 4},
      {'name' : 'Pikachu', 'age' : 40},
      {'name' : 'Anonymous', 'age' : 23}
    ],
    otherState: 'some other value'
  }

  people = [
    {'name' : 'kunal', 'age' : 4},
    {'name' : 'Pikachu', 'age' : 40}
  ];

  switchNameHandlerWithParam = (newName) => {
    //Don't do this ----> this.state.persons[0].name = "WHy";
    this.setState({
      persons : [
        {'name' : newName, 'age' : 14},
        {'name' : 'Pikachu1', 'age' : 140},
        {'name' : 'Anonymous1', 'age' : 123}
      ]
    })
  }

  switchNameHandler = () => {
    //Don't do this ----> this.state.persons[0].name = "WHy";
    this.setState({
      persons : [
        {'name' : 'Kunal1', 'age' : 14},
        {'name' : 'Pikachu1', 'age' : 140},
        {'name' : 'Anonymous1', 'age' : 123}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {'name' : 'Kunal', 'age' : 10},
        {'name' : event.target.value, 'age' : 15},
        {'name' : 'Anonymous1', 'age' : 20}
      ]
    })
  }

  render() {
    return (
      <div className="App">

      <button onClick={() => this.switchNameHandlerWithParam('Whola!!!!!')}>Switch Name</button>

      <PersonFunctional
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandlerWithParam.bind(this, 'Kunal!!!!!')}/>

      <PersonFunctional
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangedHandler}/>

      <PersonFunctional
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
        click={this.switchNameHandler}/>

        {
          this.people.map(person => <Person person={person}/>)
        }

      </div>
    );
  }
}

export default App;
