import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import Post from './Post'

export default class PostsList extends Component {
  render() {
    const postComponents = this.props.posts.map((post, index) => (
      <Link key={index} to={`/posts/${index}`}>
        <Post post={post} id={index} />
      </Link>
    ));

    return (
      <div className='postsList'>
        <ul>
          {postComponents}
        </ul>
      </div>
    )
  }
}

PostsList.propTypes = {
  posts: PropTypes.array,
  openModal: PropTypes.func,
}
