import React, { Component } from 'react';
import PostsList from '../components/PostsList';

export default class PostsView extends Component {
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
      <div>
      <PostsList posts={posts} />

      {this.props.children}
      </div>
    )
  }
}
