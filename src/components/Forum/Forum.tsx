import React from 'react'
import OnePost from '../OnePost/OnePost'
import { MyContext } from '../MyContext'
import { Post } from '../../models/Post';
import './Forum.css'

class Forum extends React.Component {
    static contextType = MyContext;
    render() {
        return (
            <div className="post-box">
                {this.context.posts.map((post: Post) => <OnePost currentPost={post} />)}
            </div>
        )
    }
}

export default Forum
