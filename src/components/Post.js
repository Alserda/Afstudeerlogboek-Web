import React, { Component, PropTypes } from 'react';
// import Modal from 'react-modal';
import Icon from './Icon';

export default class Post extends Component {
  constructor() {
    super()
    this.clickedPost = this.clickedPost.bind(this)
  }

  clickedPost() {
    this.props.openModal(this.props.post, this.props.id)
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
  id: PropTypes.number,
  openModal: PropTypes.func,
}
