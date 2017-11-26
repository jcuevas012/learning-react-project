import React, {Component} from 'react';
import {Link} from 'react-router';

//custom components
import UserProfile from './UserProfile';
import TodoComponent from './TodoComponent';
import NavBarComponent from './NavBarComponent';

class DevTodo extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'Jorge',
        lastName: 'Cuevas Quezada',
        username: 'jcq012',
        email: 'jcq012@gmail.com'
      }
    };
  }

  render() {
    return (
      <div>
        <NavBarComponent></NavBarComponent>
        <UserProfile user={this.state.user}/>
        <TodoComponent/>
      </div>
    );
  }

}

export default DevTodo;
