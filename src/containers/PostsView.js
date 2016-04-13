import React, { Component, PropTypes } from 'react';
import PostsList from '../components/PostsList';

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
