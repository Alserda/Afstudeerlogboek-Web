import React, { Component, PropTypes } from 'react'
import Post from './Post'

export default class PostsList extends Component {

  doSomething(post) {
    console.log('doSomething in PostsList for', post)
  }

  render() {
    const postComponents = this.props.posts.map((post, index) => (
      <Post post={post} key={index} onClick={this.doSomething} />
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
