import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            comments: []
        }
    }

    handlerSubmitComment(comment){
        console.log(comment)
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handlerSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp

