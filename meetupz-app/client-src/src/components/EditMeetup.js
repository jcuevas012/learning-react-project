import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class EditMeetup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			city: '',
			address: ''
		}
		this.onSubmit = this.onSubmit.bind(this)
    this.handelInputChange = this.handelInputChange.bind(this)
	}

	componentDidMount() {
		this.getMeetupDetails()
	}

	async getMeetupDetails() {
		try {
			let {id} = this.props.match.params
			let rs = await axios.get(`http://localhost:3000/api/meetupzs/${id}`)
			if (rs.status === 200) {
				this.setState({
          id: rs.data.id,
					name: rs.data.name,
					city: rs.data.city,
					address: rs.data.address
				})
			}
		} catch (e) {
			console.log(e.message)
		}
	}

	async editMeetup(meetup) {
		try {
			let rs = await axios.request({method: 'put', url: `http://localhost:3000/api/meetupzs/${this.state.id}`, data: meetup})
			if (rs.status === 200) {
				this.props.history.push('/')
			}
		} catch (e) {
			console.log(e.message)
		}
	}

	onSubmit(e) {
		e.preventDefault()
		let form = new FormData(e.target)
		let meetup = {
			name: form.get('name'),
			city: form.get('city'),
			address: form.get('address')
		}
		this.editMeetup(meetup)
	}

  handelInputChange(e){
      const target = e.target
      let value = target.value
      let name = target.name
      this.setState({
        [name]: value
      })
  }

	render() {
		return (
			<div>
				<br/>
				<Link className='btn grey' to='/'>Back</Link>
				<h1>Edit Meetup</h1>
				<form onSubmit={this.onSubmit}>
					<div className='input-field'>
						<input type="text" name="name" value={this.state.name} onChange={this.handelInputChange}/>
						<label>Name</label>
					</div>
					<div className='input-field'>
						<input type="text" name="city" value={this.state.city} onChange={this.handelInputChange} />
						<label>City</label>
					</div>
					<div className='input-field'>
						<input type="text" name="address" value={this.state.address} onChange={this.handelInputChange}/>
						<label>Address</label>
					</div>
					<input type="submit" value="Save" className='btn blue'/>
				</form>
			</div>
		)
	}

}

export default EditMeetup
