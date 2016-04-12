import React, { Component, PropTypes } from 'react'
import Post from './Post'

export default class PostsList extends Component {
  render() {
    const postComponents = this.props.posts.map((post, index) => (
      <Post post={post} id={index} key={index} />
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
}
