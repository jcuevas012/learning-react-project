import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class AddMeetup extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
  }

  async addNewMeetup(meetup) {
    try {
      let rs = await axios.request({
          method: 'post',
          url: 'http://localhost:3000/api/meetupzs',
          data: meetup
        })
        if(rs.status === 200){
            this.props.history.push('/')
        }

    } catch (e) {
        console.log(e.message)
    }
  }

  onSubmit(e) {
    e.preventDefault()
    let form = new FormData(e.target)
    let newMeetup = {
      name: form.get('name'),
      city: form.get('city'),
      address: form.get('address')
    }
    this.addNewMeetup(newMeetup)
  }

  render() {
    return (
      <div>
        <br/>
        <Link className='btn grey' to='/'>Back</Link>
        <h1>Add Meetup</h1>
        <form onSubmit={this.onSubmit}>
          <div className='input-field'>
            <input type="text" name="name"/>
            <label>Name</label>
          </div>
          <div className='input-field'>
            <input type="text" name="city"/>
            <label>City</label>
          </div>
          <div className='input-field'>
            <input type="text" name="address"/>
            <label>Address</label>
          </div>
          <input type="submit" value="Save" className='btn blue'/>
        </form>
      </div>
    )
  }

}

export default AddMeetup
