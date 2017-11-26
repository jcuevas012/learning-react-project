import React, {Component} from 'react';
import uuid from 'uuid';
import '../css/addItem.css';

class AddItem extends Component {

  constructor() {
    super()
    this.state = {
      typeCategories: []
    }
    this.handleAdd = this.handleAdd.bind(this)

  }

  componentWillMount() {
    this.setState({
      typeCategories: ['Fronted Development', 'Backend Development', 'Design Development']
    });
  }

  render() {
    let categories = this.state.typeCategories.map((category, index) => {
      return (
        <option key={index} value={category}>{category}</option>
      );
    })

    return (
      <form id="add-todo" onSubmit={this.handleAdd}>
        <select ref="category">
          {categories}
        </select>
        <input type="text" ref="item"/>
        <input type="submit" value="Send"/>
      </form>
    );
  }

  handleAdd(e) {
    e.preventDefault();
    let todo = {
      id: uuid.v4(),
      title: this.refs.item.value,
      type: this.refs.category.value
    };
    this.props.onAddItem(todo);
  }
}

export default AddItem;
