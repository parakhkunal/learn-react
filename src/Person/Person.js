import React, { Component } from 'react';
import './Person.css';

class Practice extends Component {
  constructor(props) {
    console.log(props);
    super();
      this.people = {
        'name': props.person.name,
        'age': props.person.age
      }
    }
  render() {
    return (
      <div className="Person">
        <h2>Name: {this.people.name}</h2>
        <h3>Age: {this.people.age}</h3>
      </div>
    );
  }
}

export default Practice;
