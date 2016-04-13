import React, { Component, PropTypes } from 'react';
import PostsList from '../components/PostsList';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

export default class PostsView extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      postModalComponent: {},
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(post, index) {
    console.log('open modal for', post, index)
    this.setState({
      modalIsOpen: true,
      postModalComponent: post,
      postModalIdentifier: index,
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      postModalComponent: {},
      postModalIdentifier: null,
    })
  }

  render() {
    const posts = [
      {
        title: 'Discover your path to success Part 3',
        author: 'Peter',
      },
      {
        title: 'The Power Of Notes',
        author: 'Henk',
      },
      {
        title: 'Harness The Power Of Your Dreams',
        author: 'Peter',
      },
      {
        title: 'Music For Self Improvement',
        author: 'Henk',
      },
      {
        title: 'Healthy Cooking Is A Must For Families',
        author: 'Henk',
      },
      {
        title: 'Save Money The Crock Pot Way',
        author: 'Henk',
      },
      {
        title: 'Get To Know Your Cookware',
        author: 'Henk',
      },
    ]
    return (
      <div className='postsView'>
        <PostsList posts={posts} openModal={this.openModal} />

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >

          <h2 ref='subtitle'>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

        { /* this.props.children */ }
      </div>
    )
  }
}

PostsView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
