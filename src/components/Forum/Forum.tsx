import React from 'react'
import OnePost from '../OnePost/OnePost'
import NewPost from '../NewPost/NewPost'
import { MyContext } from '../MyContext'
import { Post } from '../../models/Post';
import './Forum.css'

class Forum extends React.Component {
    static contextType = MyContext;
    render() {
        return (
            <div className="post-box" style={{ 'marginTop': '120px' }}>
                <NewPost />
                {this.context.posts.map((post: Post) => <OnePost currentPost={post} />)}
            </div>
        )
    }
}

export default Forum
