import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentInput from './CommentInput'

class CommentApp extends Component {

  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(comment) {
    const tmpComment = this.state.comments.concat()
    tmpComment.push(comment)
    this.setState({
      comments: tmpComment
    })
    window.localStorage.setItem('comments', JSON.stringify(tmpComment))
  }

  handleDeleteComment(index) {
    const tmpComment = this.state.comments.concat()
    tmpComment.splice(index, 1)
    this.setState({
      comments: tmpComment
    })
    window.localStorage.setItem('comments', JSON.stringify(tmpComment))
  }

  componentWillMount () {
    const comments = window.localStorage.getItem('comments')
    comments && this.setState({
      comments: JSON.parse(comments)
    })
  }

  render() {
    const { comments } = this.state
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList onDelete={this.handleDeleteComment.bind(this)} comments={comments} />
      </div>
    );
  }
}

export default CommentApp;
