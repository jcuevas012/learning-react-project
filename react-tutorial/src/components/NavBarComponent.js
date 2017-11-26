import React from 'react';
import {Link} from 'react-router';


const NavBarComponent = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a className="navbar-brand" href="#">DevTasks</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
                <Link to='/' className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-link" >About App</Link>
            </li>
            <li className="nav-item">
              <Link to='/posts' className="nav-link" >Post</Link>
            </li>
          </ul>
          </div>
        </nav>
      )
    };


export default NavBarComponent;
