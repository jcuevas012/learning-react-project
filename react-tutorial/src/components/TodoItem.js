import React, {Component} from 'react';
import '../css/todoItem.css';

class TodoItem extends Component {

    constructor(){
      super()
      this.handleDelete = this.handleDelete.bind(this)
    }


  render() {
    return (
      <li className="todo-item">
        <span className="item-name">
          <strong>{this.props.item.title}</strong> - {this.props.item.type}</span>
        <span className="item-remove" onClick={this.handleDelete}>x</span>
      </li>
    );
  }

  handleDelete() {
    this.props.onDeleteItem(this.props.item);
  }
}

TodoItem.propTypes = {
  onDeleteItem: React.PropTypes.func,
  item: React.PropTypes.object
}
export default TodoItem;
