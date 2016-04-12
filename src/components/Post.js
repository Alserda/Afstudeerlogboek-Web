import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
  render() {
    const { title, author } = this.props.post

    return (
      <li>
        <span className='date'>04-04-2016</span>
        <span className='title'>{title}</span>
        <div className='colorBorder' />
        <span className='author'>Door {author}</span>
      </li>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object,
}
