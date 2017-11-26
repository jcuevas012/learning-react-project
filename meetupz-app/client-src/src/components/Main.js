import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Meetups from './Meetups'
import About from './About'
import MeetupDetail from './MeetupDetail'
import AddMeetup from './AddMeetup'
import EditMeetup from './EditMeetup'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetups}/>
      <Route path='/about' component={About}/>
      <Route path='/meetups/add' component={AddMeetup}/>
    <Route path='/meetups/edit/:id' component={EditMeetup}/>
      <Route path='/meetups/:id' component={MeetupDetail}/>
    </Switch>
  </main>
)

export default Main
