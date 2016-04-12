import React, { Component, PropTypes } from 'react'

export default class PostDetail extends Component {
  render() {
    const { id } = this.props.params
    return (
      <div>
        Je bekijkt nu ID: <h1>{id}</h1>
      </div>
    )
  }
}

PostDetail.propTypes = {
  params: PropTypes.object,
}
