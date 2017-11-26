import React  from 'react';


const UserProfile = (props) => {
      return (
            <div className="container" >
              <p><strong>Name :</strong> {props.user.name} </p>
              <p><strong>Last Name :</strong> {props.user.lastName} </p>
              <p><strong>Username :</strong> {props.user.username} </p>
              <p><strong>Email :</strong> {props.user.email} </p>
             </div>
           )
        };


export default UserProfile;
