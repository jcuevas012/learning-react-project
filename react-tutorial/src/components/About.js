import React, {Component} from 'react';
import {Link} from 'react-router';

class About extends Component{

      render(){
          return(
            <div className="container" >
                <Link to='/' >Back</Link>
                <p>My First App with React</p>
             </div>
           );
        }

}

export default About;
