import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  handleOnDelete(index) {
      this.props.onDelete(index)
  }

  render() {
    const { comments } = this.props
    return (
      <div className="CommentList">
        {
          comments.map((item, index) => <Comment comment={item} index={index} onDelete={this.handleOnDelete.bind(this)} key={index} />)
        }
      </div>
    );
  }
}

export default CommentList;
