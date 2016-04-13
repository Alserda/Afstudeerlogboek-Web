import React, { Component, PropTypes } from 'react';
import PostsList from '../components/PostsList';
import PostDetail from '../components/PostDetail';

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
    this.props.history.push('/');

    this.setState({
      modalIsOpen: false,
      postModalComponent: {},
      postModalIdentifier: null,
    });
  }

  componentWillMount() {
    const { id } = this.props.params;

    if (id) {
      return this.openModal(posts[id], id)
    }
  }

  componentWillReceiveProps({ params: { id } }) {
    if (id) {
      return this.openModal(posts[id], id)
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state.modalIsOpen ? 'modal is open' : 'modal is gesloten')
    return (
      <div className='postsView'>
        <PostsList posts={posts} />

        {this.state.modalIsOpen ?
          <PostDetail
            modalIsOpen={this.state.modalIsOpen}
            post={this.state.postModalComponent}
            closeModal={this.closeModal}
          /> : null}


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
