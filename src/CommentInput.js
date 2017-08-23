import React, {Component} from 'react'

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
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
          const {username,content} = this.state
          this.props.onSubmit({username,content})
      }
      this.setState({
          content: ""
      })
    }

    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.value} onChange={ this.handlerInputChange.bind(this) }/>
                    </div>
                </div>

                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={ this.handlerContentChange.bind(this) }/>
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
