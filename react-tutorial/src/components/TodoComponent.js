import React, {Component} from 'react';

import uuid from 'uuid';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class TodoComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.onDeleteItem = this.onDeleteItem.bind(this)
    this.onAddItem = this.onAddItem.bind(this)
  }

  componentWillMount() {
    this.setState({
      todos: [
        {
          id: uuid.v4(),
          title: 'Build Angular Project',
          type: 'Fronted Development'
        }, {
          id: uuid.v4(),
          title: 'Design DB',
          type: 'Backend Development'
        }, {
          id: uuid.v4(),
          title: 'Design Rest',
          type: 'Design Development'
        }
      ]
    });

  }

  render() {
    let todos = this.state.todos.map((todo) => {
      return (<TodoItem key={todo.id} item={todo} onDeleteItem={this.onDeleteItem}/>);
    })

    return (
      <div className="container">
        <ul>
          {todos}
        </ul>
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    );
  }

  onAddItem(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});

  }

  onDeleteItem(item) {
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === item.id);
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

}

export default TodoComponent;
