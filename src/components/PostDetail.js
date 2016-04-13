import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal';
import Icon from './Icon';

export default class PostDetail extends Component {

  render() {
    const { closeModal, modalIsOpen, post } = this.props

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName='modal-overlay'
          className='modal-content'
        >

          <h1>4 maart 2016</h1>
          <h2>Door {post.author}</h2>
          <Icon type='edit-dark' />
          <div className='colorBorder' />
          <p>
            Don’t leave your shopping to the last minute. The more time you have to shop around, the more you can negotiate. It’s difficult to find bargains under pressure, so leave plenty of time to work with wedding vendors. Never hire the first vendor you meet. You should always make your decision based on several vendors.
          </p>
          <p>
            Avoid a Saturday wedding. Saturday is the busiest wedding day of the week, and the most expensive. If you can try to have a Sunday or Friday wedding.
          </p>
        </Modal>
      </div>
    )
  }
}

PostDetail.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  post: PropTypes.object,
}
