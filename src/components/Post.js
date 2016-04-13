import React, { Component, PropTypes } from 'react';
import Icon from './Icon';

export default class Post extends Component {
  render() {
    const { title, author } = this.props.post

    return (
      <li>
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
  id: PropTypes.number,
  post: PropTypes.object,
}
