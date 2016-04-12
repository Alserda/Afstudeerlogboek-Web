import React, { Component, PropTypes } from 'react';

import Icon from './Icon';

export default class Post extends Component {
  constructor() {
    super()
    this.clickedPost = this.clickedPost.bind(this)
  }

  clickedPost() {
    this.props.onClick(this.props.post)
  }

  render() {
    const { title, author } = this.props.post

    return (
      <li onClick={this.clickedPost}>
        <span className='date'>04-04-2016</span>
        <span className='title'>{title}</span>
        <div className='colorBorder' />
        <span className='author'>Door {author}</span>
        <Icon type='edit' />
      </li>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object,
  onClick: PropTypes.func,
}
