import React, {Component} from 'react'
import MeetupItem from './MeetupItem';
import axios from 'axios';

class Meetups extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meetups: []
    }
  }

  componentWillMount() {
    this.getMeetups()
  }

  async getMeetups() {
    try {
      let response = await axios.get('http://localhost:3000/api/meetupzs')
      let meetups = response.data
      this.setState({meetups})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    let meetupItems = this.state.meetups.map((meetup, i) => {
      return (<MeetupItem item={meetup} key={meetup.id} /> )
    })
    return (
      <div>
        <ul className='collection' >
          {meetupItems}
        </ul>
      </div>
    )
  }

}

export default Meetups
