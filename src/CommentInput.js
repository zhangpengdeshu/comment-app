import React, {Component} from 'react'

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    componentDidMount(){
        this.textarea.focus()
    }

    componentWillMount(){
        this._loadUsername()
    }

    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }

    handlerInputChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handlerContentChange(event){
        this.setState({
            content: event.target.value
        })

    }

    handlerSubmit(){
      if(this.props.onSubmit){
         // const {username,content} = this.state
          this.props.onSubmit({
              username: this.state.username,
              content: this.state.content,
              createdTime: +new Date()
          })
      }
      this.setState({
          content: ""
      })
    }

    handlerUsernameBlur(event){
        this._saveUsername(event.target.value)
    }

    _saveUsername(username){
        localStorage.setItem("username",username)
    }

    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input
                            value={this.state.username}
                            onChange={ this.handlerInputChange.bind(this) }
                            onBlur={ this.handlerUsernameBlur.bind(this) }/>
                    </div>
                </div>

                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={ this.handlerContentChange.bind(this) } ref={(textarea) => this.textarea = textarea}/>
                    </div>
                </div>

                <div className="comment-field-button">
                    <button onClick={ this.handlerSubmit.bind(this) }>发布</button>
                </div>
            </div>
        )
    }

}

export default CommentInput
