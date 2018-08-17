import React, { Component } from 'react';

class CommentInput extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange (e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.setState({
      content: ''
    })
    window.localStorage.setItem('username', comment.username)
  }

  componentDidMount () {
    this.textarea.focus()
    const username = window.localStorage.getItem('username')
    username && this.setState({
      username
    })
  }

  render() {
    const { username, content } = this.state
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className="comment-field-input">
            <input onChange={this.handleUsernameChange.bind(this)} value={username} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className="comment-field-input">
            <textarea ref={textarea => this.textarea = textarea} onChange={this.handleContentChange.bind(this)} value={content} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this, {username, content})}>发布</button>
         </div>
      </div>
    );
  }
}

export default CommentInput;
