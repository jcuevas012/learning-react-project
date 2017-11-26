import React, {Component} from 'react';
import {Link} from 'react-router';

class PostComponent extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {}

  componentDidMount() {
    this.getPost()
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <div key={index} className="card card-body mb-3">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <Link to='/'>Home</Link>
        <h1>Post {this.state.posts.length == 0 && 'Loading ...'}</h1>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }

  getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((posts) => {
      this.setState({posts: posts});
    }).catch((err) => console.log(err));
  }

}

export default PostComponent;
