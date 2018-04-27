import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import PersonFunctional from './Person/PersonFunctional'
import UserInput from './Assignment/UserInput'
import UserOutput from './Assignment/UserOutput'

class App extends Component {
  state = {
    persons : [
      {'id': 'sdsget', 'name' : 'Kunal', 'age' : 4},
      {'id': 'sdsgeb', 'name' : 'Pikachu', 'age' : 40},
      {'id': 'sdsge8', 'name' : 'Anonymous', 'age' : 23}
    ],
    otherState: 'some other value',
    showPersons: false,
    users : [
      {'username' : 'test_username_1', 'text' : 'Kunal'},
      {'username' : 'test_username_2', 'text' : 'Parakh'},
      {'username' : 'test_username_3', 'text' : 'Hello'}
    ]
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons})
  }

  usernameChangedHandler = (event) => {
    this.setState({
      users : [
        {'username' : 'change_test_username_1', 'text' : 'Changed Kunal'},
        {'username' : event.target.value, 'text' : 'Changed Parakh'},
        {'username' : 'change_test_username_3', 'text' : 'Changed Hello'}
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <PersonFunctional
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">

        <button onClick={() => this.switchNameHandlerWithParam('Whola!!!!!')}>Switch Name</button>
        <button onClick={() => this.togglePersonsHandler()}>Toggle Person</button>

        {persons}

        {
          this.people.map(person => <Person person={person}/>)
        }

        <UserInput changed={this.usernameChangedHandler}/>
        <UserOutput username={this.state.users[0].username} text="Kunal"/>
        <UserOutput username={this.state.users[1].username} text="Parakh"/>
        <UserOutput username={this.state.users[2].username} text="Hello"/>
      </div>
    );
  }
}

export default App;
