import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class MeetupDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      detail: ''
    }
    this.onDelete = this.onDelete.bind(this)
  }

  componentWillMount() {
    this.getMeetup()
  }

  async onDelete (){
      try {
        let rs = await axios.delete(`http://localhost:3000/api/meetupzs/${this.state.detail.id}`)
          if(rs.status < 400) {
            this.props.history.push('/')
          }
      } catch (e) {
          console.log(e.message)
      }
  }

  async getMeetup() {
    try {
      let {id} = this.props.match.params
      let response = await axios.get(`http://localhost:3000/api/meetupzs/${id}`)
      let detail = response.data
      this.setState({detail})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <br/>
        <Link to='/' className='btn grey'>
          <i className='fa fa-back'></i>Back</Link>
        <h1>{this.state.detail.name}</h1>
        <ul className='collection'>
          <li className='collection-item'>{this.state.detail.city}</li>
          <li className='collection-item'>{this.state.detail.address}</li>
        </ul>
        <Link to={`/meetups/edit/${this.state.detail.id}`} className='btn'>Edit</Link>
      <button onClick={this.onDelete} className='btn red right'>Delete</button>
      </div>
    )
  }
}

export default MeetupDetail
