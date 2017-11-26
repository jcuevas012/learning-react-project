import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(e) {
    e.preventDefault()
    let form = new FormData(e.target)
    let rs = await axios.post('http://localhost:3000/upload', form)
    this.setState({link: rs.data.file})
    alert(rs.data.msg)
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <form encType="multipart/form-data" method="post" onSubmit={this.onSubmit}>
            <input type="file" name="image" />
            <button>Enviar</button>
          </form>
          <a href={this.state.link}>Ver</a>
        </p>
      </div>
    );
  }
}

export default App;
