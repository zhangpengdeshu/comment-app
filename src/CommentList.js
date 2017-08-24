import React,{Component} from 'react'
import Comment from './Comment.js'
class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render(){
        console.log(this.props.comments)
        this.props.comments.map((value)=>{
            console.log(value)
        })
        return (
            <div>
                {this.props.comments.map((comment,i)=><Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default CommentList