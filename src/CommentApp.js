import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount(){
        this._loadComments()
    }

    handlerSubmitComment(comment){
        console.log(comment)
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        this._saveComments(comment)
    }
    _loadComments(){
        let comments = localStorage.getItem('comments')
        if(comments){
            comments = JSON.parse(comments)
            this.state.comments.push(comments)
            this.setState({comments: this.state.comments})
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
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

